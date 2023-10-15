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
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: '100%',
    },

    containerImagem: {
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
        margin: 10,
        backgroundColor: '#FFFFFF'
    },

    inputLogin: {
        paddingLeft: 15,
        backgroundColor: '#f2f2f2',
        borderColor: "#4DB9DB",
        borderWidth: 1,
        borderRadius: 5,
        height: 45,
        width: "85%",
        marginTop: 10
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
        marginTop: 25,
      },

      botaoAtualizarUsuario: {
        backgroundColor: '#4DB9DB',
        padding: 12,
        borderRadius: 5,
        width: '55%',
        marginTop: 20,
        marginBottom: 30,
        marginLeft: 85
      },

      textoBotao: {
        color: 'white',
        fontSize: 16,
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
        
});

export default styles;