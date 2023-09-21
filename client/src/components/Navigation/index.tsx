import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import ListaEquipamento from '../ListagemEquipamento';
import Detalhe from '../Detalhe';
import Mapa from '../Mapa';
import Cadastro from '../Cadastro';

Icon.loadFont();

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
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
  );
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* navbar */}
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        {/* outras rotas */}
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerBackVisible: true, headerShown: true}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
