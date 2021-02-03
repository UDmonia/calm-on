import { StyleSheet } from 'react-native';
import hex from "./hexCodes";

export default  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: hex.green.mindfulnessBackground,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        marginTop: '5%',
        marginBottom: '5%',
        fontFamily: 'FontReg',
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
    text1: {
        color: 'white',
        fontFamily: 'FontReg',
        fontSize: 16,
        position: 'absolute',
        width: 150,
        top: 170,
        left: 184,
    },
    text2: {
        fontFamily: 'FontReg',
        fontSize: 18,
        position: 'absolute',
        width: 150,
        textAlign: 'center',
        fontWeight: '800',
        top: 490,
    },
    bigSqueezeAngry: {
        position: 'absolute',
        top: 110,
        fontFamily: 'FontReg',
        fontSize: 20,
        fontWeight: '800',
        width: 150,
        textAlign: 'center',
    },
    imageBigSqueeze0: {
        height: 365,
        width: 216,
        position: 'absolute',
        top: '26%', 
        left: '22.2%',
    },
    imageBigSqueeze1: {
        height: 387,
        width: 216,
        position: 'absolute',
        top:'26%', 
        left: '22.2%',
    },
    image0: {
        height: 371,
        width: 260,
        position: 'absolute',
        top:'24%', 
        left: '22.2%',
    },
    image1: {
        height: 371,
        width: 260,
        position: 'absolute',
        top:'24%', 
        left: '22.2%',
    },
    image2: {
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
    image3: {
        height: 370,
        width: 258,
        position: 'absolute',
        top:'24%', 
        left: '21.2%',
    },
    image4: {
        height: 371,
        width: 260,
        position: 'absolute',
        top: '24%', 
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
