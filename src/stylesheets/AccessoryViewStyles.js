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
    flex: 4,
    display: 'flex',
    width: '100%',
    borderWidth: 1
  },

  toggle: {
    width: '100%',
    display: 'flex',
    flex: 1,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  categories: {
    width: '100%',
    flex: 1,
    borderWidth: 1,
    display: 'flex',
  },

  category: {
    borderWidth: 1,
    borderRadius: 20,
    paddingTop: 8,
    paddingLeft: 15,
    paddingRight: 20,
    borderColor: '#A5DFF0',
    marginLeft: 15,
    height: '65%',
  },

  grid: {
    width: '100%',
    flex: 5.5,
    borderWidth: 1,
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
  }


})

export default styles