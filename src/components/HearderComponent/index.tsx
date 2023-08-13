import React from 'react';
import {HStack, ITextProps, Image, Divider} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {TituloComponent} from '../TituloComponent';

import ArowLeft from '../../assets/icons/arrow-left.svg';
import {styles} from './styles';

interface HeaderProps extends ITextProps {
  navigation: any;
  textTitulo: string;
}

export function HeaderComponent({
  navigation,
  textTitulo,
  ...otherProps
}: HeaderProps) {
  const botaoVoltar = () => {
    navigation.goBack();
  };

  return (
    <HStack style={styles.hstack} {...otherProps}>
      <TouchableOpacity style={styles.button} onPress={botaoVoltar}>
        <ArowLeft width={30} height={30} />
      </TouchableOpacity>

      <TituloComponent text={textTitulo} />
    </HStack>
  );
}
