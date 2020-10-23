import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    text:{
        position: 'absolute',
        top:240,
        left:50,
        fontSize:40,
        color:'#7990AF',
        //borderWidth:1,
        width:300,
        textAlign:'center'
    },
    questionBox:{
        backgroundColor:'#DD6755',
        justifyContent:'center',
        alignContent:'center',
        textAlign:'center',
        padding:15,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    answers:{
        width:'85%',
        textAlign:'center',
        backgroundColor:'white',
        marginTop:'2%',
        marginLeft:'7%',
        marginTop:'7%',
        borderRadius:10,
        paddingBottom:8,
        paddingTop:10,
        fontWeight:'800'

    },
    introContainer:{
        justifyContent:'center',
        alignContent:'center',
        width:450
    },
    backgroundImage:{
        width:'80%',
        height:'90%'
    },
    prompt:{
        backgroundColor:'#FBBDB4',
        width:'75%',
        marginTop:'125%',
        marginLeft:'12%',
        borderRadius:10,
        paddingBottom:'5%'
    },
    bottomFrame: {
        position: 'absolute',
        top:394,
        left:60,
        borderWidth:10,
        width:280,
        //borderColor:'red',
        borderColor:'#CFDCEF',
        zIndex:0,
    },

    coverLeft:{
        position: 'absolute',
        top:134,
        left:60,
        borderWidth:10,
        height:280,
        borderColor:'#CFDCEF',
        zIndex:0,
    },
    barRight:{
        position: 'absolute',
        top:134,
        right:64,
        width: 10,
        borderWidth:10,
        borderColor:'#7990AF',
        height:270,
    },
    barTop:{
        position: 'absolute',
        top:134,
        left:70,
        width: 270,
        borderWidth:10,
        borderColor:'#7990AF',
    },
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    stats:{
        fontSize: 20,
        textAlign:'center',
        marginTop:'2%'
    },
    statType:{
        textAlign:'center',
        color: '#4F7947',
        width: 125,
        marginBottom:'5%'
    },
    statsRow: {
        marginTop:'5%',
        flexDirection:'row',
        marginLeft: '-2%'
    },
    title:{
        fontSize: 24,
        fontWeight: '700',
    },
    startText:{
        textAlign:'center',
        fontSize:18,
        color:'white'
    },
    start:{
        display:'flex',
        height: 50,
        width: 250,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#2E7D32',
        marginTop: '10%',
        marginLeft: '15%'

    },
    upper:{
        height: '40%'
    },
    lower: {
        backgroundColor:'white',
        height: '60%',
        width: '100%',
        paddingLeft: '5%',
        paddingTop: '8%'
    },
    sectionTitle :{
        fontSize: 20,
        paddingTop: '5%'
    },
    descriptions: {
        color: '#7B7B7B',
        paddingTop: '2%',
        //paddingBottom: '%'
    }
    
})

export default styles