import React, { useCallback, useContext, useState } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import ListaEquipamento from '../ListagemEquipamento';
import Mapa from '../Mapa';
import Cadastro from '../Cadastro';
import Detalhes from '../Detalhes';
import LoginScreen from '../Login';
import CadastroUsuario from '../CadastroUsuario';
import Perfil from '../Perfil';
import { AuthContext } from '../../contexts/User';
import { VerificacaoDoCodigo } from '../RedefinirSenha';
import { Redifinir } from '../RedefinirSenha/redefinirSenha';
import { Image } from 'react-native';
import { useContextUser } from '../../hooks';

Icon.loadFont();


const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {

  const { iconePerfil } = useContextUser()

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
            <Image
              source={{ uri: iconePerfil }}
              style={{ width: 40, height: 30, borderRadius: 50 }}
            />
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

      {authenticated ? (
          <>
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
            {/* outras rotas */}
            <Stack.Screen
              name="Detalhes"
              component={Detalhes}
              options={{ headerBackVisible: true, headerShown: true }}
            />
            <Stack.Screen
              name="Perfil"
              component={Perfil}
              options={{ headerBackVisible: true, headerShown: true}}
            />
            <Stack.Screen
              name="Novo Equipamento"
              component={Cadastro}
              options={{ headerBackVisible: true, headerShown: true}}
            />
           </>
        ) : (
          <>
           <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen 
            name="Redefinir" 
            component={Redifinir} 
            options={{ headerBackVisible: true, headerShown: true}} 
          />  
          <Stack.Screen
            name="Cadastrar usuário"
            component={CadastroUsuario}
            options={{ headerBackVisible: true, headerShown: true }}
          />
          <Stack.Screen 
            name="Verificar codigo" 
            component={VerificacaoDoCodigo} 
            options={{ headerBackVisible: true, headerShown: true}} 
          />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
