import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    linhaPontilhada: {
        width: "90%",
        borderStyle: "dashed",
        borderColor: "black", 
        borderWidth: 1.2,
        marginTop: 20, 
        alignSelf: "center",
      },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    botao: {
        backgroundColor: 'grey',
        marginTop: 12,
        padding: 12,
        borderRadius: 5,
        width: '80%'
    },
    textoBotao: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        textTransform: 'uppercase'
    }
});

export default styles;