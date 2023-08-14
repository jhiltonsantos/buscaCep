import { Box, Divider, VStack, useToast } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

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
    AsyncStorage.removeItem('usuarioId')
    AsyncStorage.removeItem('cepUsuario')
    navigation.replace('Login')
  }

  function formatarCep(cep: string) {
    return cep.replace(/[^\d]/g, '');
  }

  async function useProcurarCEP() {
    if (!cep) {
      return null;
    }

    const cepFormatado = formatarCep(cep);
    if (cepFormatado.length !== 8) {
      toast.show({
        title: "CEP inválido",
        description: "O CEP deve conter exatamente 8 dígitos numéricos.",
        style: styles.toast,
      });
      return;
    }

    const resultado = await procurarCep(cepFormatado);

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
      const cepGuardado = await AsyncStorage.getItem('cepUsuario');
      if (cepGuardado === cepFormatado) {
        navigation.replace('DetalhesEndereco', {
          endereco: enderecoCep,
          enderecoEditado: true
        });
      } else {
        AsyncStorage.setItem('cepUsuario', cepFormatado);
        navigation.replace('DetalhesEndereco', {
          endereco: enderecoCep,
          enderecoEditado: false
        });
      }
    } else {
      toast.show({
        title: "Erro ao buscar CEP",
        description: "Verifique se os dados estão corretos",
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
          placeholderText="Digite seu CEP"
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
