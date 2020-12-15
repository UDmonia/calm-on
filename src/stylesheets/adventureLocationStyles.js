import { StyleSheet } from "react-native";

export default StyleSheet.create({
  screenContainer: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    fontFamily: "FontReg",
  },
  background: {
    flex: 2.5,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
  },
  imgBackground: {
    resizeMode: "cover",
    flex: 1,
    width: "100%",
    height: "100%",
    top: undefined,
    overflow: "hidden",
  },
  exitPosition: {
    alignSelf: "flex-start",
    marginTop: "5%",
    marginBottom: "5%",
    left: "5%",
    top: "1%",
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
    shadowOffset: {
      height: -2,
    },
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
    fontFamily: "FontReg",
  },
  basketContainer: {
    flex: 0.65,
    alignItems: "center",
    width: "100%",
    backgroundColor: "blue",
  },
  seeAllContainer: {
    backgroundColor: "#027E2A",
    width: "100%",
    minHeight: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: "4%",
  },
  selectedItemTxt: {
    color: "white",
    fontFamily: "FontReg",
  },
  seeAllTxt: {
    color: "white",
    fontFamily: "FontReg",
  },
  basket: {
    backgroundColor: "white",
    height: 75,
    width: "100%",
  },
  basketItemContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 10,
  },
  basketItem: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    height: 59,
    width: 95,
    margin: 5,
  },
  itemName: {
    textAlign: "center",
    fontFamily: "FontReg",
  },
  itemDivider: {
    backgroundColor: "grey",
    height: 59,
    width: 1,
  },
});
