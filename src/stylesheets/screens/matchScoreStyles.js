import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#886AB7",
  },
  topView: {
    flex: 1,
    // backgroundColor: "green",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  header: {
    marginBottom: "10%",
    fontFamily: "FontBold",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 64,
    color: "#FFFFFF",
  },
  message: {
    fontFamily: "FontReg",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 25,
    color: "#FFFFFF",
  },
  score: {
    fontFamily: "FontReg",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 64,
    color: "#FFFFFF",
  },
  bestScore: {
    fontFamily: "FontReg",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 18,
    color: "#FFFFFF",
    marginTop: "6%",
  },
  midView: {
    flex: 1,
    // backgroundColor: "blue",
    alignItems: "center",
  },
  bottomView: {
    flex: 1,
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  buttons: {
      margin: "-10%",
      height: "20%",
      width: "80%",
      borderRadius: 42,
      backgroundColor: "#FFFFFF",
      alignItems: "center",
      justifyContent: "center",
  },
  buttonText: {
      fontFamily: "FontReg",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 20,
      color: "#333333",
      display: "flex",
  },
});
