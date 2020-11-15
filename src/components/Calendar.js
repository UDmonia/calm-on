import React, {useState} from 'react';
import {Image,View,Text, ImageBackground,ScrollView} from 'react-native';
import PreviewDaily from './previewEntries'
import PreviewMonth from './monthlyPreview'
import moment from 'moment'
import {useSelector} from 'react-redux'
import {Box} from './previewEntries'
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../stylesheets/calendarStyles'

var today = Date.now()

/**
 * Calendar contains two different views of the check-in data.
 * User can either choose monthly view or daily view.
 */
const Calendar =({navigation: { navigate} })=>{
    const checkinObject = useSelector(state=>state.session.user.checkIns)
    const journals = []
    for (const prop in checkinObject) {
        journals.push({journals:checkinObject[prop], _id:prop, date:prop})
    }

    //Reverse journals array so the first element check-in item is the latest instead of the oldest
    journals.reverse()

    /**
    *Try to find today's checkIn in the checkin array by using of 'L' format dates ('L' means 'local time')
    */
    const todayJournal = journals.find(journal => moment(journal.journals[0].createdAt).format('L') === moment(today).format('L'))

    /**
    *check if todayJournal exist or if the user checked in more than 4 times today
    */
    const checkInEnabled = !todayJournal || todayJournal.journals.length < 4

    /**
     * Render check-ins for the daily view by mapping out each check-in into Preview component
     */
    const previewDaily = journals.map((entry,key)=>{
        return(
        <PreviewDaily
        showJournal = {
            (time)=>{navigate('CheckinDetail', 
            {entry: journals[key], allEntries: journals,time: time})
        }
            
        } 
          key = {key} journals = {entry.journals}  date = {moment(entry.journals[0].createdAt).format('dddd, LL')}/>
        )
    })

    const [viewByDay,changeView] = useState(true)

    const activeColor = {
        backgroundColor:'white',
        color: 'black',
        paddingTop:'8%',
        fontSize:16,
        fontWeight:'500',
        textAlign: 'center',
        height: '100%'
    }

    const inactiveColor = {
        color: 'white',
        backgroundColor: null,
        paddingTop:'8%',
        fontSize:16,
        fontWeight:'500',
        textAlign: 'center',
        height: '100%'
    }

    
    return (
        <View style = {styles.format}>
            <ImageBackground source={require('../../assets/splash_panel.png')} style = {styles.background}>
                <View style = {styles.main}>
                    <View style = {styles.calendar}>
                        <View style = {styles.toggle}>

                        <Image style = {styles.hangerLeft} source = {require('../../assets/hanger.png')}/>
                        <Image style = {styles.hangerRight} source = {require('../../assets/hanger.png')}/>

                            <View style = {{borderRadius: 5,borderColor: 'white', height: '49%',borderWidth:3, display:'flex',flexDirection:'row'}}>
                                <TouchableOpacity style = {{width:105}} onPress = {()=>changeView(!viewByDay)}>
                                    <Text style = {viewByDay? activeColor:inactiveColor}>Daily</Text>
                                </TouchableOpacity>

                                <TouchableOpacity  style = {{width:105}} onPress = {()=>changeView(!viewByDay)}>
                                    <Text style = {!viewByDay? activeColor:inactiveColor}>Monthly</Text>
                                </TouchableOpacity>
                            </View>
                            
                        </View>

                        {viewByDay?
                        <ScrollView style = {styles.dates}>
                                {checkInEnabled &&
                                    <Box empty = {true} color = {'white'} image = {require('../../assets/addJournal.png')} time = {null} mood = {null} journal = {''} />
                                }
                            {previewDaily}
                        </ScrollView>
                        
                        :
                            <PreviewMonth/>
                        }

                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Calendar

