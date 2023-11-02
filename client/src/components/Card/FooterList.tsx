import styles from "./style";
import LottieView from 'lottie-react-native';
import React from "react"
import { View } from "react-native"

const FooterList = ({ lood }:any) => {
    if(!lood) return null;
    return(
      <View style={styles.animation}>
          <LottieView
            autoPlay={true}
            loop={true}
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'transparent',
            }}
            source={require('../../assets/Animation.json')}
          />
      </View>
    )
}
export { FooterList }