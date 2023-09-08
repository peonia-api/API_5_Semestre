import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flexDirection: "column",
      paddingHorizontal: 10,
      marginBottom: 10,
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 10,
    },
    column: {
      flex: 1,
      marginRight: 10,
      alignItems: "center", // Centraliza verticalmente o conteúdo na coluna
    },
    image: {
      width: "100%",
      height: 100, // Ajuste conforme necessário
      resizeMode: "contain",
    },
    textfont: {
      fontWeight: "bold",
    },
  });
  
  export default styles

   