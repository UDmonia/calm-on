import { StyleSheet } from "react-native";

export default StyleSheet.create({
  background: {
    flex: 2.5,
    resizeMode: "contain",
    // height: "75%",
    // width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    marginTop: 30,
  },
  locationContainer: {
    height: 103,
    width: 340,
    borderRadius: 4,
    backgroundColor: "#027E2A",
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: {
    height: 105,
    width: 105,
    borderRadius: 4,
    margin: 10,
    backgroundColor: "#E9E9E9",
    alignItems: "center",
    justifyContent: "center",
  },
  imgSpirit: {
    height: 259,
    width: 134,
    marginTop: 40,
  },
  imgSpiritContainer: {
    width: 250,
    alignItems: "flex-start",
  },
  img: {
    height: 50,
    width: 50,
    resizeMode: "contain",
    margin: 5,
  },
  txtLetter: {
    color: "white",
  },
  basketContainer: {
    flex: 0.65,
    // height: "15%",
    // marginTop: 100,
    alignItems: "center",
    width: "100%",
    backgroundColor: "blue",
  },
  basket: {
    backgroundColor: "white",
    height: 75,
    width: "100%",
  },
  basketItem: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    height: 59,
    width: 95,
    margin: 5,
  },
});
