import { StyleSheet } from "react-native";
import hex from "./hexCodes";
import {windowHeight, windowWidth} from "../util/windowDimensions";

export default StyleSheet.create({
  screenContainer: {
    flex: 1,
    height: "100%",
    width: "100%",
    fontFamily: "FontReg",
  },
  background: {
    flex: 4,
  },
  imgBackground: {
    resizeMode: "cover",
    width: "100%",
    height: "145%",
    top: undefined,
    bottom: 0,
  },
  exitPosition: {
    marginTop: "10%",
    marginLeft :"5%",
  },
  row: {
    flexDirection: "row",
    marginTop: 30,
  },
  locationContainer: {
    height: .2333 * windowWidth,
    width: "90%",
    borderRadius: 10,
    backgroundColor: hex.green.green1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: {
    height: .2333 * windowWidth,
    width: .2333 * windowWidth,
    marginHorizontal: "5%",
    borderRadius: 5,
    backgroundColor: hex.white.white1,
    alignItems: "center",
    justifyContent: "center",
  },
  imgSpirit: {
    height: "100%",
  },
  imgSpiritContainer: {
    height: "50%",
    alignSelf: "flex-start",
    marginLeft: "15%",
    
  },
  img: {
    height: "50%",
    width: "70%",
    resizeMode: "contain",
    margin: 5,
  },
  txtLetter: {
    color: "white",
    fontFamily: "FontBold",
    fontSize: windowWidth * 0.04,
  },
  basketContainer: {
    alignItems: "center",
    width: "100%",
    flex: 1.25,
  },
  seeAllContainer: {
    backgroundColor: hex.green.green1,
    width: "100%",
    minHeight: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: "4%",
  },
  selectedItemTxt: {
    color: "white",
    fontFamily: "FontBold",
    fontSize: windowWidth * 0.04
  },
  seeAllTxt: {
    color: "white",
    fontFamily: "FontBold",
    fontSize: windowWidth * 0.04
  },
  basket: {
    backgroundColor: "white",
    height: "10%",
    width: "100%",
  },
  basketItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  basketItem: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: windowWidth * 0.20,
    margin: 5,
  },
  itemName: {
    textAlign: "center",
    fontFamily: "FontReg",
    fontSize: windowWidth * 0.030,
  },
  itemDivider: {
    backgroundColor: "#027E2A",
    height: "80%",
    width: 1,
  },
  center: {
    flex: 1,
    marginTop: "10%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imgText: {
    position: "absolute",
    bottom: 0,
    fontFamily: "FontBold",
    fontSize: windowWidth * 0.030,
  },
  selectImg: {
    height: "60%",
    width: "70%",
    resizeMode: "contain"

  }
});
