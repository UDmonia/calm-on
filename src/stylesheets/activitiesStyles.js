import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import hex from "./hexCodes";


export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "white",
    },
    btnContainer:{
        marginTop: 30,
        marginLeft: 16,
        width: 344,
        maxHeight: 32,
        borderColor: hex.green.green1,
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
        backgroundColor: hex.green.green1,
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
        color: hex.grey.grey1
    },
    headerView: {
        marginTop: 30,
        alignItems: 'flex-start',
        width: '100%',
    },
    headerTxt: {
        width: 290,
        height: 31,
        fontSize: 18,
        fontWeight: '500',
        lineHeight: 20,
        color: hex.grey.grey1,
        marginLeft: 18,
    },
    activity: {
       alignItems: 'flex-start', 
       width: 145,
       height: '100%',
       marginLeft: 18,
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
        color: hex.grey.grey1,
    }, 
    scrollView:{
        backgroundColor: 'white',
        maxHeight: 130,
    },
});