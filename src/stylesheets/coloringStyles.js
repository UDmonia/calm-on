import { StyleSheet, Platform, StatusBar } from "react-native";
import { windowWidth, windowHeight } from "../util/windowDimensions";
import hex from "./hexCodes";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: hex.white.white1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  exitContainer: {
    // backgroundColor: "brown",
    paddingLeft: "5%",
    flex: 0.4,
    justifyContent: "center",
  },
  main: {
    flex: 3,
    // backgroundColor: "lightblue",
  },
  bottom: {
    flex: 1,
    // backgroundColor: "lightgreen",
    flexDirection: "row",
    paddingLeft: "5%",
  },
  auroraContainer: {
    height: "100%",
    width: "20%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  auroraImg: {
    height: "100%",
    maxHeight: 150,
    width: "100%",
    resizeMode: "contain",
  },
  textContainer: {
    height: "100%",
    width: "80%",
    backgroundColor: hex.purple.aurora,
    justifyContent: "center",
    alignItems: "center",
  },
  imageList: {
    flex: 1,
  },
  imageBoxContainer: {
    flex: 1,
    margin: "5%",
    // This changes the width of the image
    // NOTE: can't change past 40% since there must be two column of images and the margin is 5%
    maxWidth: "40%",
    backgroundColor: "white",
    borderWidth: windowWidth * 0.01,
    borderColor: hex.purple.purple2,
    borderRadius: windowWidth * 0.01,
  },
  img: {
    // This changes the height of the image
    height: windowHeight * 0.25,
    width: "100%",
    resizeMode: "contain",
  },
});
