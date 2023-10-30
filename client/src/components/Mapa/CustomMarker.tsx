import { GestureResponderEvent, Image, TouchableOpacity, View } from "react-native";
import styles from "./style";
import React from "react";

interface Props{
    pinColor: string
    url: string
    imageStyle: {}
}

const CustomMarker = ({ pinColor, url, imageStyle }:Props) => {
  
    return (
      <TouchableOpacity style={{justifyContent: "center", alignItems: "center"}} >
        <View style={[styles.pin, { borderColor: pinColor, backgroundColor: pinColor, marginBottom: 1 }]}>
          <Image 
            source={{ uri: url }} 
            style={imageStyle} 
          />
        </View>
        <View style={[styles.triangle, { borderTopColor: pinColor }]}/>
      </TouchableOpacity>
    );
}

export { CustomMarker }