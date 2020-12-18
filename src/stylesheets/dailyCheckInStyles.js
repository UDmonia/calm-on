import { StyleSheet } from "react-native";
import hex from "./hexCodes";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center", // secondary axis
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
    color: hex.blue.dayIconBackground,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 50,
  },
  buttons: {
    width: 126,
    height: 44,
    marginHorizontal: 15,
  },
  buttonCancel: {
    flex: 1,
    height: undefined,
    width: undefined,
    resizeMode: "contain",
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
