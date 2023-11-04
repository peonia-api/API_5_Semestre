import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    imageCenter: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 10
    },

    container: {
        backgroundColor: '#4DB9DB',
        width: '100%',
        height: '100%',
        justifyContent: "center",
       
    },
    fechaModal: {
        fontSize: 30,
        fontWeight: "bold",
        color: "red",
        marginRight: 40,
        marginBottom: 40,
        textAlign:"right"
    },
    inputEmail: {
        paddingLeft: 15,
        backgroundColor: '#f2f2f2',
        borderRadius: 5,
        height: 45,
        borderWidth: 1,
        borderColor: "#ccc",
        width: "85%",
    },

    containerImagem: {
        marginTop: 40,
        marginBottom: 20,
        marginLeft: 140,
        justifyContent: "center",
        alignItems: "center",
        height: 100,
        width: 100,
        borderRadius: 50,
        backgroundColor: '#f2f2f2',
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 50
    },

    icon: {
        marginTop: -15,
        marginLeft: 240,
        marginBottom: 30
    },

    imageSize: {
        width: 100,
        height: 100,
        marginTop: 20
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

    returnImage: {
        width: 30,
        height: 30,
        marginLeft: 7, 
        marginTop: 10 
    },
    
    BotaoVerificaCodigo: {
        backgroundColor: 'black',
        marginTop: 15,
        padding: 12,
        borderRadius: 5,
        width: '85%'

      },

    containerBotao: {
        flexDirection: "row",
        justifyContent: "center",
        //marginTop: 10,
      },

      textPassword: {
        marginLeft: 50,
        justifyContent: "center",
      },
      iconPassword: {
        marginLeft: 265,
        marginTop: -33,
      },
      textoBotao: {
        color: 'white',
        fontSize: 17,
        textAlign: 'center',
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
      botaoAcao: {
        backgroundColor: '#000000',
        padding: 12,
        borderRadius: 5,
        width: '40%',
        marginTop: 20,
        marginBottom: 20,

      },
      icons: {
        height: 50,
        width: 50,
        borderRadius: 10,
        marginTop: 30,
        //backgroundColor: '#4DB9DB',
        alignItems: 'center', 
        justifyContent: 'center'
      }
        
});

export default styles;