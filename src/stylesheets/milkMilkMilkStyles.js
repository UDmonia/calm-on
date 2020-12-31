import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import hex from "./hexCodes";

let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
  },
  main: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    display: "flex",
    height: "100%",
    alignItems: "center",
  },
  exit: {
    position: "absolute",
    height: 30,
    width: 30,
    left: "5.6%",
    right: "85.87%",
    top: "5.42%",
    bottom: "90.64 %",
  },
  exitBox: {
    backgroundColor: hex.brown.brown1,
    borderRadius: 10,
    position: "absolute",
    width: 337,
    height: 177,
    zIndex: 999,
    marginHorizontal: (screenWidth - 337) / 2,
    marginTop: "70%",
  },
  exitTop: {
    height: 100,
    width: "100%",
  },
  exitText: {
    color: hex.white.white1,
    fontFamily: "FontReg",
    fontSize: 24,
    fontWeight: "800",
    marginHorizontal: "10%",
    marginTop: "8%",
    textAlign: "center",
  },
  exitBottom: {
    display: "flex",
    flexDirection: "row",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    position: "absolute",
    bottom: 0,
    height: 50,
    width: "100%",
    backgroundColor: hex.white.white1,
  },
  yesNo: {
    borderBottomLeftRadius: 10,
    height: "100%",
    width: "50%",
    borderWidth: 1,
    borderColor: hex.white.white1,
    borderRightColor: hex.brown.brown1,
  },
  no: {
    height: "100%",
    width: "50%",
  },
  sprite: {
    position: "absolute",
    right: 0,
    top: "34%",
    width: 187,
    height: 333,
    zIndex: 10,
  },
  exitYNText: {
    fontFamily: "FontReg",
    fontWeight: "800",
    fontSize: 24,
    lineHeight: 50,
    textAlign: "center",
  },
  circle: {
    justifyContent: "center",
    alignItems: "center",
    width: screenWidth,
    height: screenHeight,
  },
  ball: {
    // position: "absolute",
    width: screenWidth,
    height: screenHeight,
    // left: -8,
    // top: -34,
  },
  box: {
    backgroundColor: hex.white.white1,
    borderRadius: 10,
    minHeight: 100,
    width: 330,
    position: "absolute",
    marginHorizontal: (screenWidth - 330) / 2,
    bottom: "5%",
    zIndex: 3,
  },
  top: {
    backgroundColor: hex.brown.brown1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    minHeight: 50,
    width: "100%",
  },
  bottom: {
    marginTop: 10,
    borderBottomEndRadius: 10,
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  question: {
    color: hex.white.white1,
    fontFamily: "FontReg",
    fontSize: 14,
    fontWeight: "800",
    textAlign: "center",
    marginVertical: 17,
    marginHorizontal: 14,
  },
  answer1: {
    backgroundColor: hex.white.white1,
    borderRadius: 10,
    height: 35,
    width: 284,
    textAlign: "center",
    marginVertical: "5%",
  },
  answer: {
    backgroundColor: hex.white.white1,
    borderRadius: 10,
    fontSize: 14,
    height: 35,
    width: 284,
    textAlign: "center",
    marginBottom: "5%",
  },
  a: {
    fontFamily: "FontReg",
    fontWeight: "800",
    textAlign: "center",
    lineHeight: 34,
  },
  milk: {
    position: "absolute",
    zIndex: 1,
  },
  milkImage: {
    height: 100,
    width: 80,
  },
  fridge: {
    position: "absolute",
    zIndex: 1,
  },
  fridgeImage: {
    height: 100,
    width: 80,
  },
  icecreamImage: {
    height: 100,
    width: 100,
  },
  cowImage: {
    height: 100,
    width: 150,
  },
  house: {
    position: "absolute",
    zIndex: 1,
  },
  houseImage: {
    height: 100,
    width: 100,
  },
  board: {
    position: "absolute",
    zIndex: 0,
  },
  figure: {
    position: "absolute",
    zIndex: 1,
  },
});

export default styles;
