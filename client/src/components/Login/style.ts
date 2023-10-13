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
      margin: 12,
     
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
      fontSize: 16, 
      textDecorationLine: 'underline',
      fontFamily: 'interregular',
    },
    textoNovo: {
      textAlign: "center",
      justifyContent: "center",
      fontSize: 16,
      marginTop: 30, 
      fontFamily: 'interregular',
      marginBottom: 40,
     
    },
    uploadingAnimation: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 999, // Isso coloca a animação na frente de outros elementos
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Um fundo semi-transparente para escurecer a tela de fundo
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  
  export default styles;
  