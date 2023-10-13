import React from "react";
import { TouchableOpacity, Text } from "react-native";

export function Button({styles,stylesText, onPress, texto}:any){
    return(
        <TouchableOpacity style={styles} onPress={onPress}  >
            <Text style={stylesText}>{texto}</Text>
        </TouchableOpacity>
    )
}