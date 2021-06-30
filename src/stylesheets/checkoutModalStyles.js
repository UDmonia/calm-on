import { StyleSheet } from 'react-native';
import hex from "./hexCodes";

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 10,
    backgroundColor: 'white',
    marginTop: '10%',
    marginLeft: '3%',
    width: '95%',
    height: '92%'
  },

  closeButton: {
    position:'absolute',
    top: 10,
    left: 10,
    zIndex: 2
  },

  middle: {
    position: 'relative',
    marginTop: '20%',
    flex: 10,
    display: 'flex',
    flexDirection: 'row'
  },

  avatarContainer: {
    flex: 5,
    width: '100%',
    height: '100%',
    position: 'relative'
  },

  avatar: {
    width: 250,
    height: '100%',
    position: 'absolute'
  },


  message: {
    flex: 2,
    width: '55%'
  },

  itemList: {
    flex: 2,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#C0C7D2',
    marginRight: '2%'
  },

  text: {
    fontSize: 20,
    textAlign: 'center',
  },

  gridItem: {
    height: 97,
    width: 78,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: '3%'
  },

  gridItemTop: {
    height: '70%'
  },

  gridItemBottom: {
    backgroundColor: '#A5DFF0',
    height: '30%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },

  bottom: {
    height: '10%'
  },

  buyButton: {
    padding: 5,
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: 20,
    backgroundColor: '#FFC10E'
  },

  removeButton: {
    position: 'absolute',
    top: -12,
    right: -13
  },

  buttons: {
    padding: 5
  },

  icon: {
    marginTop: '15%',
    marginLeft: '5%'
  },




})

export default styles