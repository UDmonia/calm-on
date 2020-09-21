import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const styles = StyleSheet.create({
  breatheSteps: {
    alignItems: "center", // Secondary axis
  },
  row: {
    flexDirection: "row",
  },
  verticalTxt: {
    transform: [{ rotate: "90deg" }],
  },
  meditationImg: {},
});

export default styles;
