import { StyleSheet } from 'react-native';
import hex from "./hexCodes";

const styles = StyleSheet.create({

  container :{
    height: '100%',
    backgroundColor:'white'
  },

  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor:'#A5DFF0',
    height: '10'
  },
  fieldContainer: {
    width: '100%',
  },

  fieldContainer: {
    width: '100%',
  },

  field : {
    width: '100%',
    marginTop: '2%',
    marginBottom: '2%',
    display: 'flex',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header : {
    fontSize: 20,
    fontWeight: '900',
    color : '#425054',
    width: '95%',
    marginTop: '5%',
   },
   
   scroll: {
    display: "flex",
    alignItems: "center",
    marginTop: "2.5%",
    height: "40%",
  },

  tabContainer: {
    display: "flex",
    flexDirection: "row",
    height: 100,
    width: "40%",
    backgroundColor: "#BBBBBB",
    marginTop: 10,
    marginBottom: 10,
    //paddingRight: 30,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: hex.black.black1,
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 6,
    marginLeft:10,
},

cashContainer: {
  display: "flex",
  flexDirection: "row",
  height: 100,
  width: "95%",
  backgroundColor: "#FFC10E",
  marginTop: 10,
  marginBottom: 10,
  //paddingRight: 30,
  justifyContent: "space-evenly",
  alignItems: "center",
  borderRadius: 10,
  shadowColor: hex.black.black1,
  shadowOffset: {
      width: 0,
      height: 4,
  },
  shadowOpacity: 0.30,
  shadowRadius: 4.65,
  elevation: 6,
  marginLeft:10,
},

btnContainer:{
  marginTop: 30,
  // marginLeft: 16,
  width: '140%',
  maxHeight: 120,
  backgroundColor: 'white',
  flexDirection: "row",
},
  

  
});
  export default styles;