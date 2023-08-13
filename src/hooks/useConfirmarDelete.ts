import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { Usuario } from '../interfaces/usuario';
import { atualizarDadosUsuario } from '../services/apiFido/usuarioService';

export function useConfirmarDelete({ navigation }: any) {
  const [bottomSheetVisivel, setBottomSheetVisivel] = useState(false);

  const handleDeletar = async (): Promise<void> => {
    const idUsuario = await AsyncStorage.getItem('usuarioId');
    if (idUsuario) {
      const dados: Usuario = {
        cep: '',
        estado: '',
        cidade: '',
        endereco: '',
        complemento: '',
        numero: '',
      };
      await atualizarDadosUsuario(idUsuario, dados);
    }
    navigation.goBack();
    setBottomSheetVisivel(false);
  };

  const handleCancelar = (): undefined => {
    setBottomSheetVisivel(false);
  };

  return {
    bottomSheetVisivel,
    setBottomSheetVisivel,
    handleDeletar,
    handleCancelar,
  };
}
