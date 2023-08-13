import { VStack, Box } from "native-base";
import { HeaderComponent } from "../../components/HearderComponent";

import { inputsEditar } from "../../mocks/inputsEditar";
import { InputComponent } from "../../components/InputComponent";
import { ButtonPrimaryComponent } from "../../components/ButtonPrimaryComponent";

export default function EditarEndereco({ navigation }: any) {
  return (
    <VStack
      flex={1}
      backgroundColor="background"
      alignItems="start"
      justifyContent="flex-start"
      padding={5}
    >
      <HeaderComponent
        textTitulo="Editar Endereço"
        navigation={navigation}
        marginTop={20}
      />

      <Box
        marginTop={20}
        marginBottom={20}
      >
        {
          inputsEditar.map((input) => (
            <VStack
              key={input.id}
              alignItems="center"
            >
              <InputComponent
                labelText={input.label}
                placeholderText={input.placeholder}
              />
            </VStack>
          ))
        }
      </Box>

      <ButtonPrimaryComponent
        buttonText={"Salvar alterações"}
        onPress={() => navigation.goBack()}
      />


    </VStack>
  )
}