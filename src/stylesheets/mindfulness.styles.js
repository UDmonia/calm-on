import { StyleSheet } from 'react-native';
import hex from './hexCodes';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: hex.green.mindfulnessBackground,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        fontFamily: 'FontReg',
        letterSpacing: -0.24,
        fontSize: 18,
        color: 'white',
        fontWeight: '800',
        lineHeight: 20,
        width: '65%',
        fontWeight: 'normal',
        marginTop: '-10%'
    },
    image: {
        marginTop: '8%'
    },
})