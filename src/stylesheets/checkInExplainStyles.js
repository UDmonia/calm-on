import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  tmp: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center", // secondary axis
  },
  txtFeeling: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 15,
  },
  txtOptional: {
    textAlign: "center",
    fontSize: 14,
    color: "#8D8D8D",
    marginTop: 25,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 25,
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
  userNameInput: {
    padding: 10,
    backgroundColor: "#E7E7E7",
    borderRadius: 5,
    width: 305,
    height: 345,
    marginTop: 10,
  },
  feelingImg: {
    marginTop: 25,
    width: 88,
    height: 88,
  },
});

export default styles;
