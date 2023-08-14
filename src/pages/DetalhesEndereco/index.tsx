import { Divider, VStack, Box } from 'native-base';

import { ButtonPrimaryComponent } from '../../components/ButtonPrimaryComponent';
import { ItemComponent } from '../../components/ItemComponent';
import { ButtonSecondaryComponent } from '../../components/ButtonSecondaryComponent';
import { HeaderComponent } from '../../components/HearderComponent';
import { BottomSheetComponent } from '../../components/BottomSheetComponent';
import { TelaCarregandoComponent } from '../../components/TelaCarregandoComponent';

import { EnderecoCep } from '../../interfaces/enderecoCep';
import { useConfirmarDelete } from '../../hooks/useConfirmarDelete';
import { useAtualizarUsuario } from '../../hooks/useAtualizarUsuario';

import { styles } from './styles';

export default function DetalhesEndereco({ route, navigation }: any) {
  const enderecoViaCep: EnderecoCep = route.params.endereco;
  const enderecoEditado: boolean = route.params.enderecoEditado;
  const { carregando, mock } = useAtualizarUsuario(enderecoViaCep, enderecoEditado);
  const {
    bottomSheetVisivel,
    setBottomSheetVisivel,
    handleDeletar,
    handleCancelar,
  } = useConfirmarDelete({ navigation });

  if (carregando) {
    return (
      <TelaCarregandoComponent />
    );
  } else {
    return (
      <VStack style={styles.container} alignItems="start">
        <HeaderComponent
          textTitulo="Endereço encontrado"
          marginTop={20}
          onPress={() => navigation.navigate('Inicio')}
        />

        <Box marginTop={20} marginBottom={20}>
          {mock.map(endereco => (
            <VStack alignItems="center" key={endereco.id}>
              <ItemComponent
                tituloText={endereco.titulo}
                dadoText={endereco.dado}
              />
              <Divider marginTop={2} marginBottom={2} />
            </VStack>
          ))}
        </Box>

        <ButtonPrimaryComponent
          buttonText={'Editar'}
          onPress={() => { navigation.navigate('EditarEndereco') }}
        />

        <Divider marginTop={3} />

        <ButtonSecondaryComponent
          buttonText={'Deletar'}
          removeButton={true}
          onPress={() => {
            setBottomSheetVisivel(true);
          }}
        />

        {bottomSheetVisivel && (
          <BottomSheetComponent
            isVisible={bottomSheetVisivel}
            onCancel={handleCancelar}
            onConfirm={() => { handleDeletar(); }}
          />
        )}
      </VStack>
    );
  }
}
