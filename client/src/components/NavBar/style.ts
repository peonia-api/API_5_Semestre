import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    textfont: {
      fontWeight: "bold"
    },

    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
        
      },   

      gradient: {
        paddingTop:25,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,   
      },

    icon: {
        width: 40,
        height: 40 ,
    },
    containerCompany: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        flex: 1, 
        marginLeft:10,
    },  
    textContainer: {

    },
    containerPeople: {
      alignItems: 'flex-end',
      marginRight:15
      },
    linhaPontilhada: {
        width: "100%",
        borderColor: "#235fe6", 
        borderWidth: 1,
        alignSelf: "center"
      },
  });

   
  export default styles;