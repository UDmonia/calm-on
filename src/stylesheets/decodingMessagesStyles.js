import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../util/windowDimensions";
import hex from "./hexCodes";

export default StyleSheet.create({
    container: {
      height: "100%",
    },
    exitContainer: {
      flex: 2,
      backgroundColor: hex.white.white1,
      justifyContent: "center",
      paddingLeft: "5%",
      paddingTop: "8%",
    },
    exitButton:{
      width: 31,
    },
    messageContainer: {
      flex: 9,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: hex.white.white1,
    },
    verticalCenter: {
      justifyContent: "center",
      width: "90%",
      height: "90%",
    },
    lettersContainer: {
      flex: 6,
      backgroundColor: hex.white.white1,
      alignItems: "center",
      justifyContent: "center",
    },
    lineContainer2: {
      backgroundColor: hex.white.white1,
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
      backgroundColor: hex.white.white1,
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    keyButton: {
      marginRight: "5%",
      backgroundColor: hex.purple.aurora,
      width: windowWidth * 0.125,
      height: windowWidth * 0.125,
      borderRadius: 7.5,
      alignItems: "center",
      justifyContent: "center",
    },
    keyImage: {
      height: "70%",
      width: "70%",
      resizeMode: "contain",
    },
    auroraContainer: {
      flex: 5,
      backgroundColor: hex.white.white1,
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
      borderColor: hex.blue.blue8,
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
      flex: 1.25,
      backgroundColor: hex.purple.purple2,
      borderRadius: 10,
    },
    image: {
      flex: 7,
      marginTop: "10%",
      justifyContent: "center",
      alignItems: "center",
    },
    img: {
      height: "100%",
      width: "80%",
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
      backgroundColor: hex.purple.purple3,
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
      height: "65%",
      width: "70%",
      backgroundColor: hex.purple.aurora,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: "5%",
    },
    aurora: {
      flex: 1,
      width: "100%",
      resizeMode: "contain",
    },
    text: {
      color: hex.white.white1,
      fontFamily: "FontBold",
      fontSize: windowWidth * 0.035,
    },
    modalView: {
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      flex: 1,
      alignItems: "center",
    },
    modalExitButton: {
      alignSelf: "flex-end",
      marginRight: "5%",
      marginTop: "7%",
    },
    modalPictures: {
      flex: 1,
      marginTop: "5%",
      width: "100%",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    modalPictureBox: {
      backgroundColor: hex.grey.grey3,
      borderRadius: 5,
      height: "11%",
      width: "19%",
      margin: "1%",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: "2%",
    },
    modalImage: {
      flex: 2,
      resizeMode: "contain",
      width: "80%",
    },
    modalText: {
      flex: 1,
      color: "black",
      fontSize: windowWidth * 0.03,
      textAlign:"center",
    },
    finishedContainer: {
      backgroundColor: hex.white.white1,
      height: "33%",
      width: "100%",
      position: "absolute",
      top: windowHeight * 0.475,
      zIndex: 1,
      alignItems: "center",
      justifyContent: "space-around",
    },
    finishedText: {
      fontFamily: "FontBold",
      fontSize: windowWidth * 0.15,
    },
    finishedButton: {
      backgroundColor: hex.purple.aurora,
      height: "20%",
      width: "50%",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 25,
    },
    finishedButtonText: {
      color: hex.white.white1,
      fontFamily: "FontReg",
      fontSize: windowWidth * 0.05,
    }

  })
  