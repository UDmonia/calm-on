import React, {useState,} from 'react';
import {Image,StyleSheet, View,Text, ImageBackground,ScrollView} from 'react-native';
import Preview from './previewEntries'
import PreviewMonth from './monthlyPreview'
import moment from 'moment'
import {useSelector} from 'react-redux'
//import {checkIns} from './testData'

import { TouchableOpacity } from 'react-native-gesture-handler';

export default Calendar =({navigation: { navigate} })=>{
    
    //fake data
    //const journals = 
    //////Omit 'Z' from the time stamp for actual time
    //[

    //{journals: [{time:"2020-08-09T10:00:00.000",journal:'i am excited',mood:'excited'},
    //            {time:"2020-08-09T07:15:00.000",journal:'i am sad',mood:'sad'},
    //            {time:"2020-08-09T11:15:00.000",journal:'i am angry',mood:'angry'},
    //            {time:"2020-08-09T15:15:00.000",journal:'i am excited',mood:'excited'}], 
    //            date: "2020-08-09T07:00:00.000"},

    //{journals:  [{time:"2020-08-10T08:00:00.000",journal:'i am hungry',mood:'happy'},
    //            {time:"2020-08-10T07:15:00.000",journal:'i am sad',mood:'sad'},
    //            {time:"2020-08-10T11:15:00.000",journal:'i am angry',mood:'angry'},
    //            {time:"2020-08-10T14:15:00.000",journal:'i am worried',mood:'worried'}], 
    //            date: "2020-08-10T07:00:00.000"},

    //{journals:  [{time:"2020-09-11T07:00:00.000",journal:'i am happy',mood:'happy'},
    //            {time:"2020-09-11T07:15:00.000",journal:'i am sad',mood:'sad'},
    //            {time:"2020-09-11T11:15:00.000",journal:'i am angry',mood:'angry'},
    //            {time:"2020-09-11T14:15:00.000",journal:'i am excited',mood:'excited'}], 
    //            date: "2020-09-11T07:00:00.000"},

    //{journals: [{time:"2020-09-12T07:00:00.000",journal:'i am happy',mood:'happy'},
    //            {time:"2020-09-12T07:15:00.000",journal:'i am sad',mood:'sad'},
    //            {time:"2020-09-12T11:15:00.000",journal:'i am angry',mood:'angry'},
    //            {time:"2020-09-12T14:15:00.000",journal:'i am excited',mood:'excited'}], 
    //            date: "2020-09-12T07:00:00.000"},
    //        ]

    const checkinObject = useSelector(state=>state.session.user.checkIns)
    const journals = []
    for (const prop in checkinObject) {
        journals.push({journals:checkinObject[prop], _id:prop, date:prop})
    }


    //const journals = []
    //const checkinObject= useSelector(state=>state.session.user.checkIns)
    //Object.keys(checkinObject).forEach((key,index)=>{
    //    journals.push({date:key,journals:checkinObject[key],_id:index})
    //})
    
    //useEffect(()=>{
    //    console.log(journals)
    //})

    
    const previewJournals = journals.map((entry,key)=>{
        return(
        <Preview  
        showJournal = {
            (time)=>{navigate('CheckinDetail', 
            {entry: journals[key], allEntries: journals,time: time})
        }
            
        } 
          key = {key} journals = {entry.journals} date = {moment(entry.journals[0].createdAt).format('dddd, LL')}/>
        )
    })

    const [viewByDay,changeView] = useState(true)

    //useEffect(()=>{
      
    //},[])
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
        <View style = {style.format}>
            <ImageBackground source={require('../../assets/splash_panel.png')} style = {style.background}>
                <View style = {style.main}>
                    <View style = {style.calendar}>
                        <View style = {style.toggle}>

                        <Image style = {style.hangerLeft} source = {require('../../assets/hanger.png')}/>
                        <Image style = {style.hangerRight} source = {require('../../assets/hanger.png')}/>

                            {/*<Button onPress = {()=>switchToDetailed(false)} title = 'back'/>*/}
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
                        <ScrollView style = {style.dates}>

                            {/*render dates here*/}

                            {/*Only shows up when the user have not submitted an entry for today*/}
                            {/*<Preview date = {'Today'} journal = {"Tell me how you're feeling"} image ={require('../../assets/addJournal.png')} />*/}
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
        width:'92%',
        height:'100%',
        marginTop:'10%',
        borderRadius: 10,
        backgroundColor: 'white',
        paddingBottom: '10%'
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
        marginTop: '5%',
        height: '100%',
    },
    hangerLeft:{
        position:'absolute',
        left: '12%',
        top: '-20%'
    },
    hangerRight:{
        position:'absolute',
        right: '12%',
        top: '-20%'
    }
})