import { StyleSheet } from 'react-native';
export default  StyleSheet.create({
    background:{
      resizeMode:'cover',
      tintColor: 'cyan',
      flex:1
    },
    container: {
      flex: 1,
    },
    innerContainer: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.60)'
    },
    logo: {
      marginTop: 40,
      alignItems: 'center',
      height: 210,
      //borderWidth:2
    },
    buttonGroup: {
      flexDirection: 'row',
      //borderWidth:1,
      height: 60,
      alignContent: 'center',
      justifyContent: 'center',
      padding: 10
    },
    topButtons: {
      borderColor: '#8161B2',
    },
    topButtonText: {
      fontSize: 25,
      color: 'white'
    },
    bottomButton: {
      alignItems: 'center',
      justifyContent: 'center',
      height:40,
      width: 80,
      marginLeft: 'auto',
      marginRight: 'auto',
      borderRadius: 5,
      backgroundColor: '#E1EAFF'
    },
    form: {
      //borderWidth: 2,
      padding: 10,
      paddingBottom: 50,
      paddingTop: 40
    },
    input: {
      borderColor: 'grey',
      backgroundColor: 'white',
      height: 40,
      borderRadius: 5,
      fontSize: 18,
      padding: 10,
      width: 345
    },
    inputAndIcon: {
      flexDirection:'row', 
      justifyContent:'space-between', 
      alignItems:'center',
      marginBottom: 14,
      paddingLeft: 7,
      paddingRight: 10
    },
    description: {
      fontSize: 18,
      color:'white',
      marginLeft: 45,
      marginBottom: 2
    },
    image: {
      width: 275,
      height:172
    },
    icons: {
    }
  });
  