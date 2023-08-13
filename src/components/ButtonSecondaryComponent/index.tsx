import React from 'react';
import {Button, Text} from 'native-base';
import {styles} from './styles';

interface ButtonProps {
  buttonText: string;
  onPress?: () => void;
  removeButton?: boolean;
}

export function ButtonSecondaryComponent({
  buttonText,
  onPress,
  removeButton = false,
  ...otherProps
}: ButtonProps) {
  const colorButton = removeButton ? 'red.500' : 'primary';

  return (
    <Button
      borderColor={colorButton}
      style={styles.button}
      onPress={onPress}
      {...otherProps}>
      <Text color={colorButton} style={styles.text}>
        {buttonText}
      </Text>
    </Button>
  );
}
