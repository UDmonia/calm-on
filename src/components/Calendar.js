import React, {useState,useEffect} from 'react';
import {Image,StyleSheet, View,Text, ImageBackground,ScrollView} from 'react-native';
import Preview from './previewEntries'
import {useSelector} from 'react-redux'
import PreviewMonth from './monthlyPreview'

import { TouchableOpacity } from 'react-native-gesture-handler';


//For later

//const emotionMap = [
//    {mood:'happy'},
//    {mood:'Sad'},
//    {mood:'Excited'},
//    {mood:'Angry'},
//    {mood:'Worried'},
//    {mood:'Scared'},
//]


export default Calendar =({ navigation: { navigate} })=>{
    const journals = useSelector(state=>state.session.user.checkIns)

    //[{mood: 'happy', journal: 'i am happy today', date: 'Friday, August 07, 2020'},
    //{mood: 'sad', journal: 'i am sad today', date: 'Friday, August 07, 2020'},
    //{mood: 'angry', journal: 'i am angry today', date: 'Friday, August 07, 2020'},
    //{mood: 'hungry', journal: 'i am hungry today', date: 'Friday, August 07, 2020'},]

    const previewJournals = journals.map((entry,key)=>(
        <Preview  
        showJournal = {
            ()=>navigate('CheckinDetail', {
            entry: journals[key]
         })
        } 
         key = {key} journal = {entry.journal} date = {entry.date}/>
    ))

    const [viewByDay,changeView] = useState(true)

    
    return (
        <View style = {style.format}>
            <ImageBackground source={require('../../assets/splash_panel.png')} style = {style.background}>
                <View style = {style.main}>
                    <View style = {style.calendar}>
                        <View style = {style.toggle}>
                            {/*<Button onPress = {()=>switchToDetailed(false)} title = 'back'/>*/}

                            {viewByDay? <Text style = {style.text}>View By Day</Text> 
                            :<Text style = {style.text}>View By Month</Text> }

                            <TouchableOpacity onPress = {()=>changeView(!viewByDay)}>
                                <Image style = {{marginLeft:10}} source = {require('../../assets/downArrow.png')}/>
                            </TouchableOpacity>
                            
                        </View>

                        {viewByDay?
                        <ScrollView style = {style.dates}>

                            {/*render dates here*/}

                            {/*Only shows up when the user have not submitted an entry for today*/}
                            <Preview date = {'Today'} journal = {"Tell me how you're feeling"} image ={require('../../assets/addJournal.png')} />
                            {previewJournals}
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

const style = StyleSheet.create({
    format:{
        padding: 0,
    },

    background:{
        width: '100%',
        height: '100%'
    },
    main: {
        backgroundColor: 'rgba(0, 0, 0, 0.45)',
        display: 'flex',
        height: '100%',
        alignItems: 'center',
      },
    calendar:{
        width:'90%',
        height:'100%',
        marginTop:'10%',
        borderRadius: 10,
        backgroundColor: 'white',
    },
    toggle:{
        height: '12%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#873E25',
        borderTopRightRadius:10,
        borderTopLeftRadius:10
    },
    text: {
        fontSize: 20,
        color: 'white'
    },
    dates:{
        marginTop: 30,
        height: '100%'
    }
    
})