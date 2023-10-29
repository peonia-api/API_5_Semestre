import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    
  },
  card: {
    flexDirection: 'row',
    backgroundColor: "#f0fafc",
    borderRadius: 10,
    marginBottom: 15,
    width: "100%",
    elevation: 3,
    padding: 10,
    position: "relative",
    borderWidth: 1,
    borderColor: "#d6d6d6"
  },
  image: {
    width: 150,
    height: 100,
    resizeMode: "cover",
    borderRadius: 20,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
    marginTop: 5,
  },
  textfont: {
    fontSize: 20,
    fontWeight: "bold",
  },

  textSub: {
    fontSize: 18,
    marginTop: 10,
  },
  showFlatListButton: {
    
     // Cor de fundo do botão
    //borderRadius: 5, // Borda arredondada
    margin: 0, // Margem ao redor do botão
    alignItems: 'center', // Alinhar o conteúdo no centro horizontal
  },
});

export default styles;
