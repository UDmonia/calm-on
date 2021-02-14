import { StyleSheet, Platform, StatusBar } from "react-native";
import { windowWidth, windowHeight } from "../util/windowDimensions";
import hexCodes from "./hexCodes";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: hexCodes.purple.aurora,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  mainContainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight, // need to rework this height for later uses need to test on IOS devices to see if this still works
  },
  exitContainer: {
    flex: 1,
    paddingLeft: "5%",
  },
  mainImageContainer: {
    height: windowHeight * 0.8,
    backgroundColor: hexCodes.purple.aurora,
    alignItems: "center",
    justifyContent: "center",
  },
  colorSelectionContainer: {
    flex: 3,
    backgroundColor: hexCodes.purple.aurora,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
});
