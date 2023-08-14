import { useEffect, useState } from 'react';
import { EnderecoCep } from '../interfaces/enderecoCep';
import { Usuario } from '../interfaces/usuario';
import { atualizarDadosUsuario, pegarDadosUsuario } from '../services/apiFido/usuarioService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { criarEnderecoMock } from '../mocks/endereco';

export function useAtualizarUsuario(enderecoViaCep: EnderecoCep, enderecoEditar: boolean) {
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
    console.log('Funcao atualizarUsuario esta sendo chamada');
    if (idUsuario) {
      const dadosUsuario = await getUsuarioEndereco(idUsuario);
      console.log('Endereco Editar', enderecoEditar);
      if (!enderecoEditar) {
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
        console.log('Dados atualizados de Editar endereco', dadosUsuario);
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
