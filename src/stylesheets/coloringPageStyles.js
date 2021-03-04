import { StyleSheet, Platform, StatusBar } from "react-native";
import { windowWidth, windowHeight } from "../util/windowDimensions";
import hexCodes from "./hexCodes";
const width = windowHeight * 0.25;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: hexCodes.purple.aurora,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  mainContainer: {
    flex: 1,
    //paddingTop: StatusBar.currentHeight, // need to rework this height for later uses need to test on IOS devices to see if this still works
  },
  exitContainer: {
    flex: 1.5,
    paddingLeft: "5%",
    justifyContent: "center",
  },
  mainImageContainer: {
    height: windowHeight * 0.8,
    backgroundColor: hexCodes.purple.aurora,
    flexDirection: "row",
  },
  leftSide: {
    flex: 1,
    backgroundColor: hexCodes.purple.aurora,
  },
  centerSection: {
    height: windowHeight * 0.8,
    width: windowWidth * 0.75,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    zIndex: -1,
    height: "90%",
    backgroundColor: "black",
  },
  rightSide: {
    flex: 1,
    backgroundColor: hexCodes.purple.aurora,
    alignItems: "center",
  },
  colorSelectionContainer: {
    flex: 3,
    backgroundColor: hexCodes.purple.aurora,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  lineupContainer: {
    // backgroundColor: "white",
    height: "40%",
    width: "100%",
    paddingLeft: "50%",
    paddingTop: "50%",
  },
  sliderContainer: {
    width: width,
    transform: [
      { rotate: "90deg" },
      { translateX: width - width / 2 },
      { translateY: width - width / 2 },
    ],
    backgroundColor: "white",
  },
  eraserButtonContainer: {
    // backgroundColor: "blue",
    height: "7.5%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});