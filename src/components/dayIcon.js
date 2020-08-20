import React from 'react';
import {Image,View,StyleSheet,Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default DayIcon =({item,showJournal})=>{

    return(
        <View>
        {item.id?
        <TouchableOpacity onPress = {()=>showJournal()} style = {styles.container}>
        <View style = {styles.darkLayer}>
           <Text style = {styles.header}>{item.day}</Text>
           </View>
           <View style = {styles.body}>
            <Text>{item.mood}</Text>
            </View>
        </TouchableOpacity>
        :
        <View style = {{...styles.container,backgroundColor:'#F3F3F3',}}>
            <View style = {styles.darkLayer}>
             <Text style = {styles.header}>{item.day}</Text>
             </View>
             <View style = {styles.body}>
             <Image source = {require('../../assets/delete.png')}/>
             </View>
        </View>
        }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        margin:4,
        height:62,
        width:62,
        backgroundColor:'#FFC10E',
        borderRadius:6,
    },
    header: {
        height:22,
        width: '100%',
        paddingTop:'3%',
        textAlign:'center',
        borderRadius:6,
        fontWeight: '800'
    },
    darkLayer: {
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        borderTopLeftRadius:6,
        borderTopRightRadius:6
    },

    body: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'

    },
})