import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    width: '100%',
    height: '100%',
    
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold"
  },
  format: {
    padding: 0,
  },

  main: {
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    display: 'flex',
    height: '100%',
    alignItems: 'center',
  },
  topBox: {
    backgroundColor: '#FFFFFF',
    borderColor: '#89AAFF',
    borderRadius: 6,
    borderStyle: 'solid',
    borderWidth: 2,
    height: 108,
    marginTop: 106,
    width: 348,
  },
  topBoxTextName: {
    color: '#000000',
    fontSize: 24,
    fontFamily: 'Avenir',
    marginTop: 16,
    marginHorizontal: 16,
  },
  topBoxText: {
    color: '#000000',
    fontSize: 14,
    fontFamily: 'Avenir',
    marginHorizontal: 16,
  },
  scroll: {
    display: 'flex',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    marginTop: 20,
  },
  spirit: {
    width: 140,
    height: 250,
  },
  btn: {
    borderRadius: 6,
    position: 'relative',
    width: 104,
    height: 40,
    // top: 321,
    top: 20,
  },
  bottomBox: {
    backgroundColor: '#FFFFFF',
    borderColor: '#89AAFF',
    borderRadius: 6,
    borderStyle: 'solid',
    borderWidth: 2,
    height: 112,
    marginTop: '10%',
    width: 348,
  },
  bottomBoxTextName: {
    color: '#000000',
    fontSize: 24,
    fontFamily: 'Avenir',
    fontWeight: '800',
    marginTop: 4,
    marginHorizontal: 16,
    textAlign: 'center',
  },
  bottomBoxTextDescription: {
    color: '#000000',
    fontSize: 14,
    fontFamily: 'Avenir',
    marginHorizontal: 8,
    textAlign: 'center',
  },
  nav: {
    backgroundColor: '#8AABFF',
    height: 77,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  navIcons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 50,
  },
  homeIcon: {
    height: 36,
    width: 36,
  },
  achieveIcon: {
    height: 36,
    width: 41,
  },
  profileIcon: {
    height: 40,
    width: 40,
  }
})

export default styles;