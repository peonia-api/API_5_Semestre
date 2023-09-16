import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ListaEquipamento from '../ListagemEquipamento';
import Icon from 'react-native-vector-icons/FontAwesome';
import Detalhe from '../Detalhe';
import { NavigationContainer } from '@react-navigation/native';
import Mapa from '../Mapa';


Icon.loadFont();

const Tab = createMaterialBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Lista Equipamento"
        activeColor="#000000"
        shifting={false}
        barStyle={{ backgroundColor: '#b8cdff' }}
        sceneAnimationEnabled={false}
      > 
      
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
        <Tab.Screen
          name="Mapa"
          component={Mapa}
          options={{
            tabBarLabel: 'Mapa',
            tabBarIcon: () => (
              <Icon name="map" size={25} color="#000000" />
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

    </NavigationContainer>
  );
}
