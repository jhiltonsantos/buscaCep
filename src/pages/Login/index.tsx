import { Box, VStack } from 'native-base';

import { LogoComponent } from '../../components/LogoComponent';
import { SubtituloComponent } from '../../components/SubtituloComponent';
import { InputComponent } from '../../components/InputComponent';
import { ButtonPrimaryComponent } from '../../components/ButtonPrimaryComponent';
import { TelaCarregandoComponent } from '../../components/TelaCarregandoComponent';

import { useLogin } from '../../hooks/useLogin';

import { styles } from './styles';

export default function Login({ navigation }: any) {
  const {
    nome,
    setNome,
    senha,
    setSenha,
    carregando,
    handleLogin
  } = useLogin({ navigation });

  if (carregando) {
    return (
      <TelaCarregandoComponent />
    )
  } else {
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
          onPress={handleLogin}
        />
      </VStack>
    );
  }
}
