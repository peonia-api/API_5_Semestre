import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Cadastro from '../Cadastro';
import ListaEquipamento from '../ListagemEquipamento';
import Icon from 'react-native-vector-icons/FontAwesome';
import Detalhe from '../Detalhe';

Icon.loadFont();

const Tab = createMaterialBottomTabNavigator();

export default function Navigation() {
  return (

      <Tab.Navigator
        initialRouteName="Cadastro"
        activeColor="#000000"
        shifting={false}
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#9a99ff' }}
        sceneAnimationEnabled={false} 
      >
        <Tab.Screen
          name="ListaEquipamento"
          component={ListaEquipamento}
          options={{
            tabBarLabel: 'Lista Equipamento',
            tabBarIcon: () => (
              <Icon name="list" size={25} color="#000000" />
            ),
          }}
        />
        <Tab.Screen
          name="Mapa"
          component={Cadastro}
          options={{
            tabBarLabel: 'Mapa',
            tabBarIcon: () => (
              <Icon name="map-pin" size={25} color="#000000" />
            ),
          }}
        />
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
        
      </Tab.Navigator>
   
  );
}
