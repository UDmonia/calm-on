import {StyleSheet} from 'react-native'
import hex from "./hexCodes";

const styles = StyleSheet.create({
    container:{
        marginLeft:'1.2%',
        marginRight:'1.2%',
        height:62,
        width:330,
        borderWidth:0.3,
        flexDirection: 'row',
        borderColor: hex.grey.dayIconBackground
    },
    header: {
        width: 50,
        height: '100%',
        paddingTop:'5%',
        textAlign:'center',
        backgroundColor:hex.grey.dayIconBackground2,
        color: hex.grey.dayIconBackground3,
        borderColor: hex.grey.dayIconBackground,
        borderWidth:0.3,
    },

    body: {
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        marginLeft: '3%',
        flexDirection:'row',
        width:'80%',
        justifyContent:'space-around'
    },
})

export default styles