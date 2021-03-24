import { StyleSheet, StatusBar } from "react-native";
import hex from "./hexCodes";
import { windowWidth, windowHeight } from "../util/windowDimensions";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  listContainer: {
    width: windowWidth,
  },
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
