import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  tmp: {
    backgroundColor: "white",
    alignItems: "center", // secondary axis
    flex: 1,
    minHeight: 800,
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
    marginTop: "10%",
    marginBottom: 33,
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
    borderWidth: 4,
    borderRadius: 25,
    borderColor: "#8AABFF",
    width: 130,
  },
  submitButton: {
    backgroundColor: "#8AABFF",
    borderRadius: 25,
    width: 150,
  },
  feelingImg: {
    marginTop: 25,
    width: 88,
    height: 88,
  },
});

export default styles;
