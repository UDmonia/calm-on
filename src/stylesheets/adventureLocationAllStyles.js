import { StyleSheet } from "react-native";

export default StyleSheet.create({
  background: {
    flex: 1,
    flexWrap: "wrap",
    alignItems: "center",
    alignContent: "center",
  },
  exitContainer: {
    width: "100%",
    marginVertical: 50,
    marginLeft: "15%",
    alignSelf: "flex-start",
  },
  selectedItemsTxt: {
    color: "white",
    fontSize: 18,
    marginVertical: 5,
    fontFamily: "FontReg",
  },
  itemsTxt: {
    fontFamily: "FontReg",
  },
  allSelectedContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  itemContainer: {
    height: 89,
    width: 89,
    margin: 3,
    backgroundColor: "#E9E9E9",
    alignItems: "center",
    justifyContent: "center",
  },
  imgContainer: {
    height: 50,
    width: 50,
    resizeMode: "contain",
    margin: 3,
  },
});
