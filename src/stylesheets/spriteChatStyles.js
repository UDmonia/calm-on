import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import hex from "./hexCodes";

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
  sendMessage: { 
    height: 55, 
    backgroundColor: hex.grey.grey3, 
    justifyContent: "center", 
    alignItems: 'center', 
    flexDirection: 'row',
  },
  sendMessageBox: { 
    width: '80%', 
    height: 33, 
    backgroundColor: 'white', 
    borderRadius: 20, 
    paddingLeft: '5%', 
    fontSize: 16, 
    marginRight: '7%',
    position: 'relative',
    left: 10, 
  },
  sendMessageBtn: {
    position: 'absolute', 
    top: 1,
    right: 24,
    height: 24,
    width: 24,
  },
  downBtn: {
    height: 28,
    width: 28,
  },
  optionBox: { 
    height: 200, 
    backgroundColor: hex.green.green1, 
  },
  optionBoxItems: { 
    flexDirection: 'row', 
    justifyContent: 'space-evenly', 
    alignItems: 'center', 
    marginTop: 10,
    // padding: '8%' 
  },
  storytimeBtn: { 
    marginTop: '10%',
    height: 109,
    width: 106,
  },
  mindfulnessBtn: {
    height: 122,
    width: 118,
  },
  achievementBtn: { 
    marginHorizontal: (screenWidth - 192) / 2, 
    marginTop: 14,
    height: 30,
    width: 192,
  }
})

export default styles;