import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: { 
    flex: 1, flexDirection: "column" 
  },
  background: { 
    flex: 1, 
    resizeMode: "cover", 
    justifyContent: "flex-end" 
  }, 
  main: {
    backgroundColor: 'rgba(28, 28, 28, 0.3)',
    display: 'flex',
    height: '100%',
    alignItems: 'center',
  },
  fake: { 
    position: 'absolute', 
    top: 24,
    height: 180, 
    width: screenWidth - 15,
    resizeMode: 'contain',
    right: 8,
  },
})

export default styles;