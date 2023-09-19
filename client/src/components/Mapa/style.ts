import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    backgroundColor: "#ffffff",
    
  },
  picker: {
    width: "95%",
    height: 50,
    backgroundColor: "#f2f2f2",
    marginBottom: 15,
    alignSelf: "center",
    
  },
  textfont: {
    fontWeight: "bold",
    fontSize: 19,
  },
  itemContainer: {
    flexDirection: "column",
    marginBottom: 10,
    width: "95%",
    alignSelf: "center",

  },
  containerTrans: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    display: "flex",
  },
  item: {
    width: "95%",
    margin: 5,
    height: 'auto',
    backgroundColor: "#f2f2f2",
    borderRadius: 5
  },
});

export default styles;
