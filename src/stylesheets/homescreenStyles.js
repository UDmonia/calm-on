import { StyleSheet } from 'react-native';

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