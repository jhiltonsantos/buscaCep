import React from 'react';
import { BottomSheet } from '@rneui/themed';
import { VStack, Text, Divider, HStack, Button } from 'native-base';
import { ButtonPrimaryComponent } from '../ButtonPrimaryComponent';
import { ButtonSecondaryComponent } from '../ButtonSecondaryComponent';
import { styles } from './styles';

interface BottomSheetComponentProps {
  isVisible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export const BottomSheetComponent: React.FC<BottomSheetComponentProps> = (
  { isVisible,
    onCancel,
    onConfirm
  }
) => {
  return (
    <VStack>
      <BottomSheet isVisible={isVisible}>
        <VStack
          padding={5}
          backgroundColor="white"
          borderTopRadius={30}
          data-testid="primary-bottom-sheet"
        >
          <Text
            alignSelf="center"
            marginBottom={10}
            marginTop={10}
            style={styles.text}
          >
            Deseja mesmo deletar esse endereço?
          </Text>

          <HStack
            justifyContent="space-around"
            marginBottom={10}
          >
            <VStack
              width="40%"
            >
              <ButtonPrimaryComponent
                buttonText='Sim'
                onPress={onConfirm}
              />
            </VStack>

            <VStack
              width="40%"
            >
              <ButtonSecondaryComponent
                buttonText='Não'
                onPress={onCancel}
              />
            </VStack>
          </HStack>
        </VStack>
      </BottomSheet>
    </VStack>
  );
};
