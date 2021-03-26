import { StyleSheet, StatusBar } from "react-native";
import hex from "./hexCodes";
import { windowWidth, windowHeight } from "../util/windowDimensions";
import hexCodes from "./hexCodes";

const INLINE_TEXT_SIZE = windowWidth * 0.05;
const INLINE_IMAGE_SIZE = INLINE_TEXT_SIZE * 1.75;

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: StatusBar.height,
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
    justifyContent: "center",
    borderRadius: 10,
  },
  inlineImage: {
    height: INLINE_IMAGE_SIZE,
    width: INLINE_IMAGE_SIZE,
    resizeMode: "contain",
  },
  storyText: {
    fontSize: INLINE_TEXT_SIZE,
  },
});
