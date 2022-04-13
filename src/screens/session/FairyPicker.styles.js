import { StyleSheet } from "react-native";
import { screenWidthThreshold } from "../../util/thresholds";
const titleText = 0.05 * windowWidth;
const bodyText = 0.038 * windowWidth;
import { windowWidth } from "../../util/windowDimensions";
import hex from "../../stylesheets/hexCodes";

const styles = StyleSheet.create({
  inner: {
    paddingTop: "10%",
    height: windowWidth > screenWidthThreshold ? "95%" : "90%",
  },
  imageTint: {
    backgroundColor: "rgba(0, 0, 0, 0.45)",
  },
  viewTitleContainer: {
    marginTop: "2%",
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  viewTitle: {
    color: "#FFFFFF",
    fontSize: 28,
    fontFamily: "FontBold",
  },
  scroll: {
    display: "flex",
    alignItems: "center",
    width: windowWidth,
    marginTop: "2.5%",
    height: "50%",
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
    width: "88%",
    alignSelf: "center",
    padding: "3%",
    paddingLeft: "1%",
    paddingRight: "1%",
  },
  bottomBoxTextName: {
    color: hex.black.black1,
    fontSize: titleText,
    fontFamily: "FontReg",
    fontWeight: "800",
    textAlign: "center",
  },
  bottomBoxTextDescription: {
    color: hex.black.black1,
    fontSize: bodyText,
    fontFamily: "FontReg",
    textAlign: "center",
  },
  nav: {
    backgroundColor: "#8AABFF",
    height: 84,
    width: "100%",
    position: "absolute",
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
    textAlign: "center",
  },
  pickButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginStart: "8%",
    marginEnd: "8%",
    marginTop: "10%",
    marginBottom: "5%",
  },
  pickMeButton: {
    backgroundColor: "#8AABFF",
    height: "7%",
    minHeight: 40,
    minWidth: "40.5%",
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
