import React, { useEffect, useState } from 'react';
import { Divider, VStack, Box, Text } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ButtonPrimaryComponent } from '../../components/ButtonPrimaryComponent';
import { ItemComponent } from '../../components/ItemComponent';
import { ButtonSecondaryComponent } from '../../components/ButtonSecondaryComponent';
import { HeaderComponent } from '../../components/HearderComponent';
import { BottomSheetComponent } from '../../components/BottomSheetComponent';
import { TituloComponent } from '../../components/TituloComponent';

import { EnderecoCep } from '../../interfaces/enderecoCep';
import { Usuario } from '../../interfaces/usuario';
import { criarEnderecoMock } from '../../mocks/endereco';

import { useConfirmarDelete } from '../../hooks/useConfirmarDelete';
import { atualizarDadosUsuario, pegarDadosUsuario } from '../../services/apiFido/usuarioService';

import { styles } from './styles';

export default function DetalhesEndereco({ route, navigation }: any) {
  const {
    bottomSheetVisivel,
    setBottomSheetVisivel,
    handleDeletar,
    handleCancelar,
  } = useConfirmarDelete({ navigation });

  const enderecoViaCep: EnderecoCep = route.params.endereco;
  const enderecoEditado: boolean = route.params.enderecoEditado;

  const [carregando, setCarregando] = useState(true);
  const [mock, setMock] = useState<any[]>([]);

  async function getUsuarioEndereco(id: string) {
    if (id) {
      const usuarioEncontrado: Usuario = await pegarDadosUsuario(id);
      return usuarioEncontrado;
    } else {
      console.log('Erro ao buscar usuario');
      return null;
    }
  }

  async function atualizarUsuario() {
    const idUsuario = await AsyncStorage.getItem('usuarioId');
    if (idUsuario) {
      const dadosUsuario = await getUsuarioEndereco(idUsuario);
      if (!enderecoEditado) {
        if (dadosUsuario) {
          const dados: Usuario = {
            ...dadosUsuario,
            cep: enderecoViaCep.cep,
            estado: enderecoViaCep.uf,
            cidade: enderecoViaCep.localidade,
            endereco: enderecoViaCep.logradouro,
            complemento: enderecoViaCep.complemento,
            numero: '',
          }
          const usuarioAtualizado: Usuario = await atualizarDadosUsuario(idUsuario, dados);
          console.log('Usuario Atualizado');
          return usuarioAtualizado;
        } else {
          console.log('Usuario nao encontrado');
          return null;
        }
      } else {
        return null;
      }
    }
  }

  useEffect(() => {
    async function carregarDados() {
      if (carregando) {
        const recebendoUsuario = await atualizarUsuario();
        if (recebendoUsuario) {
          const mockCriado = criarEnderecoMock(recebendoUsuario);
          setMock(mockCriado);
        }
        setCarregando(false);
      }
    }
    carregarDados();
  }, [carregando]);


  if (carregando) {
    return (
      <VStack flex={1} alignItems="center" justifyContent="center">
        <TituloComponent text="Carregando..." />
      </VStack>
    );
  } else {
    return (
      <VStack style={styles.container} alignItems="start">
        <HeaderComponent
          textTitulo="Endereço encontrado"
          navigation={navigation}
          marginTop={20}
        />

        <Box marginTop={20} marginBottom={20}>
          {mock.map(endereco => (
            <VStack alignItems="center" key={endereco.id}>
              <ItemComponent
                tituloText={endereco.titulo}
                dadoText={endereco.dado}
              />
              <Divider marginTop={2} marginBottom={2} />
            </VStack>
          ))}
        </Box>

        <ButtonPrimaryComponent
          buttonText={'Editar'}
          onPress={() => { }}
        />

        <Divider marginTop={3} />

        <ButtonSecondaryComponent
          buttonText={'Deletar'}
          removeButton={true}
          onPress={() => {
            setBottomSheetVisivel(true);
          }}
        />

        {bottomSheetVisivel && (
          <BottomSheetComponent
            isVisible={bottomSheetVisivel}
            onCancel={handleCancelar}
            onConfirm={() => { handleDeletar(); }}
          />
        )}
      </VStack>
    );
  }
}
