import { StyleSheet, ImageBackground, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/components/Navigation';
import NavBar from './src/components/NavBar';
import Pesquisa from './src/components/Pesquisa';


export default function App() {
  return (     
    <NavigationContainer>
      <NavBar/>
      <Pesquisa/>
      <Navigation/>
    </NavigationContainer>
    
  );
}
