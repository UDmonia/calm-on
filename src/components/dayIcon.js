import React, { useEffect } from 'react';
import {Image,View,StyleSheet,Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

//fake data
const moodMap = {
    happy: {path:require('../../assets/preview/happy.png'), color: '#FBC423'},
    angry: {path:require('../../assets/preview/angry.png'), color: '#F09696'},
    sad: {path:require('../../assets/preview/sad.png'), color: '#DF9AFF'},
    scared: {path:require('../../assets/preview/scared.png'), color: '#E8B285'},
    excited: {path:require('../../assets/preview/excited.png'), color: '#AED4B0'},
    worried: {path:require('../../assets/preview/worried.png'), color: '#E8B285'}
}


export default DayIcon =({item,showJournal})=>{
    
    const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']

    return(
        <View>
        {item.journals?
        <TouchableOpacity onPress = {()=>showJournal()} style = {styles.container}>
           <Text style = {styles.header}>{item.day}{`\n`}
            <Text >{item.DOW.slice(0,3)}</Text>
           </Text>
           <View style = {styles.body}>
               {item.journals.map((journal,i)=>(
                   <Image key = {i} source = {moodMap[journal.mood].path}/>
               ))}
            </View>
        </TouchableOpacity>
        :
        <View style = {styles.container}>
             <Text style = {styles.header}>{item.day}{`\n`}
                <Text>{item.DOW.slice(0,3)}</Text>
             </Text>
             

             <View style = {styles.body}>
                 <Text style ={{fontSize:18,marginLeft:'5%', color:'rgba(0, 0, 0, 0.4)' }}>No Entries</Text>
             </View>
        </View>
        }
        </View>
    )
}

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