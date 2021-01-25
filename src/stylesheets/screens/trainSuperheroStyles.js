import { StyleSheet } from "react-native";
import hexCodes from "../hexCodes";

export default StyleSheet.create({
  backgroundImage: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  exitContainer: {
    height: "12.5%",
    marginLeft: "5%",
    justifyContent: "flex-end",
  },
  bottomPadding: {
    height: "5%",
  },
  progressBar: {
    flexDirection: "row",
    height: 20,
    width: "85%",
    // the '50' adds a 50% opacity on to the color
    backgroundColor: `${hexCodes.orange.orange1}50`,
    borderWidth: 0,
    borderRadius: 20,
  },
  introFlynnContainer: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  flynnImg: {
    resizeMode: "contain",
    height: "100%",
    width: "100%",
  },
  textBox: {
    backgroundColor: hexCodes.brown.flynn,
    borderRadius: 5,
    width: "75%",
    alignItems: "center",
    justifyContent: "center",
    padding: "3%",
  },
  text: {
    color: "white",
    fontFamily: "FontReg",
  },
  generalContainer: {
    flex: 1,
  },
  introTimerContainer: {
    flex: 2.5,
    justifyContent: "center",
    alignItems: "center",
  },
  introTimer: {
    fontSize: 100,
    color: hexCodes.orange.orange1,
    fontFamily: "FontBold",
  },
  introTextBoxContainer: {
    flex: 1,
    alignItems: "center",
  },
  exercisesTimerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  exercisesNameText: {
    fontSize: 40,
    color: hexCodes.orange.orange1,
    fontFamily: "FontBold",
    marginVertical: "2%",
  },
  exercisesTimer: {
    fontSize: 22.5,
    color: hexCodes.orange.orange1,
    fontFamily: "FontReg",
    marginVertical: "1%",
  },
  exercisesImageContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  exercisesImage: {
    height: "70%",
    width: "100%",
    resizeMode: "contain",
  },
});
