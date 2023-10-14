import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4DB9DB',
        width: '100%',
        height: '100%',
        flexDirection: "column",
        alignContent: "center",
        paddingTop: 50
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
    containerImagem: {
        marginLeft: 160,
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
        borderRadius: 50,
    },
    icon: {
        marginTop: -15,
        marginLeft: 250,
    },
    iconPassword: {
        marginLeft: 265,
        marginTop: -33,
    },
    textPassword: {
        marginLeft: 50,
        justifyContent: "center",
    }
});

export default styles;
