import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  clockView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  clock: {
    fontSize: 20,
    marginHorizontal: "2%",
  },
  solutionView: {
    flex: 1,
    alignItems: "center",
  },
  textView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scoreText: {
    alignItems: "center",
  },
  score: {
    fontSize: 24,
    fontFamily: "FontBold",
  },
  markView: {
    height: "30%",
    marginBottom: "-5%",
    zIndex: 2,
  },
  solutionCard: {
    height: "45%",
    width: "55%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 4,
    overflow: "visible",
  },
  cardText: {
    fontFamily: "FontReg",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 30,
    textAlign: "center",
  },
  buttonView: {
    flex: 1,
    justifyContent: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "45%",
    width: "100%",
  },
  colorButton: {
    display: "flex",
    height: "100%",
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 4,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.75,
    shadowRadius: 4.65,
    elevation: 6,
  },
});
