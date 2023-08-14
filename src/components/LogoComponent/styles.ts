import { StyleSheet } from 'react-native';
import { THEMES } from '../../config/theme';

export const styles = StyleSheet.create({
  text: {
    fontFamily: 'Epilogue-Regular',
    color: THEMES.colors.purple[500],
  },
  textBold: { fontFamily: 'Epilogue-Bold' },
});
