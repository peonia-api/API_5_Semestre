import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Cadastro from '../Cadastro';
import ListaEquipamento from '../ListagemEquipamento';

Icon.loadFont();

const Tab = createMaterialBottomTabNavigator(
  {
    Cadastro: {
      screen: Cadastro,
      navigationOptions: {
        tabBarLabel: 'Cadastro',
        tabBarIcon: ({ focused }: any) => (
          <Icon name="lock" size={25} color={focused ? '#fff' : '#ddd'} />
        ),
      },
    },
    Mapa: {
      screen: Cadastro, // Substitua por sua tela de mapa
      navigationOptions: {
        tabBarLabel: 'Mapa',
        tabBarIcon: ({ focused }: any) => (
          <Icon name="map" size={25} color={focused ? '#fff' : '#ddd'} />
        ),
      },
    },
    ListaEquipamentos: {
      screen: ListaEquipamento,
      navigationOptions: {
        tabBarLabel: 'Lista Equipamentos',
        tabBarIcon: ({ focused }: any) => (
          <Icon name="list" size={25} color={focused ? '#fff' : '#ddd'} />
        ),
      },
    },
  },
  {
    shifting: true,
    activeColor: '#fff',
    inactiveColor: '#ddd',
    barStyle: { backgroundColor: '#694fad' },
  }
);

export default createAppContainer(Tab);
