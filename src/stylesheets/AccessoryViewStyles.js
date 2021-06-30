import { StyleSheet } from 'react-native';
import hex from "./hexCodes";

const styles = StyleSheet.create({
  main : {
    marginTop: '30%',
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    height: '100%',
    width: '100%',
  },

  previewContainer: {
    flex: 6,
    display: 'flex',
    width: '100%',
  },

  previewInnerContainer: {
    display: 'flex',
    flexDirection: 'row'
  },

  previewLeft: {
    flex:1,
    position: 'relative',
    height: 280,
    marginTop: '5%'
  },

  previewRight: {
    flex:1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  toggle: {
    width: '100%',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  categories: {
    width: '100%',
    flex: 1,
    display: 'flex',
    paddingTop: '2%'

  },

  category: {
    borderWidth: 1,
    borderRadius: 20,
    paddingTop: '3.5%',
    paddingLeft: 15,
    paddingRight: 20,
    borderColor: '#A5DFF0',
    marginLeft: 15,
    height: '65%',
  },

  grid: {
    width: '100%',
    flex: 5.5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    fontSize: 16,
    textAlign: 'center',
  },

  gridItem: {
    height: 97,
    width: 78,
    borderWidth: 1,
    borderRadius: 10,
    margin: '2%'
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

  gridContainer: {
    alignSelf: 'flex-start',
    marginLeft: 10
  },

  icon: {
    marginTop: '15%',
    marginLeft: '5%'
  },

  buyButton: {
    width: '85%',
    padding: '5%',
    backgroundColor: '#FDCB67',
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  previewText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  coinContainer: {
    marginBottom: '10%',
    padding: '5%',
    backgroundColor: 'white',
    width: '65%',
    borderRadius: 5
  },

  avatar: {
    width: '100%',
    height: '100%',
    top: 10,
    left: 5,
    position: 'absolute'
  }


})

export default styles