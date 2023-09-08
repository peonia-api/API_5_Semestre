import { StyleSheet, ImageBackground, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/components/Navigation';
import NavBar from './src/components/NavBar';


export default function App() {
  return (     
    <NavigationContainer>
      <NavBar/>
      <Navigation/>
    </NavigationContainer>
    
  );
}
