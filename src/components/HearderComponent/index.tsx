import React from 'react';
import { HStack, ITextProps, Image, Divider, Text, VStack } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { TituloComponent } from '../TituloComponent';

import ArowLeft from '../../assets/icons/arrow-left.svg';
import { styles } from './styles';

interface HeaderProps extends ITextProps {
  textTitulo: string;
  onPress?: () => void;
}

export function HeaderComponent({
  textTitulo,
  onPress,
  ...otherProps
}: HeaderProps) {
  return (
    <HStack style={styles.hstack} {...otherProps}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <ArowLeft width={30} height={30} />
      </TouchableOpacity>

      <Text fontSize="2xl" style={styles.text}>
        {textTitulo}
      </Text>


    </HStack>
  );
}
