import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 10,
    borderWidth: 2,
    borderRadius: 6,
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
    // marginRight: 10,

  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
  input: {
    flex: 1,
    height: 40,
  },

});

export default styles

