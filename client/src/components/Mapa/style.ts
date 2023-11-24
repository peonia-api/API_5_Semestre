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

  pin: {
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: "center",
    width: 37,
    height: 37
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 10, // Largura da base do triângulo
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
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
  iconMap: {
    position: "absolute",
    bottom: 16,
    right: 16,
    padding: 10,
  }
});

export default styles;
