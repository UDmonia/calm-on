import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    iconBox:{
        width: '25%',
        backgroundColor:'white', 
        justifyContent:'center',
        alignItems:'center',
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5
    },
    box: {
        display: 'flex',
        height: 110,
        flexDirection:'row',
        borderRadius: 5,
        margin:'1.2%',
        marginTop:'2%',
        backgroundColor:'#edf2f4',
        shadowColor:`rgba(0, 0, 0, 0.15)`,
        shadowOpacity: 1,
        shadowOffset: {width:0,height:0},
        //borderWidth:1,

    },
    category:{
        fontWeight:'bold'
    }
    ,
    container:{
        margin:'2.5%',
        width: '92%',
        marginTop: '2%',
        marginBottom: '2.8%',
        marginLeft:'3.5%',
        borderRadius:5,
    },
    date:{
        fontFamily: 'Avenir',
        fontWeight:'800',
        fontSize: 20,
        marginLeft: '3%',
        marginBottom: '2%',
        marginTop:'1.5%'
    },
    journal:{
        fontSize: 14,
        width: 215,
        paddingBottom:'5%',
        textAlign:'left',
        marginLeft:'8%'
    },
    icon:{
        margin:'3%',
        marginLeft:'7%',
        marginTop:'4%'
    },
    bolded: {
        fontWeight:'bold'
    },
    time:{
        fontWeight:'500',
        fontSize: 15,
        marginLeft:'3%'

    },
    journalTitle: {
        textAlign:'left',
        marginLeft:'8%',
        paddingTop:'5%',
        paddingBottom:'2%',
        fontSize: 17,
    }
})

export default styles