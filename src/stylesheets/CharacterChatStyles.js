import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

let screenWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
  },
  chosenCharacter: {
    height: "50%",
    resizeMode: "contain",
    marginTop: "25%",
  },
  activityBtn: {
    alignSelf: "flex-end",
  },
  activityBtnContainer: {
    width: "90%",
    minWidth: "90%",
  },
  chatContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    height: "30%",
    width: "90%",
    borderRadius: 10,
  },
  top: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    minHeight: 10,
    width: "100%",
  },
  question: {
    color: "#FFFFFF",
    fontFamily: "FontReg",
    fontSize: 14,
    fontWeight: "800",
    textAlign: "center",
    marginVertical: 17,
    marginHorizontal: 14,
  },
  box: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    width: "90%",
    marginHorizontal: (screenWidth - 340) / 2,
    alignSelf: "center",
    marginBottom: 10,
  },
  bottom: {
    marginTop: 10,
    width: "100%",
    display: "flex",
    alignItems: "center",
    alignSelf: "center",
  },
  a: {
    fontFamily: "FontReg",
    fontWeight: "800",
    textAlign: "center",
    lineHeight: 34,
  },
  answer: {
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 14,
    height: 35,
    width: 284,
    textAlign: "center",
    marginBottom: "2%",
  },
});
