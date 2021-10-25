import { StyleSheet } from "react-native";
import { screenWidthThreshold } from "../util/thresholds";
const titleText = 0.05 * windowWidth;
const bodyText = 0.0335 * windowWidth;
import { Dimensions } from 'react-native';
import { windowHeight, windowWidth } from "../util/windowDimensions";
import hex from "./hexCodes";

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    height: 0.98*windowHeight
  },
  inner: {
    height: windowWidth > screenWidthThreshold ? "95%" : "90%",
  },
  imageTint: {
    backgroundColor: "rgba(0, 0, 0, 0.45)",
  },
  topBox: {
    backgroundColor: hex.white.white1,
    borderColor: hex.blue.blue1,
    borderRadius: 6,
    borderStyle: "solid",
    borderWidth: 2,
    alignSelf: "center",
    marginTop: windowWidth > screenWidthThreshold ? "15%" : "20%",
    width: "85%",
  },
  topBoxTextName: {
    fontSize: titleText,
    fontFamily: "FontReg",
    marginTop: "3%",
    marginHorizontal: "5%",
    color: hex.black.black1,
  },
  topBoxText: {
    color: hex.black.black1,
    fontSize: bodyText,
    fontFamily: "FontReg",
    marginHorizontal: "5%",
    marginBottom: "2%",
  },
  scroll: {
    display: "flex",
    alignItems: "center",
    width: windowWidth,
    marginTop: "2.5%",
    height: "40%",
  },
  spiritView: {
    alignItems: "center",
    width: windowWidth,
    height: "100%",
  },
  spirit: {
    height: "100%",
    resizeMode: "contain",
  },
  btn: {
    borderRadius: 6,
    width: 104,
    height: 40,
  },
  bottomBox: {
    backgroundColor: hex.white.white1,
    borderColor: hex.blue.blue1,
    borderRadius: 6,
    borderStyle: "solid",
    borderWidth: 2,
    marginTop: "3%",
    width: "85%",
    alignSelf: "center", // this is what makes the text box height adjust to the text
  },
  bottomBoxTextName: {
    color: hex.black.black1,
    fontSize: titleText,
    fontFamily: "FontReg",
    fontWeight: "800",
    marginTop: "2%",
    marginHorizontal: "5%",
    textAlign: "center",
  },
  bottomBoxTextDescription: {
    color: hex.black.black1,
    fontSize: bodyText,
    fontFamily: "FontReg",
    marginHorizontal: "3%",
    marginBottom: "2%",
    textAlign: "center",
  },
  nav: {
    backgroundColor: "#8AABFF",
    height: 84,
    width: "100%",
    position: "absolute",
    // bottom: 0,
  },
  navIcons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 50,
  },
  homeIcon: {
    height: 36,
    width: 36,
  },
  achieveIcon: {
    height: 36,
    width: 41,
  },
  profileIcon: {
    height: 40,
    width: 40,
  },
  currentSpiritText: {
    color: "#FFFFFF",
    fontSize: 28,
    fontFamily: "FontBold",
  },
  pickButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginStart: "8%",
    marginEnd: "8%",

    
    // flex: 1,
  },
  pickMeButton: {
    backgroundColor: "#8AABFF",
    height: "5%",
    minHeight: 40,
    minWidth: "32.5%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    marginTop: "5%",
  },
  pickMeText: {
    color: "white",
    fontFamily: "FontBold",
    fontSize: 18,
  },
});

export default styles;
