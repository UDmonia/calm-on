import { StyleSheet, StatusBar } from "react-native";
import hex from "./hexCodes";
import { windowWidth, windowHeight } from "../util/windowDimensions";
import hexCodes from "./hexCodes";

export default StyleSheet.create({
  background: {
    height: windowHeight,
    width: windowWidth,
  },
  mainContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  exitContainer: {
    marginLeft: "5%",
  },
  allSelectedContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedItemsTxt: {
    color: "white",
    fontSize: windowWidth * 0.05,
    fontFamily: "FontReg",
    paddingBottom: "5%",
  },
  grid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  itemContainer: {
    height: windowWidth * 0.185,
    width: windowWidth * 0.185,
    margin: 3,
    backgroundColor: hex.white.white1,
    alignItems: "center",
    justifyContent: "center",
  },
  imgContainer: {
    height: windowWidth * 0.125,
    width: windowWidth * 0.125,
    resizeMode: "contain",
    margin: 3,
  },
  itemsTxt: {
    fontFamily: "FontReg",
    fontSize: windowWidth * 0.025,
    textAlign: "center",
  },
  nextButton: {
    backgroundColor: hexCodes.green.green1,
    marginTop: "5%",
    marginBottom: "5%",
    height: windowHeight * 0.075,
    width: windowWidth * 0.4,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
