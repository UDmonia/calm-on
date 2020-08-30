import React, {useState, useEffect} from 'react';
import {FlatList,Image,StyleSheet, View,Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DayIcon from './dayIcon'
import moment from 'moment'
import {useSelector} from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import {checkIns} from './testData'

var date = new Date()
var year = date.getFullYear()

//const journals = 
////Omit 'Z' from the time stamp for actual time
////Loop through user.checkin object
////
//[
//{journals: [{time:"2020-08-09T10:00:00.000",journal:'i am excited',mood:'excited'},
//            {time:"2020-08-09T07:15:00.000",journal:'i am sad',mood:'sad'},
//            {time:"2020-08-09T11:15:00.000",journal:'i am angry',mood:'angry'},
//            {time:"2020-08-09T15:15:00.000",journal:'i am excited',mood:'excited'}], 
//            date: "2020-08-09T07:00:00.000",
//            _id: '1'},

//{journals:  [{time:"2020-08-10T08:00:00.000",journal:'i am hungry',mood:'happy'},
//            {time:"2020-08-10T07:15:00.000",journal:'i am sad',mood:'sad'},
//            {time:"2020-08-10T11:15:00.000",journal:'i am angry',mood:'angry'},
//            {time:"2020-08-10T14:15:00.000",journal:'i am worried',mood:'worried'}], 
//            date: "2020-08-10T07:00:00.000",
//            _id: '2'},

//{journals:  [{time:"2020-09-11T07:00:00.000",journal:'i am happy',mood:'happy'},
//            {time:"2020-09-11T07:15:00.000",journal:'i am sad',mood:'sad'},
//            {time:"2020-09-11T11:15:00.000",journal:'i am angry',mood:'angry'},
//            {time:"2020-09-11T14:15:00.000",journal:'i am excited',mood:'excited'}], 
//            date: "2020-09-11T07:00:00.000",
//            _id: '3'},

//{journals: [{time:"2020-09-12T07:00:00.000",journal:'i am happy',mood:'happy'},
//            {time:"2020-09-12T07:15:00.000",journal:'i am sad',mood:'sad'},
//            {time:"2020-09-12T11:15:00.000",journal:'i am angry',mood:'angry'},
//            {time:"2020-09-12T14:15:00.000",journal:'i am excited',mood:'excited'}], 
//            date: "2020-09-12T07:00:00.000",
//            _id: '4'},
//        ]


export default MonthlyPreview =()=>{
    const navigation = useNavigation()
    const checkinObject= useSelector(state=>state.session.user.checkIns)
    //const checkinObject = checkIns
    const journals = []
    for (const prop in checkinObject) {
        journals.push({journals:checkinObject[prop], _id:prop, date:prop})
    }
    //useEffect(()=>console.log('testJournals',testJournals))


    const renderItem = (({item})=>{
        //console.log('Item:',item)
        const findJournal = journals.find(journal=>journal['_id'] === item.id)
        return (
        <DayIcon 
        showJournal = {()=>navigation.navigate('CheckinDetail',{
            entry:findJournal, allEntries: journals
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
            days.push({DOW:pushToCalendar.DOW,month:index+1,key:i,day:i,id:pushToCalendar.id,journals:pushToCalendar.journals})
            }
            else{
                days.push({DOW:`${moment(new Date(year,index,i)).format('dddd')}`,id:null,month:index+1,key:i,day:i})
            }
        }
        //console.log('return days', days)
        return days
    }

    const mapJournals = journals.map((journal,index)=>(
        {id:journal['_id'],month: `${new Date(journal.date).getMonth()+1}`,date:`${new Date(journal.date).getDate()}`,journals:journal.journals,DOW:moment(journal.createdAt).format('dddd')}
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
                <TouchableOpacity onPress = {()=>setIndex(index-1)} >
                    <Image source = {require('../../assets/prevMonth.png')}/>
                </TouchableOpacity>
                :
                    <Image source = {require('../../assets/leftDisabled.png')}/>
                }

    <Text style = {styles.date}>{months[index]} {year}</Text>
                {index < 11?
                <TouchableOpacity onPress = {()=>setIndex(index+1)} >
                    <Image source = {require('../../assets/nextMonth.png')}/>
                </TouchableOpacity>
                :
                    <Image source = {require('../../assets/rightDisabled.png')}/>
                }
            </View>

            <FlatList keyExtractor = {(item,index)=>index.toString()} data = {data} renderItem = {renderItem}  />
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
        marginBottom: '5%',
        justifyContent:'center',
        alignItems:'center',
    },
    date:{
        fontSize:20,
        marginTop:'8%',
        marginBottom:'8%',
        width:'80%',
        textAlign:'center'
    },
    //increment:{
    //    marginLeft:'20%'
    //},
    //decrement:{
    //    marginLeft: '21%'
    //}

})