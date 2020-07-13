import { StyleSheet } from 'react-native';
export default  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5EB262',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        marginTop: '-10%',
        marginBottom: '5%',
        fontFamily: 'Avenir',
        fontSize: 18,
        color: 'white',
        fontWeight: '900',
        lineHeight: 20,
        width:300,
        fontSize: 23,
        paddingTop: 10
    }, 
    image:{
        position: 'absolute',
        top:'22%', 
        left: '22.2%',
    }
    ,
    leftArrow: {
        position: 'absolute', 
        top: '62%', 
        left: '15%'

    },
    rightArrow: {
        position: 'absolute', 
        top: '62%', 
        right: '15%'
    }
})
