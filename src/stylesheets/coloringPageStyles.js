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
    borderRadius: 5,
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
    marginTop: "50%",
    alignItems: "center",
  },
  // sliderContainer: {
  //   width: "50%",
  //   height: "100%",
  //   backgroundColor: "grey",
  // },
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
  saveButtonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  saveButton: {
    backgroundColor: "white",
    width: "50%",
    height: "75%",
    maxHeight: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  }
});
