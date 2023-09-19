import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ListaEquipamento from '../ListagemEquipamento';
import Icon from 'react-native-vector-icons/FontAwesome';
import Detalhe from '../Detalhe';
import { NavigationContainer } from '@react-navigation/native';
import Mapa from '../Mapa';
import { createStackNavigator } from '@react-navigation/stack';
import Cadastro from '../Cadastro';

Icon.loadFont();

const Tab = createMaterialBottomTabNavigator();
const CadastroStack = createStackNavigator(); // Crie a pilha de navegação aqui

function CadastroStackScreen() {
  return (
    <CadastroStack.Navigator>
      <CadastroStack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{ headerShown: false }}
      />
    </CadastroStack.Navigator>
  );
}
export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Equipamentos"
        activeColor="#000000"
        shifting={false}
        barStyle={{ backgroundColor: '#a4cdea' }}
        sceneAnimationEnabled={false}
      >
        <Tab.Screen
          name="Equipamentos"
          component={ListaEquipamento}
          options={{
            tabBarLabel: 'Equipamentos',
            tabBarIcon: () => (
              <Icon name="desktop" size={25} color="#000000" />
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
          name="Detalhes"
          component={Detalhe}
          options={{
            tabBarLabel: 'Detalhes',
            tabBarIcon: () => (
              <Icon name="list" size={25} color="#000000" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}