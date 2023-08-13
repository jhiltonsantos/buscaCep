import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { BottomSheetComponent } from '../../../../src/components/BottomSheetComponent';

const theme = extendTheme({});

describe('Realizando testes no componente: BottomSheetComponent', () => {
  it('Testando a renderização do Bottom Sheet', () => {

    const { queryByTestId } = render(
      <NativeBaseProvider theme={theme}>
        <BottomSheetComponent isVisible={true} onCancel={function (): void {
          throw new Error('Function not implemented.');
        }} onConfirm={function (): void {
          throw new Error('Function not implemented.');
        }} />
      </NativeBaseProvider>
    );

    const bottomSheetElement = queryByTestId('primary-bottom-sheet');

    expect(bottomSheetElement).toBeDefined();
  })
})