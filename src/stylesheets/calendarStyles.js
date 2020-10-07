import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    format:{
        padding: 0,
    },

    background:{
        width: '100%',
        height: '100%'
    },
    main: {
        backgroundColor: 'rgba(0, 0, 0, 0.45)',
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        
      },
    calendar:{
        width:'92%',
        height:'100%',
        marginTop:'10%',
        borderRadius: 10,
        backgroundColor: 'white',
        paddingBottom: '10%'
    },
    toggle:{
        height: '12%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#873E25',
        borderTopRightRadius:10,
        borderTopLeftRadius:10
    },
    text: {
        fontSize: 20,
        color: 'white'
    },
    dates:{
        marginTop: '5%',
        height: '100%',
        //borderWidth:1
    },
    hangerLeft:{
        position:'absolute',
        left: '12%',
        top: '-20%'
    },
    hangerRight:{
        position:'absolute',
        right: '12%',
        top: '-20%'
    }
})

export default styles