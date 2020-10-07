import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        marginLeft:'1.2%',
        marginRight:'1.2%',
        height:62,
        width:330,
        borderWidth:0.3,
        flexDirection: 'row',
        borderColor: '#E1E1E1'
    },
    header: {
        width: 50,
        height: '100%',
        paddingTop:'5%',
        textAlign:'center',
        backgroundColor:'#F0F0F0',
        color:'#767676',
        borderColor: '#E1E1E1',
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