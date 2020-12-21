import { StyleSheet } from "react-native";
import {windowWidth, windowHeight} from "../util/windowDimensions";

export default StyleSheet.create({
  background: {
    flex: 1,
    flexWrap: "wrap",
    alignItems: "center",
    alignContent: "center",
  },
  exitContainer: {
    width: "100%",
    marginTop: 40,
    marginBottom: 30,
    marginLeft: "15%",
    alignSelf: "flex-start",
  },
  selectedItemsTxt: {
    color: "white",
    fontSize: windowWidth * 0.04,
    fontFamily: "FontReg",
  },
  itemsTxt: {
    fontFamily: "FontReg",
    fontSize: windowWidth * 0.025,
    textAlign: "center",
  },
  allSelectedContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  itemContainer: {
    height: windowWidth * 0.185,
    width: windowWidth * 0.185,
    margin: 3,
    backgroundColor: "#E9E9E9",
    alignItems: "center",
    justifyContent: "center",
  },
  imgContainer: {
    height: windowWidth * 0.125,
    width: windowWidth * 0.125,
    resizeMode: "contain",
    margin: 3,
  },
});
