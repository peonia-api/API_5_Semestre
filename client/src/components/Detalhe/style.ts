import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop:10
  },
  containerImagem: {
    alignItems: "center",
    width: 250,
    height: 150,
    backgroundColor: "#9e9e9e",
    gap: 30,
    marginLeft: 30
  },
  image: {
    top: "25%"
  },

  containerIcons: {
    gap: 20,
    marginLeft: 20
  },

  containerInput: {
    paddingTop: 20,
    alignItems: 'center',
  },

  picker: {
    width: '60%',
    height: 50,
    backgroundColor: '#f2f2f2',
    marginBottom: 15,
    gap: 30
  },

  input: {
    height: 55,
    width: '25%',
    paddingLeft: 15,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    marginBottom: 15,
  },

  containerTrans: {
    flexDirection: "row",
    gap: 20,
  },

  inputInteiro: {
    height: 55,
    width: '90%',
    paddingLeft: 15,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    marginBottom: 15,
  },

  textFont: {
    fontWeight: "600",
    marginTop: 14,
    padding: 5
  },

  inputLoLa: {
    height: 55,
    width: '24%',
    paddingLeft: 15,
    backgroundColor: '#fafafa',
    borderRadius: 5,
    marginBottom: 15,

  },
  containerBotao: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    marginBottom: 10,
  },

  linhaPontilhada: {
    width: "100%",
    borderStyle: "dashed",
    borderColor: "#dfe6f7",
    borderWidth: 1,
    marginTop: 10,
    alignSelf: "center",
  },
  botaoDesativar: {
    backgroundColor: 'red',
    marginTop: 12,
    padding: 12,
    borderRadius: 5,
    width: '40%'
  },
  botaoAtivar: {
    backgroundColor: 'green',
    marginTop: 12,
    padding: 12,
    borderRadius: 5,
    width: '40%'
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    textTransform: 'uppercase'
  }

});

export default styles;