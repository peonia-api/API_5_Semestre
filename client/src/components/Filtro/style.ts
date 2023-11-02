import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {

    },
    filterContainer: {
        alignItems: "center",
        paddingHorizontal: 15,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
    },
    icon: {
        width: 25,
        height: 25,
        marginRight: 5,
    },
    input: {
        flex: 1,
        height: 40,
    },
    containerModal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 10,
        borderRadius: 10,
        borderColor: "#4DB9DB",
        borderWidth: 2,
        width: 260
    },
    textModal: {
        fontSize: 18,
        marginVertical: 22,
    },
    option: {
        flexDirection: 'row',
        backgroundColor: "#f0fafc",
        borderRadius: 10,
        marginBottom: 15,
        width: "95%",
        elevation: 3,
        position: "relative",
        borderWidth: 1,
        borderColor: "#d6d6d6",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10
    }
});

export default styles