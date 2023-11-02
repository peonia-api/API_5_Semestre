// style.ts
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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

  textContainer: {
    flex: 1,
    marginLeft: 10,
    marginTop: 5,
  },

  image: {
    width: 200,
    height: 140,
    resizeMode: "cover",
    borderRadius: 20,
  },

  textfont: {
    fontSize: 20,
    fontWeight: "bold",
  },

  textSub: {
    fontSize: 18,
    marginTop: 10,
  },

  containerStatus: {
    width: 120,
    height: 35,
    backgroundColor: "blue",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    position: "absolute",
    bottom: 15,
    left: "50%", 
    transform: [{ translateX: -60 }] 
  },

  textStatus: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black"
  },

  uploadingAnimation: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,

  },
  animation: {
    justifyContent: 'center', // Centraliza horizontalmente.
    alignItems: 'center', // Centraliza verticalmente.
    backgroundColor: 'white',
    height: 100, // Altura desejada para a animação.
  },
});

export default styles;
