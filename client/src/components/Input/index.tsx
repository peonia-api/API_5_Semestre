import { TextInput } from "react-native";
import React from "react"

export function InputPassword({style ,setPassword, placeholder}:any){

    return(
        <TextInput
            maxLength={20}
            secureTextEntry={true}
            placeholder={placeholder}
            style={style}
            onChangeText={(e) => setPassword(e)}
            placeholderTextColor="#000000" 
          />
    )
} 

export function Input({style, set, placeholder}:any) {
    return(
        <TextInput
            placeholder={placeholder}
            style={style}
            onChangeText={(e) => set(e)}
            placeholderTextColor="#000000" 
            autoCapitalize="none"
          />
    )
}