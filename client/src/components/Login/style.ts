import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    imageCenter: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10,
      marginBottom: -50,
      
    },
    container : {
      backgroundColor: '#4DB9DB',
      width:'100%',
      height: '100%',
    },
    imageSize: {
      width: "60%",
      height: "50%",
    },
    inputWrapper: {
      alignItems: "center",
      justifyContent: "center",
      margin: 10,
     
    },
    inputLogin: {
      paddingLeft: 15,
      backgroundColor: '#f2f2f2',
      borderRadius: 5,
      height: 45,
      borderWidth: 1, 
      borderColor: "#ccc",
      width: "85%",

    },
    recuperarSenha: {
      textAlign: "center",
      justifyContent: "center",
      fontSize: 20,
      marginTop: 30, 
      // fontFamily: 'Arial',
      textDecorationLine: 'underline',
    },
    textoNovo: {
      textAlign: "center",
      justifyContent: "center",
      fontSize: 20,
      marginTop: 30, 
      // fontFamily: 'Arial',
     
    }
  });
  
  export default styles;