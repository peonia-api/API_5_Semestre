import React from 'react';
import { View, StyleSheet } from 'react-native';
import NavBar from './src/components/NavBar';
import Navigation from './src/components/Navigation';
import { AuthProvider, Provider } from './src/contexts/'


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
