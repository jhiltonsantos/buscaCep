import React from 'react';
import { FormControl, ITextProps, Text, Input } from 'native-base';
import { useVisibilidadeSenha } from '../../hooks/useVisibilidadeSenha';
import { Pressable } from 'react-native';

import EyeOpenIcon from '../../assets/icons/eye-open.svg';
import EyeCloseIcon from '../../assets/icons/eye-close.svg';

import { styles } from './styles';

interface InputProps extends ITextProps {
  labelText: string;
  placeholderText: string;
  value?: string;
  isCepInput?: boolean;
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
  const { senhaVisibilidade, iconeDireita, mudarVisibilidadeSenha } =
    useVisibilidadeSenha();

  const EyeIcon = iconeDireita === 'mostrar' ? true : false;

  const iconeSenha = textoDeSenha ? (
    <Pressable onPress={mudarVisibilidadeSenha} style={styles.pressable}>
      {EyeIcon ? (
        <EyeCloseIcon width={24} height={24} />
      ) : (
        <EyeOpenIcon width={24} height={24} />
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
