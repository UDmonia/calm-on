import hex from "./hexCodes";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: "center",
  },
  imgPosition: {
    marginLeft: -50,
  },
  greetingTxt: {
    margin: 10,
    color: "white",
  },
  row: {
    flexDirection: "row",
  },
  locationContainer: {
    height: 105,
    width: 105,
    margin: 10,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: hex.blue.blue3,
  },
  dialogContainer: {
    height: 71,
    width: 330,
    borderRadius: 10,
    backgroundColor: hex.brown.brown1,
  },
  locationTxt: {
    marginTop: 5,
    textAlign: "center",
  },
});
