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
    justifyContent: "center",
    textAlign: "center",
    height: 103,
    width: 192,
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
    alignSelf: "flex-end",
    marginRight: 50,
    marginTop: 75,
    fontSize: 14,
    height: 103,
    width: 192,
  },
  txt: {
    textAlign: "center",
    color: "white",
    fontSize: 14,
  },
  zeroProgress: {
    height: 6,
    width: 300,
  },
  txtCloudContainer: {
    alignSelf: "center",
    width: 150,
  },
  progressText: {
    marginTop: 25,
    marginBottom: 15,
    alignSelf: "flex-start",
    marginLeft: 55,
  },
});

export default styles;
