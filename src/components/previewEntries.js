import React from 'react';
import { Text, View, Image , StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default previewEntries = ({image,journal,date,showJournal})=>{
    return (
        <View style = {style.container}>
        <Text style = {style.date}>{date}</Text>
        <TouchableOpacity onPress = {showJournal} style = {style.box}>
            <Image style = {style.icon} source = {require('../../assets/moodTest.png')}/>
            <Text style = {style.journal}>{journal}</Text>
        </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    box: {
        display: 'flex',
        height: 90,
        flexDirection:'row',
        backgroundColor: '#ADD8E5',
        borderRadius: 5,
        marginTop: 10,
    },
    container:{
        margin:10,
        width: '95%',
        height: 130,
        marginTop: 2,
        marginBottom: 10
    },
    date:{
        fontWeight:'800',
        fontSize: 20,
    },
    journal:{
        fontSize: 14,
        width: 200,
        paddingTop:20,
        paddingBottom:20,
        textAlign:'left',
        marginLeft:30
    },
    icon:{
        margin:10,
        marginLeft:20,
        marginTop:15
    }
})