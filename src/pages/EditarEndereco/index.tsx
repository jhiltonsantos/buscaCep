import { VStack, Box, HStack, Select, CheckIcon, Input, FormControl, Text } from 'native-base';

import { HeaderComponent } from '../../components/HearderComponent';
import { InputComponent } from '../../components/InputComponent';
import { ButtonPrimaryComponent } from '../../components/ButtonPrimaryComponent';

import { inputsEditar } from '../../mocks/inputsEditar';
import { useEditarEndereco } from '../../hooks/useEditarEndereco';

import { styles } from './styles';
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import { estados } from '../../constants/estados';

import ArrowDownIcon from '../../assets/icons/arrow-down.svg';


export default function EditarEndereco({ navigation }: any) {
  const { enderecoEditar,
    inputIdToUsuarioProperty,
    handleSalvarAlteracoes,
    atualizarEnderecoEditado,
    estadoSelecionado,
    setEstadoSelecionado
  } = useEditarEndereco({ navigation });

  return (
    <VStack style={styles.container} alignItems="start">
      <HeaderComponent
        textTitulo="Editar Endereço"
        marginTop={20}
        onPress={() => {
          navigation.replace('DetalhesEndereco', {
            endereco: enderecoEditar,
            enderecoEditado: true
          });
        }}
      />

      <Box marginTop={20} marginBottom={20}>
        {inputsEditar.map(input => (
          <VStack key={input.id}>
            {inputIdToUsuarioProperty[input.id] === 'estado' ? (
              <HStack
                alignItems="center"
                justifyContent="center"
                space={4}
              >
                <FormControl style={styles.formControlCidade}>
                  <FormControl.Label>
                    <Text style={styles.labelText}>
                      Cidade
                    </Text>
                  </FormControl.Label>
                  <Input
                    placeholder="Digite sua cidade"
                    style={styles.input}
                    value={enderecoEditar.cidade}
                    onChangeText={value => atualizarEnderecoEditado('cidade', value)}
                  />
                </FormControl>

                <FormControl style={styles.formControlUF}>
                  <FormControl.Label>
                    <Text style={styles.labelText}>
                      UF
                    </Text>
                  </FormControl.Label>
                  <SelectDropdown
                    buttonStyle={styles.selectList}
                    buttonTextStyle={styles.textSelect}
                    dropdownStyle={styles.dropdown}
                    renderCustomizedButtonChild={
                      () => (
                        <Box flexDirection="row" justifyContent="space-between" alignItems="center">
                          <Text style={styles.textSelect}>{estadoSelecionado || " "}</Text>
                          <ArrowDownIcon style={styles.dropdownButtonDown} />
                        </Box>
                      )
                    }
                    dropdownOverlayColor='transparent'
                    showsVerticalScrollIndicator={false}
                    data={estados}
                    defaultButtonText={estadoSelecionado ? estadoSelecionado : " "}
                    onSelect={(itemSelecionado) => {
                      setEstadoSelecionado(itemSelecionado);
                      atualizarEnderecoEditado('estado', itemSelecionado);
                    }}
                    buttonTextAfterSelection={(itemSelecionado) => {
                      setEstadoSelecionado(itemSelecionado);
                      return itemSelecionado;
                    }}
                    rowTextForSelection={(item) => { return item; }}
                  />
                </FormControl>
              </HStack>
            ) : (
              <InputComponent
                labelText={input.label}
                placeholderText={input.placeholder}
                value={enderecoEditar[inputIdToUsuarioProperty[input.id]] as string}
                onChangeText={value => atualizarEnderecoEditado(inputIdToUsuarioProperty[input.id], value)}
              />
            )}
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
