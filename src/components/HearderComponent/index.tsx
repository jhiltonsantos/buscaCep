import React from 'react';
import { HStack, ITextProps, Image, Divider } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { TituloComponent } from '../TituloComponent';

import arrowLeft from '../../assets/images/arrow-left.png';

interface HeaderProps extends ITextProps {
  navigation: any;
  textTitulo: string;
}

export function HeaderComponent({ navigation, textTitulo, ...otherProps }: HeaderProps) {
  const botaoVoltar = () => {
    navigation.goBack();
  };

  return (
    <HStack alignItems="center" justifyContent="flex-start" {...otherProps}>
      <TouchableOpacity onPress={botaoVoltar}>
        <Image source={arrowLeft} alt="Voltar" width={6} height={6} />
      </TouchableOpacity>
      <Divider orientation="vertical" height={6} mx={2} />
      <TituloComponent text={textTitulo} />
    </HStack>
  );
}
