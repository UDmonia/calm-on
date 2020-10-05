import React, {useState} from 'react'
import {ImageBackground,Text, View, Image , StyleSheet} from 'react-native';
import { TouchableOpacity} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment'


const moodMap = {
    happy: {path:require('../../assets/preview/large/happy.png'),},
    angry: {path:require('../../assets/preview/large/angry.png'),},
    sad: {path:require('../../assets/preview/large/sad.png'), },
    scared: {path:require('../../assets/preview/large/scared.png'),},
    excited: {path:require('../../assets/preview/large/excited.png'), },
    worried: {path:require('../../assets/preview/large/worried.png'), }
}


const checkinDetails =({route})=>{
    const navigation = useNavigation()
    const {entry,allEntries,time} = route.params

    // Enter from daily preview: set initial index to specfic time pressed
    const specificTime = entry.journals.find(journal=> journal.createdAt == time)
    let specificIndex = entry.journals.indexOf(specificTime)

    //Enter from monthly preview: set initial index to zero
    if (!time) {
        specificIndex = 0
    }

    const [journal,setJournal] = useState(entry.journals[specificIndex])
    const [isActive,setActive] = useState(specificIndex)
    const [currentEntryIndex,setEntryIndex] = useState(allEntries.indexOf(entry))

    const buttons = allEntries[currentEntryIndex].journals.map((journal,i)=>(
        <TouchableOpacity key = {i} onPress = {()=>{setJournal(journal)
                                          setActive(i)}} 
                                          style = {isActive == i?styles.timeActive:styles.times}>
            <Text style  = {isActive == i? {...styles.timesText,color: 'black'}:styles.timesText}>{moment(journal.createdAt).format('LT')}</Text>
        </TouchableOpacity>
    ))    



    return(
<View style = {styles.format}>
    <ImageBackground source={require('../../assets/splash_panel.png')} style = {styles.background}>
    <View style = {styles.main}>
        <View style = {styles.calendar}>
            <View style = {styles.toggle}>

                <Image style = {styles.hangerLeft} source = {require('../../assets/hanger.png')}/>
                <Image style = {styles.hangerRight} source = {require('../../assets/hanger.png')}/>

                <Text style = {styles.text}>{moment(journal.createdAt).format('dddd, LL')}</Text>
                </View>
            <View style = {styles.container}>
                <View style = {styles.upper}>
        
            {/*Date increase/decrease*/}
                <View style = {styles.header}>
                {/*{index > 0?*/}
                {currentEntryIndex < allEntries.length-1? 
                <TouchableOpacity onPress = {()=>{
                    setEntryIndex(currentEntryIndex+1)
                    setJournal(allEntries[currentEntryIndex+1].journals[0])
                    setActive(0)
                    }}>
                    <Image source = {require('../../assets/prevMonth.png')}/>
                </TouchableOpacity>
                :
                    <Image source = {require('../../assets/leftDisabled.png')}/>
                }
                {/*:null}*/}

                    <Text style = {styles.date}>{moment(journal.createdAt).format('LL')}</Text>
                {/*{index < 11?*/}
                {currentEntryIndex > 0?
                <TouchableOpacity TouchableOpacity onPress = {()=>{
                    setEntryIndex(currentEntryIndex-1)
                    setJournal(allEntries[currentEntryIndex-1].journals[0])
                    setActive(0)
                    }} >
                    <Image source = {require('../../assets/nextMonth.png')}/>
                </TouchableOpacity>
                :
                    <Image source = {require('../../assets/rightDisabled.png')}/>
                }
                {/*:null}*/}
            </View>

            <View style ={styles.timeList}>
                {buttons}
            </View>


                    <Image  source = {moodMap[journal.mood].path}/>
                    
                    {/*journal placeholder*/}
                    <Text style = {styles.journal}>Today I'm Feeling <Text style = {{fontWeight:'bold'}}>{journal.mood.charAt(0).toUpperCase()+journal.mood.slice(1)}</Text></Text>

                </View>

                <View style = {styles.lower}>
                    <Image source = {require('../../assets/banner.png')}/>
                    <View style = {styles.activities}>
                        <TouchableOpacity onPress = {()=>navigation.navigate('milkMilkMilk')}  style = {styles.option}>
                            <Text>Milk Milk Milk</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style = {styles.option}>
                            <Text>Some other activities</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </View>
    </View>
    </ImageBackground>
</View>
    )
}

export default checkinDetails

const styles = StyleSheet.create({
    container:{
        display:'flex',
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
        width:'80%',
        textAlign:'center'
    },
    upper:{
        display:'flex',
        width: '90%',
        //borderWidth: 1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:'2%'
    },
    journal: {
        marginTop: '5%',
        fontSize:18,
    },
    lower:{
        //borderWidth:1,
        marginTop:'10%',
        width:'100%'
    },
    activities:{
        marginTop:'5.5%',
        //borderWidth:1,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    option:{
        width:155,
        height:118,
        borderWidth:1,

    },
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
    hangerLeft:{
        position:'absolute',
        left: '12%',
        top: '-20%'
    },
    hangerRight:{
        position:'absolute',
        right: '12%',
        top: '-20%'
    },
    timeList:{
        display:'flex',
        flexDirection:'row',
        marginTop: '2%',
        marginBottom: '8%',
        justifyContent:'space-evenly',
        width:'105%'
    },
    times:{
        borderWidth: 1,
        height: 33,
        width: 75,
        borderRadius: 5,
        borderColor:'#CDCDCD'
    },
    timeActive:{
        borderWidth: 1,
        height: 33,
        width: 75,
        borderRadius: 5,
        backgroundColor:'#FEE496',
        borderColor:'#FFC10E'
    },

    timesText:{
        textAlign:'center',
        paddingTop: '8%',
        color:'#848484'
    }

})