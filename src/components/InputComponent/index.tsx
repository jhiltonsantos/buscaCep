import React from 'react';
import {FormControl, ITextProps, Text, Input} from 'native-base';
import {useVisibilidadeSenha} from '../../hooks/useVisibilidadeSenha';
import {Pressable, Image} from 'react-native';

import EyeIconOpen from '../../assets/icons/eye-open.svg';
import EyeIconClose from '../../assets/icons/eye-close.svg';

import {styles} from './styles';

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
  const {senhaVisibilidade, iconeDireita, mudarVisibilidadeSenha} =
    useVisibilidadeSenha();

  const EyeIcon = iconeDireita === 'mostrar' ? true : false;

  const iconeSenha = textoDeSenha ? (
    <Pressable onPress={mudarVisibilidadeSenha} style={styles.pressable}>
      {EyeIcon ? (
        <EyeIconClose width={24} height={24} />
      ) : (
        <EyeIconOpen width={24} height={24} />
      )}
    </Pressable>
  ) : (
    <></>
  );

  return (
    <FormControl>
      <FormControl.Label>
        <Text style={styles.labelText}>{labelText}</Text>
      </FormControl.Label>
      <Input
        width="100%"
        style={styles.input}
        placeholder={placeholderText}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={textoDeSenha ? senhaVisibilidade : false}
        InputRightElement={iconeSenha}
      />
    </FormControl>
  );
}
