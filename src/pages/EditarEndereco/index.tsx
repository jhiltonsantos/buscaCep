import { useEffect } from 'react';
import { VStack, Box } from 'native-base';

import { HeaderComponent } from '../../components/HearderComponent';
import { InputComponent } from '../../components/InputComponent';
import { ButtonPrimaryComponent } from '../../components/ButtonPrimaryComponent';

import { inputsEditar } from '../../mocks/inputsEditar';
import { useEditarEndereco } from '../../hooks/useEditarEndereco';

import { styles } from './styles';


export default function EditarEndereco({ navigation }: any) {
  const { enderecoEditar,
    inputIdToUsuarioProperty,
    handleSalvarAlteracoes,
    atualizarEnderecoEditado
  } = useEditarEndereco({ navigation });

  return (
    <VStack style={styles.container} alignItems="start">
      <HeaderComponent
        textTitulo="Editar Endereço"
        marginTop={20}
        onPress={() => { navigation.navigate('DetalhesEndereco') }}
      />

      <Box marginTop={20} marginBottom={20}>
        {inputsEditar.map(input => (
          <VStack key={input.id}>
            <InputComponent
              labelText={input.label}
              placeholderText={input.placeholder}
              value={enderecoEditar[inputIdToUsuarioProperty[input.id]] as string}
              onChangeText={value => atualizarEnderecoEditado(
                inputIdToUsuarioProperty[input.id], value
              )}
            />
          </VStack>
        ))}
      </Box>

      <ButtonPrimaryComponent
        buttonText={'Salvar alterações'}
        onPress={handleSalvarAlteracoes}
      />
    </VStack>
  );
}
