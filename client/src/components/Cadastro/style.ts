import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  
  containerPrincipal: {
    backgroundColor: '#ffffff',
  },

  // scrollView: {
  //   marginHorizontal: 20,
  // },
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

  container: {
    flexDirection: "column",
    paddingTop: 10,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10
  },

  containerImagem: {  
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    width: '100%',
    height: 225,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: '#f2f2f2'
  },

  image: {
    width: '100%', 
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    position: 'relative',
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
    marginTop: 30,
    backgroundColor: '#4DB9DB',
    alignItems: 'center', 
    justifyContent: 'center'
  },

  iconDeletar: {
    position: 'absolute',
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: 'rgb(174, 59, 59)',
    alignItems: 'center', 
    justifyContent: 'center',
    right: 10, 
    bottom: 10,
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
    gap: 30,
  },

  input: {
    height: 55,
    width: '25%',
    paddingLeft: 15,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    marginBottom: 15,
    borderWidth: 1,
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
    borderWidth: 1,
  },

  textFont: {
    fontWeight: "600",
    marginTop: 14,
    padding: 5
  },

  containerLoLa: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    marginTop: 10,
    gap: 20,
  },

  inputLoLa: {
    height: 55,
    width: '42%',
    paddingLeft: 15,
    backgroundColor: '#fafafa',
    borderRadius: 5,
    marginBottom: 15,
    borderWidth: 1,
  },

  containerBotao: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 13,
    color: "#4DB9DB"
  },


//Modal Camera
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
  marginTop: 30,
  backgroundColor: '#4DB9DB',
  alignItems: 'center', 
  justifyContent: 'center'
},


});

export default styles;