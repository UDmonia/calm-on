import { StyleSheet } from 'react-native';
import hex from "./hexCodes";

const styles = StyleSheet.create({
  main: {
    backgroundColor: hex.green.storytimeBackground,
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  btn: {
    position: 'relative',
    left: -2,
    width: 320,
    height: 114,
    marginVertical: '5%',
  },
  btn2: {
    position: 'relative',
    left: -2,
    width: 320,
    height: 120,
    marginVertical: '5%',
  },
  btn1: {
    position: 'relative',
    left: -6,
    width: 332,
    height: 120,
    marginTop: '15%',
    marginBottom: '5%',
  }
})

export default styles;