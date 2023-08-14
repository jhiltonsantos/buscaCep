import { Text } from 'native-base';


import subtitulo from '../../mocks/subtitulo';
import { styles } from './styles';

export function SubtituloComponent({ ...outrasProps }) {
  return (
    <Text style={styles.text} {...outrasProps}>
      {subtitulo.text}
    </Text>
  );
}
