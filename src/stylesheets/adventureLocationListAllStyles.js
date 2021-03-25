import { StyleSheet, StatusBar } from "react-native";
import hex from "./hexCodes";
import { windowWidth, windowHeight } from "../util/windowDimensions";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  listContainer: {
    width: windowWidth,
  },
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: windowHeight * 0.075,
  },
  imgContainer: {
    width: "20%",
    height: "100%",
    resizeMode: "contain",
  }
});
