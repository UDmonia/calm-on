import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  breatheSteps: {
    alignItems: "center", // Secondary axis
    marginTop: 30,
    marginBottom: 50,
  },
  row: {
    flexDirection: "row",
  },
  verticalTxt: {
    transform: [{ rotate: "90deg" }],
  },
  meditationImg: {},
  subtitles: {
    fontWeight: "bold",
    marginVertical: 10,
  },
  bodyText: {
    marginLeft: 15,
  },
  subsectionTitle: {
    marginBottom: 10,
  },
  startSection: {
    marginTop: 175,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  breathTxt: {
    marginVertical: 5,
  },
  startButton: {
    backgroundColor: "#2E7D32",
    height: 51,
    width: 183,
    borderRadius: 41,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
