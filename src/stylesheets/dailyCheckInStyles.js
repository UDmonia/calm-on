import { StyleSheet } from "react-native";
import hex from "./hexCodes";

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    alignItems: "center", // secondary axis
    paddingBottom: "10%",
    flex: 1,
    minHeight: 800,
  },
  txtQuestion: {
    marginTop: 40,
    textAlign: "center",
    fontSize: 20,
  },
  txtInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    textAlign: "center",
    fontSize: 16,
    color: hex.blue.blue1,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: "10%",
    height: 57,
  },
  buttons: {
    display: "flex",
    marginHorizontal: "5%",
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  cancelButton: {
    borderColor: "#8AABFF",
    borderWidth: 4,
    borderRadius: 25,
    width: 130,
  },
  cancelButtonText: {
    color: "#8AABFF",
    fontFamily: "FontReg",
    fontSize: 18,
  },
  continueButton: {
    backgroundColor: "#8AABFF",
    borderRadius: 25,
    width: 150,
  },
  continueButtonText: {
    color: "white",
    fontFamily: "FontReg",
    fontSize: 18,
  },
  feelingContainer: {
    marginTop: 50,
    marginHorizontal: 45,
    alignItems: "center",
    textAlign: "center",
  },
  feelingImg: {
    width: 88,
    height: 88,
  },
  feelingImgScared: {
    width: 90,
    height: 88,
  },
  feelingTxt: {
    fontSize: 16,
    marginTop: 15,
  },
  row: {
    flexDirection: "row",
  },
});

export default styles;
