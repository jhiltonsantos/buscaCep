import { VStack } from 'native-base';
import { TituloComponent } from '../TituloComponent';
import { styles } from './styles';


export function TelaCarregandoComponent({ ...outrasProps }) {
  return (
    <VStack style={styles.container}>
      <TituloComponent text="Carregando..." />
    </VStack>
  );
}
