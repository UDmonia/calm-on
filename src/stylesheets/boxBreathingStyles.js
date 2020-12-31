import { StyleSheet } from "react-native";
import {
  horizontalLength,
  horizontalPosition,
  bottomPosition,
  topPosition,
} from "../util/boxBreathingMeasurements";

const styles = StyleSheet.create({
  exitPosition: {
    marginTop: "12.5%",
    marginLeft: "5%",
  },
  numText: {
    color: "#064B5B",
    position: "absolute",
    top: bottomPosition - bottomPosition * 0.5,
    //borderWidth:1,
  },
  text: {
    position: "absolute",
    top: bottomPosition - bottomPosition * 0.57,
    fontFamily: "FontReg",
    //borderWidth:1,
  },
  introText: {
    position: "absolute",
    top: bottomPosition - bottomPosition * 0.45,
  },
  animatedText: {
    color: "#064B5B",
    fontSize: 120,
    fontFamily: "FontReg",
    textAlign: "center",
  },
  animatedText2: {
    color: "#064B5B",
    fontSize: 30,
    fontFamily: "FontBold",
    textAlign: "center",
  },
  questionBox: {
    backgroundColor: "#DD6755",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    padding: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    fontFamily: "FontReg",
  },
  answers: {
    width: "85%",
    textAlign: "center",
    backgroundColor: "white",
    marginTop: "2%",
    marginLeft: "7%",
    marginTop: "7%",
    borderRadius: 25,
    borderWidth: 3,
    borderColor: "#DD6755",
    paddingBottom: 8,
    paddingTop: 10,
    fontWeight: "800",
  },
  introContainer: {
    justifyContent: "center",
    alignContent: "center",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  prompt: {
    backgroundColor: "#FBBDB4",
    width: "75%",
    marginTop: bottomPosition + bottomPosition * 0.14,
    marginLeft: "12.5%",
    borderRadius: 10,
    paddingBottom: "5%",
  },
  bottomFrame: {
    position: "absolute",
    top: bottomPosition,
    left: horizontalPosition,
    borderWidth: 10,
    width: horizontalLength,
    //borderColor:'red',
    borderColor: "#429BAF",
    zIndex: 0,
  },

  coverLeft: {
    position: "absolute",
    top: topPosition,
    left: horizontalPosition,
    borderWidth: 10,
    height: horizontalLength,
    borderColor: "#429BAF",
    zIndex: 0,
  },
  barRight: {
    position: "absolute",
    top: topPosition,
    right: horizontalPosition,
    width: 10,
    borderWidth: 10,
    borderColor: "#064B5B",
    height: horizontalLength,
  },
  barTop: {
    position: "absolute",
    top: topPosition,
    left: horizontalPosition,
    width: horizontalLength,
    borderWidth: 10,
    borderColor: "#064B5B",
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  stats: {
    fontSize: 20,
    textAlign: "center",
    marginTop: "2%",
  },
  statType: {
    textAlign: "center",
    color: "#4F7947",
    width: 125,
    marginBottom: "5%",
  },
  statsRow: {
    marginTop: "5%",
    flexDirection: "row",
    marginLeft: "-2%",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
  startText: {
    textAlign: "center",
    fontSize: 18,
    color: "white",
  },
  start: {
    display: "flex",
    height: 50,
    width: 250,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2E7D32",
    marginTop: "10%",
    marginLeft: "15%",
  },
  er: {
    height: "40%",
  },
  lower: {
    backgroundColor: "white",
    height: "60%",
    width: "100%",
    paddingLeft: "5%",
    paddingTop: "8%",
  },
  sectionTitle: {
    fontSize: 20,
    paddingTop: "5%",
  },
  descriptions: {
    color: "#7B7B7B",
    paddingTop: "2%",
  },
  questionText: {
    color: "white",
    textAlign: "center",
    fontFamily: "FontReg",
  },
  answerText: {
    textAlign: "center",
    fontFamily: "FontReg",
  },
  exitBtn: {
    position: "absolute",
    top: "5%",
    left: "5%",
    zIndex: 14,
  },
  spriteIcon: {
    position: "absolute",
    zIndex: 5,
  },
  introStory: {
    position: "absolute",
    top: 20,
    zIndex: 12,
  },
});

export default styles;
