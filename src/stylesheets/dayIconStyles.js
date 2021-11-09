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
        borderColor: hex.grey.grey3
    },
    header: {
        width: 50,
        height: '100%',
        paddingTop:'5%',
        textAlign:'center',
        backgroundColor:hex.grey.grey2,
        color: hex.grey.grey1,
        borderColor: hex.grey.grey3,
        borderWidth:0.3,
    },

    body: {
        alignItems:'center',
        justifyContent:'flex-start',
        backgroundColor:'white',
        marginLeft: '3%',
        flexDirection:'row',
        width:'80%',
    },
    image: {
        marginRight: 25, 
    },
})

export default styles