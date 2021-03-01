import { StyleSheet, StatusBar } from "react-native";
import { windowWidth } from "../util/windowDimensions";

export default StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#1A2B44",
    height: "100%",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    paddingBottom: "5%",
  },
  exitContainer: {
    width: "90%",
  },
  exitButton: {},
  topText: {
    height: "20%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    color: "white",
    fontSize: windowWidth * 0.08,
    fontFamily: "FontBold",
  },
  bottomContainer: {
    flex: 4.5,
    backgroundColor: "white",
    width: "90%",
    borderRadius: 5,
  },
  itemContainer: {
    flex: 1,
  },
  item: {
    flex: 1,
    flexDirection: "row",
  },
  leftSide: {
    flex: 2,
    justifyContent: "center",
    paddingLeft: "5%",
  },
  rightSide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    resizeMode: "contain",
    width: "100%",
  },
  itemTitle: {
    fontSize: windowWidth * 0.06,
    color: "black",
    fontFamily: "FontBold",
  },
  itemDescription: {
    fontSize: windowWidth * 0.045,
    color: "black",
    fontFamily: "FontReg",
  },
});
