import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 3,
    backgroundColor: '#ffffff',
  },
  listaContainer: {
    flex: 1,
    marginBottom: 2,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 1,
  },
  column: {
    flex: 1,
    marginRight: 5,
    alignItems: "center",
    paddingTop: 15,
    marginTop: 10,
    borderRadius: 5,
    marginLeft: 5,
    marginBottom: 5
    
  },
  column2: {
    flex: 1,
    marginLeft: 5,
    alignItems: "center",
    paddingTop: 15
  },
  image: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
  },
  textfont: {
    fontWeight: "bold",
  },
  uploadingAnimation: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999, // Isso coloca a animação na frente de outros elementos
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Um fundo semi-transparente para escurecer a tela de fundo
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles

