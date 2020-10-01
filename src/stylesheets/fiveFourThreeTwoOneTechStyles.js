import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  breatheSteps: {
    alignItems: "center", // Secondary axis
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    flexDirection: "row",
    height: 86,
    width: 160,
  },
  slideTitle: {
    fontSize: 24,
  },
  titleContainer: {
    marginTop: 40,
    marginBottom: 50,
  },
  cloud: {
    justifyContent: "center",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 14,
    height: 86,
    width: 160,
  },
  txt: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
  },
  zeroProgress: {
    flexDirection: "row",
    // height: 86,
    // width: 160,
  },
});

export default styles;
