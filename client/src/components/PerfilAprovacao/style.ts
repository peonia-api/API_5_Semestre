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
        marginLeft: 140,
        justifyContent: "center",
        alignItems: "center",
        height: 100,
        width: 100,
        borderRadius: 50,
        backgroundColor: '#f2f2f2',
        marginTop: 20,
        marginBottom: 10
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

    dropDown: {
      paddingLeft: 15,
      backgroundColor: '#f2f2f2',
      borderRadius: 5,
      height: 40,
      borderWidth: 1, 
      borderColor: "#ccc",
      width: "85%",
      marginTop: 8,
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
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "center",
        marginHorizontal: 40,
        marginTop: 15,
      },

      containerB: {
        flexDirection: "row",
        justifyContent: "center",
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
        width: '45%',
        height: 50,
        marginTop: 5,
        marginBottom: 20,
        // marginLeft: 15,
        alignItems: 'center',
        justifyContent: 'center',
      },
      botaoConteudo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }, 
      botaoAction: {
        backgroundColor: '#000000',
        padding: 12,
        borderRadius: 5,
        width: '40%',
        marginTop: 20,
        marginBottom: 20,

      },
      botaoArroz: {
        backgroundColor: 'black',
        padding: 12,
        borderRadius: 5,
        width: '70%',
        marginTop: 20,
        marginBottom: 20,     
        marginLeft: 5,
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