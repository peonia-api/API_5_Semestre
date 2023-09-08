import { StyleSheet, ImageBackground, View, Image } from 'react-native';
import Main from './src/components/Main';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/components/Navigation';


export default function App() {
  return (
    <NavigationContainer>
        <Navigation/>
    </NavigationContainer>
  );
}
