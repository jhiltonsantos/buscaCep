import { Box, VStack } from "native-base";
import { LogoComponent } from "../../components/LogoComponent";
import { SubtituloComponent } from "../../components/SubtituloComponent";
import { InputComponent } from "../../components/InputComponent";
import { ButtonPrimaryComponent } from "../../components/ButtonPrimaryComponent";

export default function Login({ navigation }: any) {
  return (
    <VStack
      backgroundColor="background"
      flex={1}
      alignItems="center"
      justifyContent="center"
      padding={5}
    >
      <LogoComponent
        marginTop={20}
      />

      <SubtituloComponent
        marginTop={3}
      />

      <Box
        marginTop={20}
        marginBottom={20}
      >
        <InputComponent
          labelText="Usuário"
          placeholderText="Digite o nome do usuário"
        />

        <InputComponent
          labelText="Senha"
          placeholderText="Digite sua senha"
          textoDeSenha={true}
        />
      </Box>


      <ButtonPrimaryComponent
        buttonText={"Entrar"}
        onPress={() => navigation.navigate('Inicio')}
      />
    </VStack>
  )
}

