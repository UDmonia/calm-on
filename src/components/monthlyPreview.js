import React, {useState} from 'react';
import {FlatList,Image,StyleSheet, View,Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DayIcon from './dayIcon'
import {useSelector} from 'react-redux'
import { useNavigation } from '@react-navigation/native';

var date = new Date()
var year = date.getFullYear()

export default MonthlyPreview =()=>{
    const navigation = useNavigation()
    const journals = useSelector(state=>state.session.user.checkIns)


    const renderItem = (({item})=>{
        //console.log('Item:',item.id)
        const findJournal = journals.find(journal=>journal['_id'] === item.id)
        return (
        <DayIcon 
        showJournal = {()=>navigation.navigate('CheckinDetail',{
            entry:findJournal
        })}
         item = {item}/>
        )
    })
    const [index,setIndex] = useState(0)


    const numDays = new Date(year,index+1,0).getDate()
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December']


    const makeData =()=>{
        const days = []
        for (var i = 1; i <= numDays; i++){
            const pushToCalendar = mapJournals.find(journal => journal.date == i && journal.month == index+1)
            if (pushToCalendar){
            days.push({month:index+1,key:i,day:i,mood:pushToCalendar.mood,id:pushToCalendar.id})
            }
            else{
                days.push({id:null,month:index+1,key:i,day:i})
            }
        }
        return days
    }

    const mapJournals = journals.map((journal,index)=>(
        {id:journal['_id'],mood:journal.mood,month: `${new Date(journal.date).getMonth()+1}`,date:`${new Date(journal.date).getDate()}`}
    ))

    const data = makeData()
    
   

    
    //const theme = {
    //    arrowColor: '#3F3F3F',
    //    monthTextColor: '#3F3F3F',
    //    textMonthFontSize: 20,
    //    textMonthFontWeight: '500',
    //    'stylesheet.calendar.header': {
    //        week: {
    //          marginTop: 5,
    //          flexDirection: 'row',
    //          justifyContent: 'space-between'
    //        }
    //      }
    //}


    return(
        <View style = {styles.container}>

            <View style = {styles.header}>
                {index > 0?
                <TouchableOpacity onPress = {()=>setIndex(index-1)} style = {styles.decrement}>
                    <Image source = {require('../../assets/prevMonth.png')}/>
                </TouchableOpacity>
                :null}

    <Text style = {styles.date}>{months[index]} {year}</Text>
                {index < 11?
                <TouchableOpacity onPress = {()=>setIndex(index+1)} style = {styles.increment}>
                    <Image source = {require('../../assets/nextMonth.png')}/>
                </TouchableOpacity>
                :null}
            </View>

            <FlatList horizontal = {false} data = {data} renderItem = {renderItem} numColumns ={5} />
        </View>
    )
    //    <Calendar 
    //    dayComponent = {({date,state})=>{
    //        return(
    //            <Text style = {{borderWidth:1,height:55,width:56,marginLeft:2,marginRight:2}}>
    //                {date.day}
    //            </Text>
    //        )
    //    }}
    //    theme = {theme} hideExtraDays = {true} firstDay = {1}/>
    //)
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    header:{
        width: '100%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    date:{
        fontSize:20,
        marginTop:'8%',
        marginBottom:'8%',
        width:'65%',
        textAlign:'center'
    },
    //increment:{
    //    marginLeft:'20%'
    //},
    //decrement:{
    //    marginLeft: '21%'
    //}

})