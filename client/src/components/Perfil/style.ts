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
    }
    
});

export default styles;