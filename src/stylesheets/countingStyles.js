import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import hex from "./hexCodes";
import { windowHeight } from "../util/windowDimensions";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: hex.grey.grey2,
  },
  backImage: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
  },
  fruitZone: {
    position: "absolute",
    top: windowHeight * 0.225,
    width: "100%",
    height: "40%",
  },
  fruit: {
    position: "absolute",
    width: 31,
    height: 36,
  },
  sprit: {
    resizeMode: "contain",
    height: "100%",
  },
  spritBox: {
    position: "absolute",
    top: windowHeight * 0.65,
    height: "20%",
    alignSelf: "flex-start",
  },
  spritBox2: {
    position: "absolute",
    top: windowHeight * 0.35,
    width: "80%",
    height: "35%",
    display: "flex",
    flexDirection: "row",
  },
  spritBox3: {
    position: "absolute",
    marginLeft: 10,
    marginRight: 10,
    top: 200,
    width: 300,
    height: 200,
    alignItems: "flex-end",
  },
  textBox: {
    position: "absolute",
    top: windowHeight * 0.85,
    height: "10%",
    width: "80%",
    borderRadius: 5,
    padding: 10,
    backgroundColor: hex.green.green1,
    alignItems: "center",
    justifyContent: "center",
  },
  textBox2: {
    height: 82,
    width: 300,
    borderRadius: 5,
    padding: 10,
    backgroundColor: hex.green.green1,
    alignItems: "center",
    justifyContent: "center",
  },
  itemBoxes: {
    position: "absolute",
    width: "80%",
    height: "5%",
    top: windowHeight * 0.175,
  },
  itemBox: {
    height: windowHeight * 0.05,
    width: windowHeight * 0.05,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: hex.white.white1,
    margin: 1,
  },
  boxImg: {
    height: windowHeight * 0.05,
    width: windowHeight * 0.05,
    resizeMode: "contain",
  },
  countDis: {
    position: "absolute",
    height: 30,
    width: 100,
    top: windowHeight * 0.135,
    alignItems: "center",
    justifyContent: "center",
  },
  recpImgBox: {
    width: "60%",
    justifyContent: "center",
  },
  groupImg: {
    width: '100%',
    resizeMode: "contain",
  },
  nextButton: {
    width: 163,
    height: 51,
    borderRadius: 41,
    backgroundColor: hex.green.green1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
  },
  buttonView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 350,
    height: 51,
    marginTop: "5%",
  },
  navButton: {
    width: 163,
    height: 51,
    borderRadius: 41,
    margin: "2.5%",
    backgroundColor: hex.white.white1,
    justifyContent: "center",
    alignItems: "center",
  },
  fin: {
    position: "absolute",
    top: windowHeight * 0.7,
    width: "80%",
    height: "275%",
    alignItems: "center",
  },
  starting: {
    width: 350,
    height: 300,
    marginTop: 350,
    alignItems: "center",
  },
  exitPosition: {
    alignSelf: "flex-start",
    marginTop: "12.5%",
    marginLeft: "5%",
  },
  fruitImg: {
    height: windowHeight * 0.05,
    width: windowHeight * 0.05,
    resizeMode: "contain",
  },
  spritImgBox: {
    width: "40%",
    justifyContent: "flex-end",
  }
});
