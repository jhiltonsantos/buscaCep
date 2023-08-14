import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './pages/Login';
import Inicio from './pages/Inicio';
import DetalhesEndereco from './pages/DetalhesEndereco';
import EditarEndereco from './pages/EditarEndereco';

const Tab = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Login"
          component={Login as React.FC}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Inicio"
          component={Inicio as React.FC}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="DetalhesEndereco"
          component={DetalhesEndereco as React.FC}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="EditarEndereco"
          component={EditarEndereco as React.FC}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
