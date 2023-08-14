import { StyleSheet } from 'react-native';
import { THEMES } from '../../config/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEMES.colors.background,
    justifyContent: 'flex-start',
    padding: 20,
  },
  formControlCidade: { flex: 2 },
  formControlUF: { flex: 1 },
  selectList: {
    width: '100%',
    backgroundColor: THEMES.colors.white,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: THEMES.colors.white,
  },
  dropdown: {
    position: 'relative',
    marginTop: 4,
    backgroundColor: THEMES.colors.white,
    borderRadius: 8,
    borderWidth: 0,
  },
  dropdownButtonDown: {
    alignContent: 'flex-end',
  },
  textSelect: {
    textAlign: 'left',
    fontSize: THEMES.fontSizes.md,
    color: THEMES.colors.gray[800],
  },
  input: {
    fontSize: THEMES.fontSizes.md,
    backgroundColor: THEMES.colors.white,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: THEMES.colors.white,
  },
  labelText: {
    fontSize: THEMES.fontSizes.md,
    fontWeight: THEMES.fontWeights.medium,
    color: THEMES.colors.gray[800],
  },
});
