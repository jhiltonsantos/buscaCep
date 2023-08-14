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
    borderColor: THEMES.colors.gray[300],
    fontFamily: 'Epilogue-Regular',
  },
  dropdown: {
    position: 'relative',
    marginTop: 4,
    backgroundColor: THEMES.colors.white,
    borderRadius: 8,
    borderWidth: 0,
    fontFamily: 'Epilogue-Regular',
  },
  dropdownButtonDown: {
    alignContent: 'flex-end',
  },
  textSelect: {
    textAlign: 'left',
    fontSize: THEMES.fontSizes.md,
    color: THEMES.colors.gray[800],
    fontFamily: 'Epilogue-Regular',
  },
  input: {
    fontSize: THEMES.fontSizes.md,
    backgroundColor: THEMES.colors.white,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: THEMES.colors.white,
    fontFamily: 'Epilogue-Regular',
  },
  labelText: {
    fontSize: THEMES.fontSizes.md,
    fontFamily: 'Epilogue-Medium',
    color: THEMES.colors.gray[800],
  },
});
