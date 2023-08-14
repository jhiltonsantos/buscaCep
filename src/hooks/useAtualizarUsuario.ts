import { useEffect, useState } from 'react';
import { EnderecoCep } from '../interfaces/enderecoCep';
import { Usuario } from '../interfaces/usuario';
import { atualizarDadosUsuario, pegarDadosUsuario } from '../services/apiFido/usuarioService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { criarEnderecoMock } from '../mocks/endereco';

export function useAtualizarUsuario(enderecoViaCep: EnderecoCep, enderecoEditado: boolean) {
  const [carregando, setCarregando] = useState(true);
  const [mock, setMock] = useState<any[]>([]);

  async function getUsuarioEndereco(id: string) {
    if (id) {
      const usuarioEncontrado: Usuario = await pegarDadosUsuario(id);
      return usuarioEncontrado;
    } else {
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
          };
          const usuarioAtualizado: Usuario = await atualizarDadosUsuario(idUsuario, dados);
          return usuarioAtualizado;
        } else {
          console.log('Usuario não foi encontrado');
          return null;
        }
      } else {
        return dadosUsuario;
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
  }, []);

  return { carregando, mock };
}
