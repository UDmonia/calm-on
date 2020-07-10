import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
  },
  main: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    display: 'flex',
    height: '100%',
    alignItems: 'center',
  },
  sprite: {
    position: 'absolute',
    right: 0,
    top: '34%',
    width: 187,
    height: 333,
  },
  box: {
    backgroundColor: '#FBBDB4',
    borderRadius: 10,
    // height: 213,
    minHeight: 200,
    width: 330,
    position: 'absolute',
    marginHorizontal: (screenWidth - 330) / 2,
    bottom: '5%',
  },
  top: {
    backgroundColor: '#DD6755',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 71,
    width: '100%',
  },
  bottom: {
    borderBottomEndRadius: 10,
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  question: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontSize: 14,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 17,
  },
  answer1: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    height: 35,
    width: 284,
    textAlign: 'center',
    marginVertical: '5%',
  },
  answer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    fontSize: 14,
    height: 35,
    width: 284,
    textAlign: 'center',
    marginBottom: '5%',
  },
  a: {
    fontFamily: 'Avenir',
    fontWeight: '800',
    textAlign: 'center',
    lineHeight: 34,
  }
})

export default styles;