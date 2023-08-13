import React from 'react';
import { BottomSheet } from '@rneui/themed';
import { VStack, Text, HStack } from 'native-base';
import { ButtonPrimaryComponent } from '../ButtonPrimaryComponent';
import { ButtonSecondaryComponent } from '../ButtonSecondaryComponent';
import { styles } from './styles';
import bottomSheetTexto from '../../mocks/bottomSheetTexto';

interface BottomSheetComponentProps {
  isVisible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export const BottomSheetComponent: React.FC<BottomSheetComponentProps> = ({
  isVisible,
  onCancel,
  onConfirm,
}) => {
  return (
    <VStack>
      <BottomSheet isVisible={isVisible}>
        <VStack style={styles.container} data-testid="primary-bottom-sheet">
          <Text alignSelf="center" style={styles.text}>
            {bottomSheetTexto.text}
          </Text>

          <HStack style={styles.containerHorizontal}>
            <VStack style={styles.containerButton}>
              <ButtonPrimaryComponent buttonText="Sim" onPress={onConfirm} />
            </VStack>

            <VStack style={styles.containerButton}>
              <ButtonSecondaryComponent buttonText="Não" onPress={onCancel} />
            </VStack>
          </HStack>
        </VStack>
      </BottomSheet>
    </VStack>
  );
};
