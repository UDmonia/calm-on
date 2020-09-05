import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  feelingImg: {
    width: 88,
    height: 88,
  },
  row: {
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
  },
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: "white",
  },
  text: {
    fontSize: 15,
  },
  border: {
    borderWidth: 0.5,
    borderColor: "#E5E5E5",
  },
  feelingName: {
    textAlign: "center",
    fontSize: 16,
  },
  pageTitle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  wrap: {
    flexShrink: 1,
  },
  innerDesc: {
    marginHorizontal: 10,
  },
});

export default styles;
