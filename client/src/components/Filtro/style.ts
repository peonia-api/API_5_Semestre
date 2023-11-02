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
        alignItems: "center" 
    },
    modalContent: {
        backgroundColor: "white", 
        padding: 16, 
        borderRadius: 8,
        borderColor: "#4DB9DB",
        borderWidth: 6
    }


});

export default styles