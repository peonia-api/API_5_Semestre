import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    textfont: {
      fontWeight: "bold"
    },

    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent'
      },   

      gradient: {
        paddingTop:25,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100 
      },

    icon: {
        width: 40,
        height: 40 ,
    },

    containerCompany: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        flex: 1, 
        marginLeft:10
    },  

    textContainer: {
      marginLeft:10
    },


    containerIcons: {
      flexDirection: 'row',
      alignItems: 'flex-end',
    },

   containerIcon: {
      margin: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },

    testecon: {
      textAlign: "center"
    },

    iconSignOut: {
      width: 30,
      height: 30
    }
      
    // linhaPontilhada: {
    //     width: "100%",
    //     borderColor: "#a4cdea", 
    //     borderWidth: 1,
    //     alignSelf: "center"
    //   },
  });

   
  export default styles;