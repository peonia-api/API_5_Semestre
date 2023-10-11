import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    imageCenter: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    },
    container: {
        backgroundColor: '#4DB9DB',
        width: '100%',
        height: '100%',
    },
    imageSize: {
        width: "45%",
        height: "45%",
    },
    inputWrapper: {
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
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
    inputCodigo: {
        paddingLeft: 15,
        backgroundColor: '#f2f2f2',
        borderRadius: 5,
        height: 45,
        borderWidth: 1,
        borderColor: "#ccc",
        width: "85%",
        fontSize: 30,
        fontWeight: "bold"
    },
    containerRedefinir: {
        marginTop: 20,
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    containerCodigo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,

    },

    inputCodigoVerifica: {
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        marginTop: 30,
    },
    textoBotao: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
      },
      BotaoVerificaCodigo: {
        backgroundColor: 'black',
        marginTop: 20,
        padding: 12,
        borderRadius: 5,
        width: '85%'
      },
      containerBotao: {
        flexDirection: "row",
        justifyContent: "center",
      },
    
});

export default styles;
