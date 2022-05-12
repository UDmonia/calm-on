import { StyleSheet } from "react-native";
import hex from "./hexCodes";

const styles = StyleSheet.create({
  format: {
    padding: 0,
  },

  background: {
    width: "100%",
    height: "100%",
  },
  main: {
    backgroundColor: "rgba(0, 0, 0, 0.45)",
    display: "flex",
    alignItems: "center",
    height: "100%",
  },
  calendar: {
    width: "92%",
    height: "100%",
    marginTop: "10%",
    borderRadius: 10,
    backgroundColor: "white",
    paddingBottom: "10%",
  },
  toggle: {
    height: "12%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: hex.brown.brown3,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  text: {
    fontSize: 20,
    color: "white",
  },
  dates: {
    marginTop: "5%",
    paddingBottom: "10%",
  },
  date: {
    fontFamily: "FontReg",
    fontWeight: "800",
    fontSize: 20,
    marginLeft: "3%",
    marginBottom: "2%",
    marginTop: "1.5%",
  },
  hangerLeft: {
    position: "absolute",
    left: "12%",
    top: "-20%",
  },
  hangerRight: {
    position: "absolute",
    right: "12%",
    top: "-20%",
  },
  toggleTextWhite: {
    fontSize: 20,
    fontFamily: "FontReg",
    color: "white",
  },
  toggleTextBlack: {
    fontSize: 20,
    fontFamily: "FontReg",
    color: "black",
  },
  highlighted: {
    width: 105,
    height: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  notHighlighted: {
    width: 105,
    height: "100%",
    backgroundColor: null,
    alignItems: "center",
    justifyContent: "center",
  },
  feelingContainer: {
    paddingLeft: "8%",
    paddingBottom: "10%",
  },
  addFeelings: {
    backgroundColor: "#edf2f4",
    height: 110,
    width: "92%",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  feelingText: {
    fontSize: 15,
  },

  emptyList: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  emptyText: {
    fontSize: 23,
  },
});

export default styles;
