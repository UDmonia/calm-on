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
    height: 213,
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
  },
  question: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontSize: 14,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 17,
  },
})

export default styles;