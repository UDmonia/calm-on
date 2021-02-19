import { StyleSheet } from "react-native";
import { windowWidth } from "../util/windowDimensions";
import { screenWidthThreshold } from "../util/thresholds";
//all height percent should add up to 100%
const titleText = 0.065 * windowWidth;
const cloudText = 0.035 * windowWidth;
const dirText = 0.03 * windowWidth;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  breatheSteps: {
    alignItems: "center", // Secondary axis
  },
  row: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    height: '100%',
    width: '100%',
    overflow: "visible",
  },
  slideTitle: {
    fontSize: titleText,
  },
  titleContainer: {
    marginTop: "5%",
    marginBottom: "10%",
    flexDirection: 'row',
    flexShrink: 1,
  },
  cloud: {
    justifyContent: "center",
    alignSelf: "flex-end",
    marginRight: '12%',
    marginTop: '10%',
    height: "12%",
    width: "40%",
  },
  txt: {
    textAlign: "center",
    color: "white",
    flexShrink: 1,
    fontSize: cloudText,
  },
  zeroProgress: {
    height: 6,
    width: 300,
  },
  txtCloudContainer: {
    textAlign: "center",
    width: "60%",
    flexDirection: 'row',
    flexShrink: 1,
  },
  progressText: {
    // marginTop: 25,
    // marginBottom: 15,
    marginTop: "4%",
    marginBottom: "3%",
    alignSelf: "flex-start",
    marginLeft: 55,
  },
  exitContainer: {
    height: '8%',
    width: "100%",
    alignSelf: "flex-start",
    justifyContent: "center",
    paddingLeft: '5%',
  },
  characterView: {
    marginTop: '2%',
    height: "40%",
    width: "40%",
  },
  dirText:{
    width: "80%",
    textAlign: "center", 
    fontSize: dirText,
  } 
});

export default styles;
