import React, { useContext } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import ListaEquipamento from '../ListagemEquipamento';
import Mapa from '../Mapa';
import Cadastro from '../Cadastro';
import Detalhes from '../Detalhes';
import LoginScreen from '../Login';
import CadastroUsuario from '../CadastroUsuario';
import Perfil from '../Perfil';
import { AuthContext } from '../../contexts';
import { VerificacaoDoCodigo } from '../RedefinirSenha';


Icon.loadFont();

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Equipamentos"
      activeColor="#000000"
      shifting={false}
      barStyle={{ backgroundColor: '#4DB9DB' }}
      sceneAnimationEnabled={false}
    >
      <Tab.Screen
        name="Equipamentos"
        component={ListaEquipamento}
        options={{
          tabBarLabel: 'Equipamentos',
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
        name="Cadastro"
        component={Cadastro}
        options={{
          tabBarLabel: 'Cadastrar',
          tabBarIcon: () => (
            <Icon name="plus" size={25} color="#000000" />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: () => (
            <Icon name="user" size={25} color="#000000" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};



export default function Navigation() {
  const { authenticated } = useContext(AuthContext);
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* navbar */}
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        {/* outras rotas */}
        <Stack.Screen name="Detalhes" component={Detalhes} options={{ headerBackVisible: true, headerShown: true}} />
        <Stack.Screen name="Perfil" component={Perfil} options={{ headerBackVisible: true, headerShown: true}} />
        <Stack.Screen name="Cadastrar usuário" component={CadastroUsuario} options={{ headerBackVisible: true, headerShown: true}} />
        <Stack.Screen name="Redefinir senha" component={RedefinirSenha} options={{ headerBackVisible: true, headerShown: true}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
