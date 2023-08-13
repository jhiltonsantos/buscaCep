import React from 'react';
import { Button, Text } from 'native-base';

interface ButtonProps {
  buttonText: string;
  onPress?: () => void;
  removeButton?: boolean
}

export function ButtonSecondaryComponent({
  buttonText,
  onPress,
  removeButton = false,
  ...otherProps }: ButtonProps
) {
  const colorButton = removeButton ? "red.500" : "primary";

  return (
    <Button
      width="100%"
      backgroundColor="white"
      borderWidth={1}
      borderColor={colorButton}
      borderRadius="lg"
      padding={3}
      onPress={onPress}
      {...otherProps}
    >
      <Text
        fontSize="md"
        color={colorButton}
      >
        {buttonText}
      </Text>
    </Button>
  );
}