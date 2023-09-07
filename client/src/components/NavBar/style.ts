import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    textfont: {
      fontWeight: "bold"
    },
    container: {
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

      }, 
    icon: {
        width: 40,
        height: 40 ,
        marginTop: 40,
        marginRight: 5
    },
    containerCompany: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        flex: 1, 
        marginLeft:10
    },  
    textContainer: {
        marginLeft: 5, 
        marginTop:45
    },
    containerPeople: {
        marginTop:15,
        alignItems: 'flex-end',
        marginRight:15
      },
    linhaPontilhada: {
        width: "90%",
        borderStyle: "dashed",
        borderColor: "black", 
        borderWidth: 1.2,
        marginTop: 20, 
        alignSelf: "center"
      },
  });

   
  export default styles;