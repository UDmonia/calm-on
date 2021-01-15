import { StyleSheet } from "react-native";
import { windowWidth } from "../util/windowDimensions";
import hex from "./hexCodes";

export default StyleSheet.create({
    container: {
      height: "100%",
    },
    exitContainer: {
      flex: 2.5,
      backgroundColor: "white",
      justifyContent: "center",
      paddingLeft: "5%",
      paddingTop: "5%",
    },
    messageContainer: {
      flex: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    verticalCenter: {
      justifyContent: "center",
      width: "90%",
      height: "90%",
    },
    lettersContainer: {
      flex: 7,
      backgroundColor: "lightgreen",
      alignItems: "center",
      justifyContent: "center",
    },
    lineContainer2: {
      backgroundColor: "white",
      flexDirection: "row",
      flex: 1,
      maxHeight: "80%",
      justifyContent: "center",
      alignItems: "center",
    },
    randomLetters: {
      backgroundColor: "pink",
      flex: 1,
      flexDirection: "row",
    },
    keyContainer: {
      flex: 2,
      backgroundColor: "orange",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    keyButton: {
      marginRight: "7.5%",
      backgroundColor: "purple",
      width: windowWidth * 0.125,
      height: windowWidth * 0.125,
      borderRadius: 7.5,
    },
    auroraContainer: {
      flex: 4,
      backgroundColor: "lightgreen"
    },
    letterBoxContainer: {
      width: "8%",
      maxHeight: "90%",
      marginHorizontal: "2%",
    },
    letterBox: {
      flex: 8,
      justifyContent: "center",
      alignItems: "center",
      borderColor: "lightblue",
      borderWidth: 2,
      borderRadius: 5,
      marginBottom: "5%",
    },
    letterBoxBorder: {
        flex: 8,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 5,
        marginBottom: "5%",
      },
    letter: {
      fontSize: windowWidth * 0.05,
      fontFamily: "FontBold"
    },
    bar: {
      flex: 1,
      backgroundColor: "purple",
    },
    image: {
      flex: 7,
      marginTop: "10%",
      justifyContent: "center",
      alignItems: "center",
    },
    img: {
      height: "100%",
      resizeMode: "contain",
    },
    lineContainer: {
      flexDirection: "row",
      flex: 1,
      maxHeight: "33%",
      justifyContent: "center",
      alignItems: "center",
    },
    test1: {
      flex: 1,
      maxWidth: "9.5%",
      height: "90%",
      backgroundColor: "#D0B0FF",
      marginHorizontal: "3%",
      marginVertical: "2%",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 5,
    }
  })
  