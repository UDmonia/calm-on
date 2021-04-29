import { StyleSheet } from 'react-native';
import hex from "./hexCodes";

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'column',
    margin: '5%',

  },

  field : {
    width: '100%',
    marginTop: '2%',
    marginBottom: '2%',
    display: 'flex',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  header : {
    fontSize: 20,
    fontWeight: '900',
    color : '#425054',
  },

  text: {
    fontSize: 16,
    color : '#425054',
    height: 40,
    paddingTop: 10
  },

  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',

  },

  button: {
    height: 51,
    width: 150,
    borderWidth: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
    borderColor: '#8AABFF',
    borderRadius: 43,
  },

  buttonText: {
    color: '#8AABFF',
    fontSize: 20,
    fontWeight: 'bold',
  }

});

export default styles;