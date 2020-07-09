import { StyleSheet } from "react-native";
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
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.60)",
  },
  logo: {
    marginTop: "10%",
    alignItems: "center",
    height: "23%",
    //borderWidth:2
  },

  buttonGroup: {
    flexDirection: "row",
    //borderWidth:1,
    height: "7%",
    alignContent: "center",
    justifyContent: "center",
    padding: "3%",
  },

  topButtons: {
    borderColor: "#8161B2",
  },
  topButtonText: {
    fontSize: 25,
    color: "white",
  },
  bottomButton: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  form: {
    //borderWidth: 2,
    padding: "1.8%",
    paddingBottom: "11%",
    paddingTop: "10%",
  },
  input: {
    //borderColor: 'grey',
    backgroundColor: "white",
    height: 40,
    borderRadius: 5,
    fontSize: 18,
    padding: "3%",
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
    fontVariant: ["small-caps"],
    fontSize: 16,
    color: "red",
    marginLeft: "2%",
    marginBottom: "1%",
  },
});
