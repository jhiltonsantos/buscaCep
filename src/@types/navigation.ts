import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { EnderecoCep } from '../interfaces/enderecoCep';

export type ScreenList = {
  Login: undefined;
  Inicio: undefined;
  EditarEndereco: undefined;
  DetalhesEndereco: { endereco: EnderecoCep; enderecoEditar: boolean };
  useLogin: undefined;
};

export type NavigationProps<T extends keyof ScreenList> = {
  navigation: NativeStackNavigationProp<ScreenList, T>;
  route: RouteProp<ScreenList, T>;
};
