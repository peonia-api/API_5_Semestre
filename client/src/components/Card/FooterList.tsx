import styles from "./style";
import LottieView from 'lottie-react-native';
import React, { useContext } from "react"
import { View } from "react-native"
import { AuthContext } from "../../contexts";

const FooterList = ({ lood }:any) => {
  const { typeCorMoon } = useContext(AuthContext);

    if(!lood) return null;
    return(
      <View style={[styles.animation, { backgroundColor: typeCorMoon[0] }]}>
          <LottieView
            autoPlay={true}
            loop={true}
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: typeCorMoon[0] ,
            }}
            source={require('../../assets/Animation.json')}
          />
      </View>
    )
}
export { FooterList }