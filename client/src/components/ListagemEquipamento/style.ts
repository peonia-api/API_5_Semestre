import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 10,
    backgroundColor: '#ffffff'
  },
  listaContainer: {
    flex: 1,
    marginBottom: 60, 
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  column: {
    flex: 1,
    marginRight: 5,
    alignItems: "center",
  },
  column2: {
    flex: 1,
    marginLeft: 5,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
  },
  textfont: {
    fontWeight: "bold",
  },
  footerBotao: {
    width: "100%",
    marginBottom: 5,
    position: "absolute",
    bottom: 0,
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  containerBotao: {
    flexDirection: "row",
    justifyContent: "center",
  },
  botao: {
    backgroundColor: 'green',
    marginTop: 12,
    padding: 12,
    borderRadius: 5,
    width: '80%'
  },
});

export default styles

