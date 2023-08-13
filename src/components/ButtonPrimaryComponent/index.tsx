import React from 'react';
import { Button, Text } from 'native-base';

interface ButtonProps {
  buttonText: string;
  onPress?: () => void;
}

export function ButtonPrimaryComponent({ buttonText, onPress, ...otherProps }: ButtonProps) {
  return (
    <Button
      width="100%"
      backgroundColor="primary"
      borderRadius="lg"
      padding={3}
      onPress={onPress}
      data-testid="primary-button"
      {...otherProps}
    >
      <Text
        fontSize="md"
        color="white"
      >
        {buttonText}
      </Text>
    </Button>
  );
}