import { extendTheme } from 'native-base';

export const THEMES = extendTheme({
  colors: {
    primary: '#7D21CC',
    background: '#F4F2F5',
    purple: {
      500: '#7D21CC',
      800: '#3F0B6C',
    },
    gray: {
      100: '#F4F2F5',
      500: '#736F75',
      800: '#323133',
    },
    red: {
      500: '#CC2121',
    },
    white: '#FBFAFC',
    black: '#000',
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
  },
  fontWeights: {
    hairline: '100',
    thin: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
    extraBlack: '950',
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
    style: {
      _app: {
        bg: 'background',
      },
    },
  },
});
