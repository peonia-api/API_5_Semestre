import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerBotao2: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 30,
        marginBottom: 10,
      },
      botaoDesativar: {
        backgroundColor: 'red',
        marginTop: 12,
        padding: 12,
        borderRadius: 5,
        width: '40%'
      },
      botaoAtivar: {
        backgroundColor: 'green',
        marginTop: 12,
        padding: 12,
        borderRadius: 5,
        width: '40%'
      },
      textoBotao: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
      },
      linhaPontilhada: {
        width: "90%",
        borderStyle: "dashed",
        borderColor: "black",
        borderWidth: 1.2,
        marginTop: 20,
        alignSelf: "center",
      },
      
      containerBotao: {
        flexDirection: "row",
        justifyContent: "center",
      },
      botao: {
        backgroundColor: 'green',
        marginTop: 12,
        padding: 12,
        borderRadius: 5,
        width: '80%'
      },
});

export default styles;