import { StyleSheet } from 'react-native';
import { THEMES } from '../../config/theme';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: THEMES.colors.white,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
  containerHorizontal: {
    justifyContent: 'space-evenly',
    paddingBottom: 60,
  },
  containerButton: {
    width: 160,
  },
  text: {
    fontSize: THEMES.fontSizes.xl,
    fontFamily: 'Epilogue-SemiBold',
    textAlign: 'center',
    color: THEMES.colors.purple[800],
    paddingVertical: 60,
  },
});
