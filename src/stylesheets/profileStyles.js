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
    margin: '5%',
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
    borderWidth: 3,
    paddingLeft: '10%',
    paddingRight: '10%',
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
  },

  input: {
    marginTop: '3%',
    marginBottom: '10%',
    width: '95%',
    backgroundColor: '#F1F6FA',
    height: 50,
    fontSize: 16,
    color : '#425054',
    paddingLeft: '5%',
    borderRadius: 5,
  },

  coachContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    height: 200,
  },

  coachContainerProfile: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    width: '100%'
  },

  authError: {
    color: 'red'
  },

  messageContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  message: {
    fontSize: 18,
    padding: 30,
  }

});


export default styles;