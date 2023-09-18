import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavBar from './src/components/NavBar';
import Navigation from './src/components/Navigation';
import Pesquisa from './src/components/Pesquisa';

export default function App() {
  return (     

      <View style={styles.container}>
        <NavBar/>
        <Navigation />
      </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', 
  },
});