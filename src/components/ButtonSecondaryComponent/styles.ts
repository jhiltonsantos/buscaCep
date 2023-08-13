import {StyleSheet} from 'react-native';
import {THEMES} from '../../config/theme';

export const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: THEMES.colors.white,
    borderWidth: 1,
    borderRadius: 8,
    paddingTop: 10,
    paddingBottom: 10,
  },
  text: {
    fontSize: THEMES.fontSizes.md,
    fontWeight: THEMES.fontWeights.semibold,
    margin: 3,
  },
});
