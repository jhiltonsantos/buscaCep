import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Usuario } from '../interfaces/usuario';
import { atualizarDadosUsuario, pegarDadosUsuario } from '../services/apiFido/usuarioService';

export function useEditarEndereco({ navigation }: { navigation: any }) {
  const [enderecoEditar, setEnderecoEditar] = useState<Usuario>({
    cidade: '',
    estado: '',
    bairro: '',
    endereco: '',
    numero: '',
  });

  const inputIdToUsuarioProperty: Record<number, keyof Usuario> = {
    1: 'estado',
    2: 'bairro',
    3: 'endereco',
    4: 'numero',
  };

  const [estadoSelecionado, setEstadoSelecionado] = useState<string>('');

  const carregarDadosUsuario = async () => {
    const idUsuario = await AsyncStorage.getItem('usuarioId');
    if (idUsuario) {
      const usuarioEncontrado = await pegarDadosUsuario(idUsuario);
      if (usuarioEncontrado) {
        setEnderecoEditar({
          cidade: usuarioEncontrado.cidade || '',
          estado: usuarioEncontrado.estado || '',
          bairro: usuarioEncontrado.bairro || '',
          endereco: usuarioEncontrado.endereco || '',
          numero: usuarioEncontrado.numero || '',
        });
        setEstadoSelecionado(usuarioEncontrado.estado || '');
      }
    }
  };

  useEffect(() => {
    carregarDadosUsuario();
  }, []);

  const atualizarEnderecoEditado = (campo: keyof Usuario, valor: string) => {
    setEnderecoEditar((prevState) => ({
      ...prevState,
      [campo]: valor,
    }));
  };

  const handleSalvarAlteracoes = async () => {
    const idUsuario = await AsyncStorage.getItem('usuarioId');
    if (idUsuario) {
      const enderecoAtualizado = await atualizarDadosUsuario(idUsuario, enderecoEditar);
      navigation.replace('DetalhesEndereco', {
        endereco: enderecoAtualizado,
        enderecoEditado: true,
      });
    }
  };

  return {
    enderecoEditar,
    inputIdToUsuarioProperty,
    handleSalvarAlteracoes,
    atualizarEnderecoEditado,
    estadoSelecionado,
    setEstadoSelecionado,
  };
}
