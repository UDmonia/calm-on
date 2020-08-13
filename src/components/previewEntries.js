import React from 'react';
import { Text, View, Image , StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default previewEntries = ({image,journal,date,showJournal})=>{
    return (
        <View style = {styles.container}>
        <Text style = {styles.date}>{date}</Text>
        <TouchableOpacity onPress = {showJournal} style = {image?{...styles.box,backgroundColor:'white',borderWidth:1,borderColor:'#f2e9e4'}:styles.box}>
            {image? 
            <Image style = {styles.icon} source = {image}/>
            : 
            <Image style = {styles.icon} source = {require('../../assets/moodTest.png')}/>
            }
            <Text style = {styles.journal}>{journal}</Text>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        display: 'flex',
        height: 90,
        flexDirection:'row',
        backgroundColor: '#ADD8E5',
        borderRadius: 5,
        marginTop: '3%',
        shadowColor:'#adb5bd',
        shadowOpacity: 0.1,
        shadowRadius:1,
    },
    container:{
        margin:'2.5%',
        width: '95%',
        height: 130,
        marginTop: '0.5%',
        marginBottom: '2.5%'
    },
    date:{
        fontFamily: 'Avenir',
        fontWeight:'800',
        fontSize: 20,
    },
    journal:{
        fontSize: 14,
        width: 200,
        paddingTop:'5%',
        paddingBottom:'5%',
        textAlign:'left',
        marginLeft:'8%'
    },
    icon:{
        margin:'3%',
        marginLeft:'7%',
        marginTop:'4%'
    }
})