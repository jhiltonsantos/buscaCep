import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Usuario } from '../interfaces/usuario';
import { atualizarDadosUsuario, pegarDadosUsuario } from '../services/apiFido/usuarioService';

export function useEditarEndereco({ navigation }: { navigation: any }) {
  const [enderecoEditado, setEnderecoEditado] = useState<Usuario>({
    cidade: '',
    estado: '',
    complemento: '',
    endereco: '',
    numero: '',
  });

  const inputIdToUsuarioProperty: Record<number, keyof Usuario> = {
    0: 'cidade',
    1: 'estado',
    2: 'complemento',
    3: 'endereco',
    4: 'numero',
  };

  const carregarDadosUsuario = async () => {
    const idUsuario = await AsyncStorage.getItem('usuarioId');
    if (idUsuario) {
      const usuarioEncontrado = await pegarDadosUsuario(idUsuario);
      if (usuarioEncontrado) {
        setEnderecoEditado({
          cidade: usuarioEncontrado.cidade || '',
          estado: usuarioEncontrado.estado || '',
          complemento: usuarioEncontrado.complemento || '',
          endereco: usuarioEncontrado.endereco || '',
          numero: usuarioEncontrado.numero || '',
        });
      }
    }
  };

  useEffect(() => {
    carregarDadosUsuario();
  }, []);

  const atualizarEnderecoEditado = (campo: keyof Usuario, valor: string) => {
    setEnderecoEditado((prevState) => ({
      ...prevState,
      [campo]: valor,
    }));
  };

  const handleSalvarAlteracoes = async () => {
    const idUsuario = await AsyncStorage.getItem('usuarioId');
    if (idUsuario) {
      const enderecoAtualizado = await atualizarDadosUsuario(idUsuario, enderecoEditado);
      navigation.replace('DetalhesEndereco', {
        endereco: enderecoAtualizado,
        enderecoEditar: true,
      });
    }
  };

  return {
    enderecoEditado,
    inputIdToUsuarioProperty,
    handleSalvarAlteracoes,
    atualizarEnderecoEditado,
  };
}
