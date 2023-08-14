import React from 'react';
import { Text } from 'native-base';
import { styles } from './styles';

export function LogoComponent({ ...otherProps }) {
  return (
    <Text fontSize="3xl" style={styles.text} {...otherProps}>
      <Text>Busca</Text>
      <Text style={styles.textBold}>CEP</Text>
    </Text>
  );
}
