import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useToast } from 'native-base';
import { StyleSheet } from 'react-native';

import { Usuario } from '../interfaces/usuario';
import { pegarDadosTodosUsuario } from '../services/apiFido/usuarioService';
import { fazerLogin } from '../services/apiFido/autenticacaoService';

import { THEMES } from '../config/theme';

export function useLogin({ navigation }: any) {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [carregando, setCarregando] = useState(true);
  const [todosUsuario, setTodosUsuario] = useState<Usuario[]>([]);
  const toast = useToast();

  useEffect(() => {
    async function verificarLogin() {
      const nome = await AsyncStorage.getItem('nome');
      const senha = await AsyncStorage.getItem('senha');
      if (nome && senha) {
        navigation.replace('Inicio');
      } else {
        const todosUsuarioData = await pegarDadosTodosUsuario();
        if (todosUsuarioData) {
          setTodosUsuario(todosUsuarioData);
        }
        setCarregando(false);
      }
    }

    verificarLogin();
  }, []);

  async function handleLogin() {
    const resultado = await fazerLogin(nome, senha);
    if (resultado) {
      const { name, password } = resultado;
      const usuarioEncontrado = todosUsuario.find(
        (usuario: Usuario) => usuario.name === name && usuario.password === password
      );

      if (usuarioEncontrado && usuarioEncontrado.id) {
        AsyncStorage.setItem('nome', name);
        AsyncStorage.setItem('senha', password);
        AsyncStorage.setItem('usuarioId', usuarioEncontrado.id);
        navigation.replace('Inicio');
      } else {
        toast.show({
          title: 'Usuário não foi encontrado',
          style: styles.toast,
        });
      }
    } else {
      toast.show({
        title: 'Erro no login',
        description: 'Nome do usuário ou senha incorretos',
        style: styles.toast,
      });
    }
  }

  return {
    nome,
    setNome,
    senha,
    setSenha,
    carregando,
    todosUsuario,
    handleLogin,
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEMES.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  toast: {
    backgroundColor: THEMES.colors.red[500],
    alignItems: 'center',
    shadow: 5,
    borderRadius: 10,
  },
});
