import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#39565F",
    //alignItems: "center"
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  fruitZone: {
    position: "absolute",
    marginLeft: 10,
    marginRight: 10,
    top: 200,
    width: 400,
    height: 360,
    //backgroundColor: "black",
  },
  fruit: {
    position: "absolute",
    width: 31,
    height: 36,
  },
  sprit: {
    position: "absolute",
    width: 116,
    height: 213,
    marginLeft: -20,
    //marginTop: 13,
  },
  spritBox: {
    position: "absolute",
    marginLeft: 10,
    marginRight: 10,
    top: 575,
    width: 300,
    height: 200,
    //backgroundColor: "blue",
  },
  spritBox2: {
    position: "absolute",
    marginLeft: 10,
    marginRight: 10,
    top: 300,
    width: 300,
    height: 200,
    //backgroundColor: "blue",
  },
  textBox: {
    position: "absolute",
    //marginLeft: 10,
    //marginRight: 10,
    top: 775,
    height: 82,
    width: 300,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#3B96B3",
    alignItems: "center",
    justifyContent: "center",
  },
  textBox2: {
    //position: "absolute",
    //marginLeft: 10,
    //marginRight: 10,
    //top: 500,
    height: 82,
    width: 300,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#3B96B3",
    alignItems: "center",
    justifyContent: "center",
  },
  itemBoxes: {
    position: "absolute",
    width: 330,
    height: 48,
    top: 130,
    left: 40,
    //backgroundColor: "pink",
  },
  itemBox: {
    height: 48,
    width: 47,
    borderColor: "red",
    borderWidth: 1,
  },
  countDis: {
    position: "absolute",
    height: 30,
    width: 100,
    top: 100,
    //backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  pie: {
    position: "absolute",
    left: 90,
    top: 91,
  },
  nextButton: {
    width: 163,
    height: 51,
    borderRadius: 41,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
  buttonView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 350,
    height: 51,
    marginTop: 60,
    //backgroundColor: "blue",
  },
  navButton: {
    width: 163,
    height: 51,
    borderRadius: 41,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  fin: {
    width: 350,
    height: 300,
    //backgroundColor: "black",
    marginBottom: 58,
    alignItems: "center",
  },
});