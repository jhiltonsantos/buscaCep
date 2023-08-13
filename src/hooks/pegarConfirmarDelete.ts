import {useState} from 'react';

export function pegarConfirmarDelete({navigation}: any) {
  const [bottomSheetVisivel, setBottomSheetVisivel] = useState(false);

  const handleDeletar = () => {
    navigation.goBack();
    setBottomSheetVisivel(false);
  };

  const handleCancelar = () => {
    setBottomSheetVisivel(false);
  };

  return {
    bottomSheetVisivel,
    setBottomSheetVisivel,
    handleDeletar,
    handleCancelar,
  };
}
