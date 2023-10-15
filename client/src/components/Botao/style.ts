import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  containerBotao2: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 10,
    width: '40%',
    marginBottom: 10,
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
    width: '100%'
  },

  textoBotao: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },

  linhaPontilhada: {
    width: "90%",
    borderStyle: "dashed",
    borderColor: "black",
    borderWidth: 1.2,
    marginTop: 20,
    alignSelf: "center",
  },

  containerBotao: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
  },

  botao: {
    backgroundColor: 'green',
    marginTop: 12,
    padding: 12,
    borderRadius: 5,
    width: '100%'
  },

  botaoCadastro: {
    backgroundColor: '#4DB9DB',
    marginTop: 12,
    padding: 12,
    borderRadius: 5,
    width: '80%'
  },

  botaoAtualizar: {
    backgroundColor: 'rgb(21, 75, 120)',
    marginTop: 12,
    padding: 12,
    borderRadius: 5,
    width: '100%'
  },

  botaoLogin: {
    backgroundColor: 'black',
    marginTop: 12,
    padding: 12,
    borderRadius: 2,
    width: '50%',
    height: '85%'
  },

  botaoCadastroUsuario: {
    backgroundColor: 'black',
    marginTop: 12,
    padding: 12,
    borderRadius: 5,
    width: '55%'
  },

  botaoAtualizarUsuario: {
    backgroundColor: '#4DB9DB',
    padding: 12,
    borderRadius: 5,
    width: '55%',
    marginBottom: 30
  },

  BotaoEnvCodigo: {
    backgroundColor: 'black',
    marginTop: 20,
    padding: 12,
    borderRadius: 5,
    width: '85%',
  },

  BotaoVerificaCodigo: {
    backgroundColor: 'black',
    marginTop: 20,
    padding: 12,
    borderRadius: 5,
    width: '85%'
  },

  BotaoRedefSenha: {
    backgroundColor: 'black',
    marginTop: 20,
    padding: 12,
    borderRadius: 5,
    width: '85%'
  }
});

export default styles;