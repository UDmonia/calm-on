import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

let screenWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
  },
  chosenCharacter: {
    height: "40%",
    resizeMode: "contain",
    marginTop: "25%",
  },
  activityBtn: {
    alignSelf: "flex-end",
  },
  activityBtnContainer: {
    width: "90%",
  },
  chatContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "30%",
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
  },
  top: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    minHeight: 50,
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
    width: "80%",
    marginHorizontal: (screenWidth - 330) / 2,
    alignSelf: "baseline",
  },
  bottom: {
    marginTop: 10,
    borderBottomEndRadius: 10,
    width: "100%",
    display: "flex",
    alignItems: "center",
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
    marginBottom: "5%",
  },
});
