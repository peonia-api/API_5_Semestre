import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    imageCenter: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginBottom: -30,

    },
    container: {
        backgroundColor: '#4DB9DB',
        width: '100%',
        height: '100%',
    },
    imageSize: {
        width: "60%",
        height: "60%",
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
    }
});

export default styles;
