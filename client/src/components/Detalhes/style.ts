import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  
  containerPrincipal: {
    backgroundColor: '#ffffff',
  },

  container: {
    flexDirection: "column",
    paddingTop: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },

  containerImagem: {
    alignItems: "center",
    justifyContent: 'center',
    width: '100%',
    height: 225,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#f2f2f2',
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

  icons: {
    height: 50,
    width: 50,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: '#4DB9DB',
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
    margin:10,
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
    backgroundColor: 'rgb(174, 59, 59)',
    marginTop: 12,
    padding: 12,
    borderRadius: 5,
    width: '100%'
  },

  botaoAtivar: {
    backgroundColor: 'rgb(96, 145, 193)',
    marginTop: 12,
    padding: 12,
    borderRadius: 5,
    width: '100%'
  },

  botaoAtualizar: {
    backgroundColor: '#7914F8',
    marginTop: 12,
    padding: 12,
    borderRadius: 5,
    width: 100
  },

  textoBotao: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
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

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d1d1d1',
    width: '100%',
    height: '100%',
  },
  
  camera: {
    width: '100%',
    height: '80%',
  },
  
  containerButtonCamera: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
    marginTop: 'auto', 
  },
  
  buttonCamera: {
    height: 50,
    width: 50,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: '#4DB9DB',
    alignItems: 'center', 
    justifyContent: 'center', 
  
  },
  
});

export default styles;