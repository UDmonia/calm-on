import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../util/windowDimensions";

export default StyleSheet.create({
  screenContainer: {
    flex: 1,
    height: "100%",
    width: "100%",
    fontFamily: "FontReg",
  },
  background: {
    flex: 4,
  },
  imgBackground: {
    resizeMode: "cover",
    width: "100%",
    height: "145%",
    top: undefined,
    bottom: 0,
  },
  exitPosition: {
    marginTop: "10%",
    marginLeft: "5%",
  },
  row: {
    flexDirection: "row",
    marginTop: 30,
  },
  locationContainer: {
    height: 0.2333 * windowWidth,
    width: "90%",
    borderRadius: 10,
    backgroundColor: "#027E2A",
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: {
    height: 0.2333 * windowWidth,
    width: 0.2333 * windowWidth,
    marginHorizontal: "5%",
    borderRadius: 5,
    backgroundColor: "#E9E9E9",
    alignItems: "center",
    justifyContent: "center",
  },
  imgSpirit: {
    height: "100%",
  },
  imgSpiritContainer: {
    height: "50%",
    alignSelf: "flex-start",
    marginLeft: "15%",
  },
  img: {
    height: "50%",
    width: "70%",
    resizeMode: "contain",
    margin: 5,
  },
  txtLetter: {
    color: "white",
    fontFamily: "FontBold",
    fontSize: windowWidth * 0.04,
  },
  basketContainer: {
    alignItems: "center",
    width: "100%",
    flex: 1.25,
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
    fontFamily: "FontBold",
    fontSize: windowWidth * 0.04,
  },
  seeAllTxt: {
    color: "white",
    fontFamily: "FontBold",
    fontSize: windowWidth * 0.04,
  },
  basket: {
    backgroundColor: "white",
    height: "10%",
    width: "100%",
  },
  basketItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  basketItem: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: windowWidth * 0.2,
    margin: 5,
  },
  itemName: {
    textAlign: "center",
    fontFamily: "FontReg",
    fontSize: windowWidth * 0.03,
  },
  itemDivider: {
    backgroundColor: "#027E2A",
    height: "80%",
    width: 1,
  },
  center: {
    flex: 1,
    marginTop: "10%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imgText: {
    position: "absolute",
    bottom: 0,
    fontFamily: "FontBold",
    fontSize: windowWidth * 0.03,
  },
  selectImg: {
    height: "60%",
    width: "70%",
    resizeMode: "contain",
  },
  doneButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    height: 25,
    marginLeft: -90,
    width: 180,
    zIndex: 3,
    shadowOffset: {
      width: 3,
      height: 6,
    },
    shadowOpacity: 10,
    shadowRadius: 15,
    elevation: 2, // Android
  },
});
