import { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function useConfirmarDelete({ navigation }: any) {
  const [bottomSheetVisivel, setBottomSheetVisivel] = useState(false);

  const handleDeletar = (): undefined => {
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
