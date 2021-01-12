import { StyleSheet, Dimensions } from "react-native";
import hex from "./hexCodes";

export default StyleSheet.create({
  background: {
    resizeMode: "cover",
    tintColor: "cyan",
    flex: 1,
  },
  container: {
    flex: 1,
  },
  innerContainer: {
    display: "flex",
    backgroundColor: "rgba(0,0,0,0.60)",
    minHeight: 0,
  },
  logo: {
    marginTop: "5%",
    alignItems: "center",
    height: "67%",
    resizeMode: "contain",
    //borderWidth:2
  },

  buttonGroup: {
    flexDirection: "row",
    //borderWidth:1,
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  topButtons: {
    borderColor: hex.purple.purple2,
  },
  topButtonText: {
    fontSize: 25,
    color: "white",
    fontFamily: "FontReg"
  },
  bottomButton: {
    backgroundColor: "#8AABFF",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 130,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 25,
  },
  bottomButtonText: {
    color: "white",
    fontFamily: "FontReg",
    fontSize: 20,
  },
  form: {
    //borderWidth: 2,
    padding: "1.8%",
    paddingBottom: "11%",
  },
  input: {
    //borderColor: 'grey',
    backgroundColor: "white",
    height: 40,
    borderRadius: 5,
    fontSize: 18,
    padding: "2%",
    width: "90%",
  },
  inputAndIcon: {
    //borderWidth: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "4%",
    paddingLeft: "2%",
    paddingRight: "3%",
    width: "100%",
  },
  description: {
    fontFamily: "FontReg",
    fontSize: 18,
    color: "white",
    marginLeft: "12%",
    marginBottom: "1%",
  },
  image: {
    width: "70%",
    height: "90%",
  },
  label: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  error: {
    fontFamily: "FontReg",
    fontVariant: ["small-caps"],
    fontSize: 16,
    color: "red",
    marginLeft: "2%",
    marginBottom: "1%",
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "FontReg"
  },
  userNameBodyText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 5,
  },
  userNameDialog: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 30,
  },
  nextButton: {
    marginTop: "15%",
  },
  userNameCard: {
    height: 166,
    width: 300,
    backgroundColor: "white",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  userNameInput: {
    padding: 10,
    backgroundColor: hex.grey.grey2,
    borderRadius: 5,
    width: 219,
    textAlign: "center",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  topContainer: {
    display: "flex",
    height: 275,
  },
  test: {
    paddingBottom: "20%",
  },
});
