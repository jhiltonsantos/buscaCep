import { useState } from 'react';

export const pegarVisibilidadeSenha = () => {
  const [senhaVisibilidade, setSenhaVisibiliade] = useState(true);
  const [iconeDireita, setIconeDireita] = useState('mostrar');

  const mudarVisibilidadeSenha = () => {
    if (iconeDireita === 'mostrar') {
      setIconeDireita('esconder');
      setSenhaVisibiliade(!senhaVisibilidade);
    } else if (iconeDireita === 'esconder') {
      setIconeDireita('mostrar');
      setSenhaVisibiliade(!senhaVisibilidade);
    }
  };

  return { senhaVisibilidade, iconeDireita, mudarVisibilidadeSenha };
};
