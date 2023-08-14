import {ITextProps, Text, VStack, View} from 'native-base';
import {styles} from './styles';

interface ItemProps extends ITextProps {
  tituloText: string;
  dadoText: string;
  onChangeText?: (text: string) => void;
}

export function ItemComponent({tituloText, dadoText}: ItemProps): JSX.Element {
  return (
    <VStack style={styles.containerHorizontal}>
      <View style={styles.containerHorizontal}>
        <Text style={styles.tituloText}>{tituloText}</Text>
      </View>

      <View style={styles.view}>
        <Text style={styles.dadoText}>{dadoText}</Text>
      </View>
    </VStack>
  );
}
