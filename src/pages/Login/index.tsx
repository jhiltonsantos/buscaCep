import { Box, VStack, useToast } from 'native-base';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { LogoComponent } from '../../components/LogoComponent';
import { SubtituloComponent } from '../../components/SubtituloComponent';
import { InputComponent } from '../../components/InputComponent';
import { ButtonPrimaryComponent } from '../../components/ButtonPrimaryComponent';

import { styles } from './styles';
import { fazerLogin } from '../../services/apiFido/autenticacaoService';
import { pegarDadosTodosUsuario } from '../../services/apiFido/usuarioService';
import { Usuario } from '../../interfaces/usuario';

export default function Login({ navigation }: any) {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [carregando, setCarregando] = useState(true);
  const [todosUsuario, setTodosUsuario] = useState<Usuario[]>([]);
  const toast = useToast();

  useEffect(() => {
    async function verificarLogin() {
      const nome = await AsyncStorage.getItem('nome')
      const senha = await AsyncStorage.getItem('senha')
      if (nome && senha) {
        navigation.replace('Inicio')
      } else {
        const todosUsuarioData = await pegarDadosTodosUsuario();
        if (todosUsuarioData) {
          setTodosUsuario(todosUsuarioData);
        }
        setCarregando(false)
      }
    }

    verificarLogin();
  }, [])

  async function useLogin() {
    const resultado = await fazerLogin(nome, senha)
    if (resultado) {
      const { name, password } = resultado;
      const usuarioEncontrado = todosUsuario.find(
        (usuario: Usuario) => usuario.name === name && usuario.password === password
      );

      if (usuarioEncontrado) {
        AsyncStorage.setItem('nome', name);
        AsyncStorage.setItem('senha', password);
        AsyncStorage.setItem('usuarioId', usuarioEncontrado.id);
        navigation.replace('Inicio');
      }
      else {
        toast.show({
          title: "Usuario não foi encontrado",
          style: styles.toast,
        })
      }
    }
    else {
      toast.show({
        title: "Erro no login",
        description: "Nome do usuário ou senha incorreto",
        style: styles.toast,
      })
    }
  }

  if (carregando) {
    return;
  }

  return (
    <VStack style={styles.container}>
      <LogoComponent marginTop={20} />

      <SubtituloComponent marginTop={3} />

      <Box marginTop={20} marginBottom={20}>
        <InputComponent
          labelText="Usuário"
          placeholderText="Digite o nome do usuário"
          value={nome}
          onChangeText={setNome}
        />

        <InputComponent
          labelText="Senha"
          placeholderText="Digite sua senha"
          textoDeSenha={true}
          value={senha}
          onChangeText={setSenha}
        />
      </Box>

      <ButtonPrimaryComponent
        buttonText={'Entrar'}
        onPress={useLogin}
      />
    </VStack>
  );
}
