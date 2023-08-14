import { NativeBaseProvider, StatusBar } from 'native-base';

import { THEMES } from './src/config/theme';
import Routes from './src/routes';

export default function App() {
  return (
    <NativeBaseProvider theme={THEMES}>
      <StatusBar backgroundColor={THEMES.colors.primary} />
      <Routes />
    </NativeBaseProvider>
  );
}
