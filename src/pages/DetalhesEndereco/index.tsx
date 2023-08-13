import React from 'react';
import { Divider, VStack, Box } from 'native-base';

import { ButtonPrimaryComponent } from '../../components/ButtonPrimaryComponent';
import { ItemComponent } from '../../components/ItemComponent';
import { enderecoMock } from '../../mocks/endereco';
import { ButtonSecondaryComponent } from '../../components/ButtonSecondaryComponent';
import { HeaderComponent } from '../../components/HearderComponent';
import { BottomSheetComponent } from '../../components/BottomSheetComponent';
import { pegarConfirmarDelete } from '../../hooks/pegarConfirmarDelete';

export default function DetalhesEndereco({ navigation }: any) {
  const {
    bottomSheetVisivel,
    setBottomSheetVisivel,
    handleDeletar,
    handleCancelar,
  } = pegarConfirmarDelete({navigation});

  return (
    <VStack
      flex={1}
      backgroundColor="background"
      alignItems="start"
      justifyContent="flex-start"
      padding={5}
    >
      <HeaderComponent
        textTitulo="Endereço encontrado"
        navigation={navigation}
        marginTop={20}
      />

      <Box marginTop={20} marginBottom={20}>
        {enderecoMock.map((endereco) => (
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
        onPress={() => navigation.navigate('EditarEndereco')}
      />

      <Divider marginTop={3} />

      <ButtonSecondaryComponent
        buttonText={'Deletar'}
        removeButton={true}
        onPress={() => { setBottomSheetVisivel(true) }}
      />

      {bottomSheetVisivel && (
        <BottomSheetComponent
          isVisible={bottomSheetVisivel}
          onCancel={handleCancelar}
          onConfirm={() => handleDeletar()}
        />
      )}
    </VStack>
  );
}
