import React, {useState, useEffect} from 'react';
import {FlatList,Image,StyleSheet, View,Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DayIcon from './dayIcon'
import moment from 'moment'
import {useSelector} from 'react-redux'
import { useNavigation } from '@react-navigation/native';


//Date global variables
var date = new Date()
var year = date.getFullYear()
var currentMonth = date.getMonth()

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

const MonthlyPreview =()=>{
    const navigation = useNavigation()

    //Get check-in object from redux
    const checkinObject= useSelector(state=>state.session.user.checkIns)

    //Initialize empty check-ins array
    const journals = []

    //Map each check-in object into the check-in array
    //Format checkin {day1:{checkin1:[]}, day2:{checkin2:[]}} ===> checkin [{date:day1,checkins1:[]},{date:day2,checkins2:[]}]
    for (const prop in checkinObject) {
        journals.push({journals:checkinObject[prop], _id:prop, date:prop})
    }

    //For previewing check-ins
    journals.reverse()


    //Render the data for Flatlist
    const renderItem = (({item})=>{
        //find each check-in by '_id'
        const findJournal = journals.find(journal=>journal['_id'] === item.id)

        return (
        //Return the icons that corresponds to the date and the moods

        <DayIcon 
        //showJournal: navigates to the 'CheckinDetail'
        //entry: locates the exact check-in and renders it in the 'CheckinDetail' page
        //allEntries: helps 'CheckinDetail' to locate the index of the exact check-in in the journals array so user can change dates in 'CheckinDetail'
        //item: this a special thing for Flatlist
        showJournal = {()=>navigation.navigate('CheckinDetail',{
            entry:findJournal, allEntries: journals
        })}
         item = {item}/>
        )
    })

    //Month number is zero-based, i.e 'january' == 0 
    //set initial month to be the current month
    const [month,setMonth] = useState(currentMonth)

    //Retrieve the starting month from the first item of the journals array, if no check-ins yet then just start at the current month
    const startMonth = journals? new Date(journals[journals.length-1].journals[0].createdAt).getMonth():currentMonth
    

    //useEffect(()=>{
    //    console.log('first month',new Date(journals[journals.length-1].journals[0].createdAt).getMonth())
    //})


    const numDays = new Date(year,month+1,0).getDate()
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December']

    //Map each check-in ONE MONTH at a time from journals array, this is used by Flatlist as a data source
    const makeData =()=>{

        //Initialize empty array
        const days = []


        //Loop through the number of days of the current month starting at day 1
        for (var i = 1; i <= numDays; i++){

            //Finds a check-in in the journals array where the day and the month is the same as the index and the current month
            const pushToCalendar = mapJournals.find(journal => journal.date == i && journal.month == month+1)

            //if pushToCalendar array is not empty, add the re-format object into the days array
            if (pushToCalendar){
            days.push({DOW:`${moment(new Date(year,month,i)).format('dddd')}`,month:month,key:i,day:i,id:pushToCalendar.id,journals:pushToCalendar.journals})
            }

            //if pushtoCalendar array is empty, meaning no check-ins, then add just the empty day without any check-ins into the days array
            else{
                days.push({DOW:`${moment(new Date(year,month,i)).format('dddd')}`,id:null,month:month+1,key:i,day:i})
            }
        }

        //Check if next month is empty
        //const findAllNextMonth = mapJournals.filter(journal=>journal.month == month+2)
        //const findAllPrevMonth = mapJournals.filter(journal=>journal.month == month-2)
        //if (findAllNextMonth.length === 0){
        //    setEmpty(true)
        //}
        //console.log('Next month',findAllNextMonth)

        
        //The final days array will contain all days of the current month
        return days
    }

    //Re-format the existing journals array from Redux store
    const mapJournals = journals.map((journal,index)=>(
        {id:journal['_id'],month: `${new Date(journal.date).getMonth()+1}`,date:`${new Date(journal.date).getDate()}`,journals:journal.journals}
    ))

    //call the makeData array
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
                {month > startMonth ?
                <TouchableOpacity onPress = {()=>setMonth(month-1)} >
                    <Image source = {require('../../assets/prevMonth.png')}/>
                </TouchableOpacity>
                :
                    <Image source = {require('../../assets/leftDisabled.png')}/>
                }

    <Text style = {styles.date}>{months[month]} {year}</Text>
                {month < currentMonth?
                <TouchableOpacity onPress = {()=>setMonth(month+1)} >
                    <Image source = {require('../../assets/nextMonth.png')}/>
                </TouchableOpacity>
                :
                    <Image source = {require('../../assets/rightDisabled.png')}/>
                }
            </View>

        {journals.length == 0? <Text>No Check-ins yet :(</Text>:
            <FlatList keyExtractor = {(item,index)=>index.toString()} data = {data} renderItem = {renderItem}  />
        }
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

export default MonthlyPreview

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