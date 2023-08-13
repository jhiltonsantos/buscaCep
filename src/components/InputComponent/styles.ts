import {StyleSheet} from 'react-native';
import {THEMES} from '../../config/theme';

export const styles = StyleSheet.create({
  pressable: {
    padding: 10,
    backgroundColor: THEMES.colors.white,
  },
  labelText: {
    fontSize: THEMES.fontSizes.md,
    fontWeight: THEMES.fontWeights.medium,
    color: THEMES.colors.gray[800],
  },
  input: {
    fontSize: THEMES.fontSizes.md,
    borderRadius: 8,
    backgroundColor: THEMES.colors.white,
  },
});
