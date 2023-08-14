import { StyleSheet } from 'react-native';
import { THEMES } from '../../config/theme';

export const styles = StyleSheet.create({
  text: {
    fontFamily: 'Epilogue-Regular',
    fontSize: THEMES.fontSizes.md,
    color: THEMES.colors.gray[500],
  },
});
