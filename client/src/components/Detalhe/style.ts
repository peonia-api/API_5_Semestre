import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  
  containerPrincipal: {
    backgroundColor: '#ffffff',
  },

  // scrollView: {
  //   marginHorizontal: 20,
  // },

  container: {
    flexDirection: "column",
    paddingTop: 10,
    marginTop: 10
  },

  containerImagem: {
    alignItems: "center",
    justifyContent: 'center',
    width: 325,
    height: 200,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#f2f2f2',
    // gap: 30,
    marginLeft: 30
  },

  image: {
    width: '100%', 
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  containerIcons: {
    flexDirection: "row",
    justifyContent: 'center', 
    alignItems: 'center', 
    gap: 50,
  },

  iconsPlusMinus: {
    height: 50,
    width: 50,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: '#a4cdea',
    alignItems: 'center', 
    justifyContent: 'center', 
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
    marginBottom: 15
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
    borderRadius: 5
  },

  textFont: {
    fontWeight: "600",
    marginTop: 14,
    padding: 5
  },

  containerLoLa: {
    flexDirection: "row",
    paddingTop: 10,
    marginTop: 10
  },

  inputLoLa: {
    height: 55,
    width: '24%',
    paddingLeft: 15,
    backgroundColor: '#fafafa',
    borderRadius: 5,
    marginBottom: 15
  },

  containerBotao: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },

  // linhaPontilhada: {
  //   width: "100%",
  //   borderStyle: "dashed",
  //   borderColor: "#dfe6f7",
  //   borderWidth: 1,
  //   marginTop: 10,
  //   marginBottom: 10,
  //   alignSelf: "center",
  // },
  
  botaoDesativar: {
    backgroundColor: 'red',
    marginTop: 12,
    padding: 12,
    borderRadius: 5,
    width: 100
  },

  botaoAtivar: {
    backgroundColor: 'green',
    marginTop: 12,
    padding: 12,
    borderRadius: 5,
    width: 100
  },

  textoBotao: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  }

});

export default styles;