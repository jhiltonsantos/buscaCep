import { Text, ITextProps } from 'native-base';
import { ReactNode } from 'react';
import { styles } from './styles';

interface TituloProps extends ITextProps {
  text: ReactNode;
  boldText?: ReactNode;
}

export function TituloComponent({ text, boldText, ...otherProps }: TituloProps) {
  return (
    <Text fontSize="3xl" style={styles.text} {...otherProps}>
      <Text style={styles.textBold}>{boldText}</Text>
      {text}
    </Text>
  );
}
