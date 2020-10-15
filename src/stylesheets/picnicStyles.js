import { StyleSheet } from "react-native";

export default StyleSheet.create({
  background: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    marginTop: 30,
  },
  locationContainer: {
    height: 52,
    width: 300,
    borderRadius: 4,
    backgroundColor: "#DD6755",
  },
  itemContainer: {
    height: 105,
    width: 105,
    borderRadius: 4,
    margin: 10,
    backgroundColor: "#9AE7FF",
    alignItems: "center",
    justifyContent: "center",
  },
  imgSpirit: {
    height: 220,
    width: 125,
    marginTop: 100,
  },
  imgSpiritContainer: {
    width: 300,
    alignItems: "flex-start",
  },
  txtLetter: {
    color: "white",
  },
  basketContainer: {
    marginTop: 100,
    alignItems: "center",
    width: "100%",
  },
  basket: {
    backgroundColor: "#B4D7E2",
    height: 75,
    width: "100%",
  },
});
