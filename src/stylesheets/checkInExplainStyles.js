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
  questionContainer: {
    marginHorizontal: 40,
    marginVertical: 20,
    alignItems: "center",
  },
  question: {
    fontSize: 18,
  },
  toggleButton: {
    height: 55,
    width: 322,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
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
  feelingImg: {
    marginTop: 25,
    width: 88,
    height: 88,
  },
});

export default styles;
