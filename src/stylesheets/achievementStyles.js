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
    width: windowWidth,
    marginTop: "2.5%",
    height: "40%",
  },

  
});
  export default styles;