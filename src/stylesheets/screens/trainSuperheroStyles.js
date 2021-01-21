import { StyleSheet } from "react-native";
import { windowWidth } from "../../util/windowDimensions";

export default StyleSheet.create({
  backgroundImage: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  progressBar: {
    flexDirection: "row",
    height: 20,
    width: "85%",
    backgroundColor: "#FFA47150",
    // opacity: 0.4,
    // borderColor: "#000",
    borderWidth: 0,
    borderRadius: 20,
  },
  flynnImg: {
    resizeMode: "contain",
    height: "100%",
    // width: "100%",
    // minHeight: 220,
  },
  textBox: {
    backgroundColor: "#B24A2B",
    borderRadius: 5,
    width: "75%",
    // height: "35%",
    // marginBottom: "15%",
    alignItems: "center",
    justifyContent: "center",
    padding: "3%",
  },
  text: {
    color: "white",
    // fontSize: windowWidth * 0.035,
    fontFamily: "FontReg",
  },
});
