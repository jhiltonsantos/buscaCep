import { VStack, Box } from 'native-base';

import { HeaderComponent } from '../../components/HearderComponent';
import { inputsEditar } from '../../mocks/inputsEditar';
import { InputComponent } from '../../components/InputComponent';
import { ButtonPrimaryComponent } from '../../components/ButtonPrimaryComponent';

import { styles } from './styles';

export default function EditarEndereco({ navigation }: any) {
  return (
    <VStack style={styles.container} alignItems="start">
      <HeaderComponent
        textTitulo="Editar Endereço"
        navigation={navigation}
        marginTop={20}
      />

      <Box marginTop={20} marginBottom={20}>
        {inputsEditar.map(input => (
          <VStack key={input.id}>
            <InputComponent
              labelText={input.label}
              placeholderText={input.placeholder}
            />
          </VStack>
        ))}
      </Box>

      <ButtonPrimaryComponent
        buttonText={'Salvar alterações'}
        onPress={() => navigation.goBack()}
      />
    </VStack>
  );
}
