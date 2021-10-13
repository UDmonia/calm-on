import React, {useState, useEffect} from 'react';
import {FlatList,Image, View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DayIcon from './dayIcon'
import moment from 'moment'
import {useSelector} from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import styles from '../stylesheets/monthlyPreviewStyles';
import { SpriteActivityData } from "../data/activityData";
import { monthlyData } from "../data/dummyData"



//Date global variables
var date = new Date()
var year = date.getFullYear()
var currentMonth = date.getMonth()

const MonthlyPreview =()=>{
    const navigation = useNavigation()
    const checkinObject = monthlyData
    //Get check-in object from redux
    // const checkinObject= useSelector(state=>state)
    //Initialize empty check-ins array
    const journals = []
    for (const prop in checkinObject['data']) {
        journals.push(...checkinObject['data'][prop])
    }
        // Map each check-in object into the check-in array
        // Format checkin {day1:{checkin1:[]}, day2:{checkin2:[]}} ===> checkin [{date:day1,checkins1:[]},{date:day2,checkins2:[]}]
    //For previewing check-ins
    // journals.reverse()
    // console.log("monthly Preview State: @@@@@@@@@@@@@@@@@@", journals)


    
    //Render the data for Flatlist
    const renderItem = (({item, index})=>{
        //find each check-in by '_id'
        // console.log('ITEMMMMM', item)
        const findJournal = journals.find(journal=>journal['_id'] === item.id)
        // console.log('ITEM IDddddddddddd', journals)
        return (
        //Return the icons that corresponds to the date and the moods
        <View>
        <DayIcon 
        //showJournal: navigates to the 'CheckinDetail'
        //entry: locates the exact check-in and renders it in the 'CheckinDetail' page
        //allEntries: helps 'CheckinDetail' to locate the index of the exact check-in in the journals array so user can change dates in 'CheckinDetail'
        //item: this a special thing for Flatlist
        showJournal = {(time)=>navigation.navigate('CheckinDetail',{
            entry:findJournal, allEntries: journals, time: time, spriteActivityData: SpriteActivityData
        })}
        checkIn= {item}
        journals={journals}
        index={index}
        />
        </View>
        )
    })

    //Month number is zero-based, i.e 'january' == 0 
    //set initial month to be the current month
    const [month,setMonth] = useState(currentMonth)
    //Retrieve the starting month from the first item of the journals array, if no check-ins yet then just display the current month
    const startMonth = (journals.length > 0) ? new Date(journals[0].timestamp).getMonth():currentMonth
    // console.log("MONTHLY PREVIEW", journals)
    
    const numDays = new Date(year,month+1,0).getDate()
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December']

        //Re-format the existing journals array from Redux store
    // const mapJournals = journals.map((journal,index)=>(
    //     {id:journal["_id"], month: `${new Date(journal.date).getMonth()+1}`, date:`${new Date(journal.date).getDate()}`, journals:journal.journals}
    //     ))
        // console.log('mapjournals', mapJournals)

    //Map each check-in ONE MONTH at a time from journals array, this is used by Flatlist as a data source
    const makeData =()=>{

        const days = []
        //Loop through the number of days of the current month starting at day 1
        for (let i = 1; i <= numDays; i++){
            
            //Finds a check-in in the journals array where the day and the month is the same as the index and the current month
            // console.log('DATAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', journals[i-1])
            const pushToCalendar = journals.find(journal => moment(journal.timestamp).format('D') == i.toString())
            const pushToCalendar2 = journals.filter(journal => moment(journal.timestamp).format('D') == i.toString())
            
            // console.log("PUSHHHHHHHHHHHHHHHH", pushToCalendar2)
            if(pushToCalendar){
            //if pushToCalendar array is not empty, add the re-format object into the days array
            // if the day in createdAt is the same as i push to days\
           
            // console.log('#################################DIDpushtocalendar JOURNALS')
            // days.push(pushToCalendar)
            
            
            //if pushtoCalendar array is empty, meaning no check-ins, then add just the empty day without any check-ins into the days array
            
                // console.log("DIDNT PUSH TO CALENDAR")
                days.push({DOW:moment(new Date(pushToCalendar.timestamp)).format('dddd'),month:month+1 , key:i , day:i , id:pushToCalendar._id, journals:pushToCalendar})
            }
            else {
                days.push({DOW:moment(new Date(year,month,i)).format('dddd'),id:null,month:month+1 ,key:i ,day:i })
            }
        }
        return days 
    }
    

        //call the makeData array
        const data = makeData()
        // console.log('DATAAAAAAAAAAAAAAAAAAAAAAAAAAAAA####sasda######', data)
    return(
        <View style = {styles.container}>

            <View style = {styles.header}>
                {month > startMonth ?
                <TouchableOpacity onPress = {()=>setMonth(month-1)} >
                    <Image source = {require('../../assets/images/prevMonth.png')}/>
                </TouchableOpacity>
                :
                    <Image source = {require('../../assets/images/leftDisabled.png')}/>
                }

    <Text style = {styles.date}>{months[month]} {year}</Text>
                {month < currentMonth?
                <TouchableOpacity onPress = {()=>setMonth(month+1)} >
                    <Image source = {require('../../assets/images/nextMonth.png')}/>
                </TouchableOpacity>
                :
                    <Image source = {require('../../assets/images/rightDisabled.png')}/>
                }
            </View>

        {journals.length == 0? <Text>No Check-ins yet :(</Text>:
            <FlatList keyExtractor = {(item,index)=>index.toString()} data = {data} renderItem = {renderItem} />
        }
        </View>
    )
}

export default MonthlyPreview

