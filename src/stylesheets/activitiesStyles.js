import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "white",
    },
    btnContainer:{
        marginTop: 10,
        marginLeft: 16,
        width: 344,
        maxHeight: 32,
        borderColor: '#2E7D32',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'white',
        flexDirection: "row",
    },
    btnPressed: {
        width: 104,
        height:32,
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: '#2E7D32',
        borderRadius: 10,
    },
    btnDefult: {
        width: 104,
        height:32,
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: 'white',
        borderRadius: 10,
    },
    txtPressed: {
        color: 'white',
    },
    txtDefult: {
        color: '#A5A4A4'
    },
    header: {
        width: 290,
        height: 31,
        marginLeft: 26,
        color: '#425054',
        marginTop: 20,
        fontSize: 18,
        fontWeight: '500',
        lineHeight: 20,
    },
    activity: {
       width: 145,
       height: 100,
       marginLeft: 26,
       marginRight: -10,
       backgroundColor: 'white', 
       borderRadius: 5,
    },
    actImage: {
        width: 145,
        height: 100,
    },
    label: {
        width: 140,
        height: 29,
        marginTop: 10,
        fontSize: 14,
        lineHeight:20,
        color: '#425054',
    }, 
    scrollView:{
        backgroundColor: 'white',
        maxHeight: 130,
    },

    
});