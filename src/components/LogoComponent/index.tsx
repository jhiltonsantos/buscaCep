import React from 'react';
import {Text} from 'native-base';

export function LogoComponent({...otherProps}) {
  return (
    <Text fontSize="3xl" color="purple.500" {...otherProps}>
      <Text>Busca</Text>
      <Text fontWeight="bold">CEP</Text>
    </Text>
  );
}
