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
    backgroundColor: "white",
  },
  scrollView: {
    backgroundColor: "white",
  },
  text: {
    fontSize: 12,
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
    marginTop: 35,
    marginBottom: 20,
  },
  wrap: {
    flexShrink: 1,
  },
  innerDesc: {
    marginHorizontal: 15,
  },
  outerDesc: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 15,
    marginVertical: 15,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    height: 115,
  },
  imgTitleContainer: {
    marginHorizontal: 12.5,
    marginVertical: 15,
  },
});

export default styles;
