import { StyleSheet } from 'react-native';

export default  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5EB262',
        // justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        marginTop: '5%',
        marginBottom: '5%',
        fontFamily: 'Avenir',
        fontSize: 18,
        color: 'white',
        fontWeight: '900',
        lineHeight: 20,
        width:300,
        fontSize: 23,
        paddingTop: 10,
    }, 
    paper: {
        position: 'absolute',
        top: '10%',
    },
    // image:{
    //     position: 'relative',
    //     top:'22%', 
    //     left: '22.2%',
    // },
    image0:{
        position: 'absolute',
        top:'22%', 
        left: '22.2%',
    },
    image1:{
        position: 'absolute',
        top:'22%', 
        left: '22.2%',
    },
    image2:{
        height: 400,
        width: 316,
        position: 'absolute',
        top:'22%', 
        left: '8.2%',
    },
    ear: {
        height: 60,
        width: 60,
        position: 'absolute',
        top: '40%',
        left: '54.2%',
    },
    image3:{
        height: 370,
        width: 258,
        position: 'absolute',
        top:'24%', 
        left: '21.2%',
    },
    image4:{
        height: 371,
        width: 276,
        position: 'absolute',
        top:'24%', 
        left: '18.2%',
    },
    leftArrow: {
        position: 'absolute', 
        top: '69%', 
        left: '15%'
    },
    rightArrow: {
        position: 'absolute', 
        top: '69%', 
        right: '15%'
    }
})
