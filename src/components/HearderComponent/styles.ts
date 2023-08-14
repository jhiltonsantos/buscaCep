import { StyleSheet } from 'react-native';
import { THEMES } from '../../config/theme';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    padding: 0,
    margin: 0,
    borderWidth: 0,
    marginTop: 3,
    marginRight: 20,
  },
  image: {
    width: 250,
    height: 250,
  },
  hstack: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    fontFamily: 'Epilogue-Medium',
    color: THEMES.colors.purple[800],
    marginLeft: 10,
  },
});
