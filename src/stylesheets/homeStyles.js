import { StyleSheet } from "react-native";
import { windowWidth } from "../util/windowDimensions";

const titleText = 0.05 * windowWidth;
const bodyText = 0.0335 * windowWidth;
const screenWidthThreshold = 800;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  format: {
    padding: 0,
  },
  main: {
    backgroundColor: "rgba(0, 0, 0, 0.45)",
    display: "flex",
    height: "100%",
    alignItems: "center",
  },
  topBox: {
    backgroundColor: "#FFFFFF",
    borderColor: "#89AAFF",
    borderRadius: 6,
    borderStyle: "solid",
    borderWidth: 2,
    height: "12.5%",
    marginTop: windowWidth > screenWidthThreshold ? "15%" : "25%",
    width: "85%",
  },
  topBoxTextName: {
    color: "#000000",
    fontSize: titleText,
    fontFamily: "FontReg",
    marginTop: "3%",
    marginHorizontal: "5%",
  },
  topBoxText: {
    color: "#000000",
    fontSize: bodyText,
    fontFamily: "FontReg",
    marginHorizontal: "5%",
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
    backgroundColor: "#FFFFFF",
    borderColor: "#89AAFF",
    borderRadius: 6,
    borderStyle: "solid",
    borderWidth: 2,
    height: "14%",
    marginTop: "7%",
    width: "85%",
  },
  bottomBoxTextName: {
    color: "#000000",
    fontSize: titleText,
    fontFamily: "FontReg",
    fontWeight: "800",
    marginTop: 4,
    marginHorizontal: "5%",
    textAlign: "center",
  },
  bottomBoxTextDescription: {
    color: "#000000",
    fontSize: bodyText,
    fontFamily: "FontReg",
    marginHorizontal: "3%",
    textAlign: "center",
  },
  nav: {
    backgroundColor: "#8AABFF",
    height: 77,
    width: "100%",
    position: "absolute",
    bottom: 0,
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
});

export default styles;
