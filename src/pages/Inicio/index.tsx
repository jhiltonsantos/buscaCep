import { Box, Divider, VStack, useToast } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

import { InputComponent } from '../../components/InputComponent';
import { ButtonPrimaryComponent } from '../../components/ButtonPrimaryComponent';
import { TituloComponent } from '../../components/TituloComponent';
import { ButtonSecondaryComponent } from '../../components/ButtonSecondaryComponent';

import { styles } from './styles';
import { procurarCep } from '../../services/apiViaCep/cepService';
import { EnderecoCep } from '../../interfaces/enderecoCep';

export default function Inicio({ navigation }: any) {
  const [cep, setCep] = useState('');
  const toast = useToast();

  function useDeslogar() {
    AsyncStorage.removeItem('nome')
    AsyncStorage.removeItem('senha')
    navigation.replace('Login')
  }

  async function useProcurarCEP() {
    if (!cep) return;
    const resultado = await procurarCep(cep);
    if (resultado) {
      const enderecoCep: EnderecoCep = {
        cep: resultado.cep,
        logradouro: resultado.logradouro,
        complemento: resultado.complemento,
        bairro: resultado.bairro,
        localidade: resultado.localidade,
        uf: resultado.uf,
        ibge: resultado.ibge,
        gia: resultado.gia,
        ddd: resultado.ddd,
        siafi: resultado.siafi,
      };
      navigation.navigate('DetalhesEndereco', { endereco: enderecoCep, enderecoEditado: false });
    } else {
      toast.show({
        title: "Erro ao buscar cep",
        description: "Verifique",
        style: styles.toast,
      })
    }
  }

  return (
    <VStack style={styles.container}>
      <TituloComponent
        boldText="Olá,"
        text=" vamos buscar por um endereço?"
        marginTop={20}
      />

      <Box marginTop={40} marginBottom={40}>
        <InputComponent
          labelText="CEP"
          placeholderText="Ex: 000000-000"
          value={cep}
          onChangeText={setCep}
        />
      </Box>

      <ButtonPrimaryComponent
        buttonText={'Buscar'}
        onPress={useProcurarCEP}
      />

      <Divider marginTop={3} />

      <ButtonSecondaryComponent
        buttonText={'Deslogar'}
        onPress={useDeslogar}
      />
    </VStack>
  );
}
