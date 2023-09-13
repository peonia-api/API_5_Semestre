import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Cadastro from '../Cadastro';
import ListaEquipamento from '../ListagemEquipamento';
import Icon from 'react-native-vector-icons/FontAwesome';
import Detalhe from '../Detalhe';
import { NavigationContainer } from '@react-navigation/native';
import NavBar from '../NavBar';

Icon.loadFont();

const Tab = createMaterialBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Cadastro"
        activeColor="#000000"
        shifting={false}
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#a4a3ff' }}
        sceneAnimationEnabled={false}
      >
        <Tab.Screen
          name="Detalhe"
          component={Detalhe}
          options={{
            tabBarLabel: 'Detalhe',
            tabBarIcon: () => (
              <Icon name="list" size={25} color="#000000" />
            ),
          }}
        />

        <Tab.Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            tabBarLabel: 'Cadastro',
            tabBarIcon: () => (
              <Icon name="map" size={25} color="#000000" />
            ),
          }}
        />

        <Tab.Screen
          name="Lista Equipamento"
          component={ListaEquipamento}
          options={{
            tabBarLabel: 'Lista Equipamento',
            tabBarIcon: () => (
              <Icon name="list" size={25} color="#000000" />
            ),
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
