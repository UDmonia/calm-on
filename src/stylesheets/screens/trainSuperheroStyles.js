import { StyleSheet } from "react-native";

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
    backgroundColor: "#FFA47150",
    borderWidth: 0,
    borderRadius: 20,
  },
  flynnImg: {
    resizeMode: "contain",
    height: "100%",
  },
  textBox: {
    backgroundColor: "#B24A2B",
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
    color: "#FFA471",
    fontFamily: "FontBold",
  },
  introFlynnContainer: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "center",
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
    color: "#FFA471",
    fontFamily: "FontBold",
    marginVertical: "2%",
  },
  exercisesTimer: {
    fontSize: 22.5,
    color: "#FFA471",
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
