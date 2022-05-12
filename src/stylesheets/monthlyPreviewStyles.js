import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    marginBottom: "5%",
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
  emptyList: {
    height: "75%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 23,
  },
});

export default styles;
