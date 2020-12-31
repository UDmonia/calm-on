import { StyleSheet } from "react-native";

export default StyleSheet.create({
  upper: {
    height: "40%",
  },
  lower: {
    backgroundColor: "white",
    height: "60%",
    width: "100%",
    paddingTop: "8%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  statsRow: {
    width: "100%",
    marginTop: "1%",
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  statType: {
    textAlign: "center",
    width: 125,
    marginBottom: "5%",
    fontFamily: "FontReg",
  },
  sectionTitle: {
    alignSelf: "flex-start",
    marginLeft: "3%",
    fontSize: 20,
    paddingTop: "5%",
    fontFamily: "FontBold",
    color: "#2E7D32",
  },
  descriptions: {
    alignSelf: "flex-start",
    marginLeft: "3%",
    color: "#7B7B7B",
    paddingTop: "2%",
    fontFamily: "FontReg",
  },
  start: {
    display: "flex",
    height: "12%",
    width: "45%",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "7.5%",
    },
  fav: {
    alignSelf: "center",
  },
  startText: {
    textAlign: "center",
    fontSize: 18,
    color: "white",
    fontFamily: "FontBold",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "FontReg",
  },
  stats: {
    fontSize: 20,
    textAlign: "center",
    marginTop: "2%",
    fontFamily: "FontReg",
  },
  img: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  border: {
    borderLeftWidth: 2,
    borderRightWidth: 2,
    width: "100%",
    borderColor: "#C4C4C4",
    alignItems: "center",
  },
  statData: { 
    width: "33%", 
    alignItems: "center" 
  },
});
