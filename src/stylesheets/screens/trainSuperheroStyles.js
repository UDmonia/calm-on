import { StyleSheet } from "react-native";
import { windowWidth } from "../../util/windowDimensions";

export default StyleSheet.create({
  backgroundImage: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  progressBar: {
    flexDirection: "row",
    height: 20,
    width: "100%",
    backgroundColor: "white",
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 5,
  },
  flynnImg: {
    resizeMode: "contain",
    height: "80%",
    width: "100%",
    // minHeight: 220,
  },
  textBox: {
    backgroundColor: "#B24A2B",
    borderRadius: 5,
    width: "90%",
    // height: "35%",
    // marginBottom: "15%",
    alignItems: "center",
    justifyContent: "center",
    padding: "4%",
  },
  text: {
    color: "white",
    // fontSize: windowWidth * 0.035,
    fontFamily: "FontReg",
  },
});
