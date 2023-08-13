import {StyleSheet} from 'react-native';
import {THEMES} from '../../config/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEMES.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
