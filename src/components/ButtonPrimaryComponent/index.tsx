import React from 'react';
import {Button, Text} from 'native-base';
import {styles} from './styles';

interface ButtonProps {
  buttonText: string;
  onPress?: () => void;
}

export function ButtonPrimaryComponent({
  buttonText,
  onPress,
  ...otherProps
}: ButtonProps) {
  return (
    <Button
      padding={3}
      style={styles.button}
      onPress={onPress}
      data-testid="primary-button"
      {...otherProps}>
      <Text style={styles.text}>{buttonText}</Text>
    </Button>
  );
}
