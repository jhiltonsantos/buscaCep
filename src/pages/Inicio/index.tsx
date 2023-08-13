import {Box, Divider, Text, VStack} from 'native-base';

import {InputComponent} from '../../components/InputComponent';
import {ButtonPrimaryComponent} from '../../components/ButtonPrimaryComponent';
import {TituloComponent} from '../../components/TituloComponent';
import {ButtonSecondaryComponent} from '../../components/ButtonSecondaryComponent';

import {styles} from './styles';

export default function Inicio({navigation}: any) {
  return (
    <VStack style={styles.container}>
      <TituloComponent
        boldText="Olá,"
        text=" vamos buscar por um endereço?"
        marginTop={20}
      />

      <Box marginTop={40} marginBottom={40}>
        <InputComponent labelText="CEP" placeholderText="Ex: 000000-000" />
      </Box>

      <ButtonPrimaryComponent
        buttonText={'Buscar'}
        onPress={() => navigation.navigate('DetalhesEndereco')}
      />

      <Divider marginTop={3} />

      <ButtonSecondaryComponent
        buttonText={'Deslogar'}
        onPress={() => {
          navigation.goBack();
        }}
      />
    </VStack>
  );
}
