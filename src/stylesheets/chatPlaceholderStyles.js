import { StyleSheet } from "react-native";

export default StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  chosenCharacter: {
    height: "40%",
    resizeMode: "contain",
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
});
