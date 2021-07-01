import { StyleSheet } from 'react-native';
import hex from "./hexCodes";

const styles = StyleSheet.create({
  main : {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flex: 1
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
    margin: '3%',
    width: 165,
    height: 250,
    borderRadius: 20,
    backgroundColor: '#F5F8FA',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7

  },

  image: {
    height: '75%',
    width: '100%'
  },

  name: {
    textAlign: 'center'

  },

  nameContainer: {
    flex: 1.5,
    marginTop: '5%'
  },

  score: {
    paddingTop: '5%',
    textAlign: 'center',
    fontSize: 18
  },

  bottom: {
    height: '25%',
    display: 'flex',
    flexDirection: 'row',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#A5DFF0',
    paddingTop:'2%'
  },

  costContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'

  }
})

export default styles