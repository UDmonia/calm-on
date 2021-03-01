import { StyleSheet } from "react-native";
import hex from "./hexCodes";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  date: {
    fontSize: 20,
    marginTop: "8%",
    marginBottom: "8%",
    width: "80%",
    textAlign: "center",
  },
  upper: {
    display: "flex",
    width: "90%",
    //borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2%",
  },
  journal: {
    marginTop: "5%",
    fontSize: 18,
  },
  journalTitle: {
    marginTop: "2%",
    fontSize: 23,
    fontWeight: "bold",
  },
  bolded: {
    fontWeight: "bold",
  },
  lower: {
    //borderWidth:1,
    marginTop: "10%",
    width: "100%",
    marginBottom: "15%",
  },
  activities: {
    marginTop: "5.5%",
    marginBottom: "20%",
    //borderWidth:1,
  },
  option: {
    width: 155,
    height: 118,
    borderWidth: 1,
  },
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
    height: "100%",
    alignItems: "center",
  },
  calendar: {
    width: "90%",
    height: "100%",
    marginTop: "10%",
    borderRadius: 10,
    backgroundColor: "white",
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
  timeList: {
    display: "flex",
    flexDirection: "row",
    marginTop: "2%",
    marginBottom: "8%",
  },
  times: {
    borderWidth: 1,
    height: 33,
    width: 75,
    borderRadius: 5,
    borderColor: hex.grey.grey3,
    marginHorizontal: 10,
  },
  timeActive: {
    borderWidth: 1,
    height: 33,
    width: 75,
    borderRadius: 5,
    backgroundColor: hex.yellow.yellow3,
    borderColor: hex.yellow.yellow1,
    marginHorizontal: 10,
  },

  timesText: {
    textAlign: "center",
    paddingTop: "8%",
    color: hex.grey.grey1,
  },
});

export default styles;
