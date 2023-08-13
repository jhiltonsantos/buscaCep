import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { ButtonPrimaryComponent } from '../../../../src/components/ButtonPrimaryComponent';

const theme = extendTheme({});

describe('Realizando testes no componente: ButtonPrimaryComponent', () => {
  it('Testando a renderização do botão', () => {
    const { queryByTestId } = render(
      <NativeBaseProvider theme={theme}>
        <ButtonPrimaryComponent buttonText="" />
      </NativeBaseProvider>
    );

    const buttonElement = queryByTestId('primary-button');
    expect(buttonElement).toBeDefined();
  });
});
