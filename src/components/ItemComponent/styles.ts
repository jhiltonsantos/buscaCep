import { StyleSheet } from 'react-native';
import { THEMES } from '../../config/theme';

export const styles = StyleSheet.create({
  containerHorizontal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tituloText: {
    fontSize: THEMES.fontSizes.md,
    fontFamily: 'Epilogue-Medium',
    color: THEMES.colors.gray[800],
    marginTop: 2,
    marginBottom: 2,
  },
  view: {
    flex: 1,
    alignItems: 'flex-end',
  },
  dadoText: {
    fontFamily: 'Epilogue-Regular',
    color: THEMES.colors.gray[500],
    marginTop: 2,
    marginBottom: 2,
  },
});
