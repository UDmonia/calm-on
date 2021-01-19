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
      flex: 9,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white",
    },
    verticalCenter: {
      justifyContent: "center",
      width: "90%",
      height: "90%",
    },
    lettersContainer: {
      flex: 6,
      backgroundColor: "white",
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
      backgroundColor: "#8248D7",
      width: windowWidth * 0.125,
      height: windowWidth * 0.125,
      borderRadius: 7.5,
    },
    auroraContainer: {
      flex: 5,
      backgroundColor: "lightgreen",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    letterBoxContainer: {
      flex: 1,
      maxWidth: "10%",
      maxHeight: "90%",
      marginHorizontal: "2%",
    },
    letterBox: {
      flex: 8,
      justifyContent: "center",
      alignItems: "center",
      borderColor: "#D4E1F4",
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
      maxHeight: "45%",
      justifyContent: "center",
      alignItems: "center",
    },
    selectLetterBoxBorder: {
      flex: 1,
      maxWidth: "12.5%",
      height: "90%",
      backgroundColor: "#D0B0FF",
      marginHorizontal: "3%",
      marginVertical: "2%",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 5,
      shadowColor: hex.black.black1,
      shadowOffset: {
          width: 0,
          height: 4,
      },
      shadowOpacity: 0.30,
      shadowRadius: 4.65,
      elevation: 6,
    },
    selectLetterBoxBorderHidden: {
      display: "none",
      flex: 1,
      maxWidth: "12.5%",
      height: "90%",
      marginHorizontal: "3%",
      marginVertical: "2%",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 5,
    },
    hiddenLetter: {
      fontSize: windowWidth * 0.05,
      fontFamily: "FontBold",
      display: "none",
    },
    characterContainer: {
      minHeight: 117,
      height: "80%",
      width: "20%",
    },
    textBox: {
      minHeight: 80,
      height: "50%",
      width: "50%",
      backgroundColor: "purple",
    },
    aurora: {
      flex: 1,
      width: "100%",
      resizeMode: "contain",
    }
  })
  