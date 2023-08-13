import React from 'react';
import { FormControl, ITextProps, Text, Input } from 'native-base';
import { pegarVisibilidadeSenha } from '../../hooks/pegarVisibilidadeSenha';
import { Pressable, Image } from 'react-native';

import eyeIconOpen from '../../assets/images/preview-open.png';
import eyeIconClose from '../../assets/images/preview-close.png';
import { styles } from './styles';

interface InputProps extends ITextProps {
  labelText: string;
  placeholderText: string;
  value?: string;
  textoDeSenha?: boolean;
  onChangeText?: (text: string) => void;
}

export function InputComponent({
  labelText,
  placeholderText,
  value,
  onChangeText,
  textoDeSenha = false,
}: InputProps): JSX.Element {

  const { senhaVisibilidade, iconeDireita, mudarVisibilidadeSenha } = pegarVisibilidadeSenha();

  const EyeIcon = iconeDireita === 'mostrar' ? eyeIconClose : eyeIconOpen;

  const iconeSenha = textoDeSenha ? (
    <Pressable onPress={mudarVisibilidadeSenha} style={styles.pressable}>
      <Image
        source={EyeIcon}
        style={styles.imageIcon}
      />
    </Pressable>
  ) : <></>;

  return (
    <FormControl>
      <FormControl.Label>
        <Text fontSize="md" fontWeight="medium" color="gray.800">
          {labelText}
        </Text>
      </FormControl.Label>
      <Input
        placeholder={placeholderText}
        size="lg"
        width="100%"
        borderRadius="lg"
        backgroundColor="white"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={textoDeSenha ? senhaVisibilidade : false}
        InputRightElement={iconeSenha}
      />
    </FormControl>
  );
}


