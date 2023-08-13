import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type ScreenList = {
  Login: undefined;
  Inicio: undefined;
  EditarEndereco: undefined;
  DetalhesEndereco: undefined;
};

export type NavigationProps<T extends keyof ScreenList> = {
  navigation: NativeStackNavigationProp<ScreenList, T>;
  route: RouteProp<ScreenList, T>;
};
