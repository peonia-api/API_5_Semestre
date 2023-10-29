import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavBar from './src/components/NavBar';
import Navigation from './src/components/Navigation';
import Pesquisa from './src/components/Pesquisa';
import { AuthProvider, Provider } from './src/contexts/'
import Login from './src/components/Login';

export default function App() {
  return (

    <AuthProvider>
      <Provider>
        <View style={styles.container}>
          <NavBar />
          <Navigation />
        </View>
      </Provider>
    </AuthProvider>
    

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',

  },
});
