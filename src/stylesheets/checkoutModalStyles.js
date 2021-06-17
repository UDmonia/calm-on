import { StyleSheet } from 'react-native';
import hex from "./hexCodes";

const styles = StyleSheet.create({
  main : {
    position:'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    top: 10,
    zIndex: 2,
    width: '95%',
    height: '95%',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white'
  },

  closeButton : {
    position:'absolute',
    top: 10,
    left: 10
  }
})

export default styles