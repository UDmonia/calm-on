import { StyleSheet } from 'react-native';
import hex from "./hexCodes";

const styles = StyleSheet.create({
  main : {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },

  slider : {
    borderWidth: 1,
    borderColor: '#A5DFF0',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    top: 10,
    zIndex: 2,
    borderRadius: 10
  },

  textContainer: {
    padding: '2%',
    alignItems: 'center',
    width: '50%'
  },

  text: {
    fontSize: 16,
  },

  grid: {
    marginTop: '15%'
  },

  gridItem: {
    borderWidth: 1,
    margin: '4%',
    width: 160,
    height: 250,
    borderRadius: 20
  },

  image: {
    height: '75%',
    width: '100%'
  },

  name: {
    textAlign: 'center'

  },

  nameContainer: {
    width: '70%'
  },

  score: {
    width: '30%',
    paddingTop: '5%',
    textAlign: 'center',
    fontSize: 18
  },

  bottom: {
    height: '25%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#A5DFF0',
    paddingTop:'2%'
  }
})

export default styles