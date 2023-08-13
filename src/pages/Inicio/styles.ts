import { StyleSheet } from 'react-native';
import { THEMES } from '../../config/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEMES.colors.background,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 20,
  },
  toast: {
    backgroundColor: THEMES.colors.red[500],
    alignItems: 'center',
    shadow: 5,
    borderRadius: 10,
  },
});
