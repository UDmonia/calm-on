import { StyleSheet, StatusBar } from "react-native";
import hex from "./hexCodes";
import { windowWidth, windowHeight } from "../util/windowDimensions";
import hexCodes from "./hexCodes";

const INLINE_TEXT_SIZE = windowWidth * 0.05;
const INLINE_IMAGE_SIZE = INLINE_TEXT_SIZE * 1.75;

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  exitContainer: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.1,
    justifyContent: "center",
  },
  storyContainer: {
    backgroundColor: hexCodes.green.green1,
    alignItems: "center",
    borderRadius: 10,
    flex: 8,
    width: windowWidth * 0.9,
    paddingTop: "5%",
    paddingHorizontal: "5%",
  },
  inlineImage: {
    // height: windowHeight * 0.075,
    resizeMode: "contain",
  },
  storyText: {
    fontSize: INLINE_TEXT_SIZE,
    color: hexCodes.white.white1,
    lineHeight: windowHeight * 0.082,
  },
  nextButton: {
    height: "70%",
    width: "50%",
    backgroundColor: hexCodes.green.green1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  nextButtonText: {
    fontSize: INLINE_TEXT_SIZE,
    color: hexCodes.white.white1,
  }
});
