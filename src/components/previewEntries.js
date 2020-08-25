import React, { useEffect } from 'react';
import { Text, View, Image , StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import moment from 'moment'
import { useNavigation } from '@react-navigation/native'

var today = Date.now()

const Box = ({mood,journal,time,image,showJournal,color,empty})=>{

    return(
        
        <View style = {styles.container}>
        {empty? 
            <TouchableOpacity style = {styles.box}>
                <View style = {{width: '25%',backgroundColor:'white', justifyContent:'center',alignItems:'center',}}>
                    <Image source = {require('../../assets/addJournal.png')}/>
                </View>
                <Text style = {styles.journalTitle}>Tell me how you're feeling</Text>
            </TouchableOpacity>
        :
            <View>
                <Text style = {styles.time}>{moment(time).format('LT')}</Text>
                <TouchableOpacity  onPress = {()=>showJournal(time)} 
                style = {{...styles.box,backgroundColor:color}}
                >
                    <View style = {{width: '25%',backgroundColor:'white', justifyContent:'center',alignItems:'center',}}>
                    <Image source = {image} />
                    </View>
                    <View>
                    <Text style = {styles.journalTitle}>{mood.charAt(0).toUpperCase()+mood.slice(1)}</Text> 
                    <Text style = {styles.journal}>{journal}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        }
        </View>
    )

} 
    




export default previewEntries = ({journals,date,showJournal})=>{

    //fake data
    const moodMap = {
        happy: {path:require('../../assets/preview/happy.png'), color: '#FBC423'},
        angry: {path:require('../../assets/preview/angry.png'), color: '#F09696'},
        sad: {path:require('../../assets/preview/sad.png'), color: '#DF9AFF'},
        scared: {path:require('../../assets/preview/scared.png'), color: '#E8B285'},
        excited: {path:require('../../assets/preview/excited.png'), color: '#AED4B0'},
        worried: {path:require('../../assets/preview/worried.png'), color: '#E8B285'}
    }

    //useEffect(()=>{
    //    console.log('current mood',moodMap['angry'].color)
    //},[])
    
    
    const journalList = journals.map((journal,i)=>(
        <Box  color = {moodMap[journal.mood].color} image = {moodMap[journal.mood].path} key = {i} showJournal = {showJournal} journal = {journal.journal} mood = {journal.mood} time = {journal.time}/>
    ))


    
    
    return (
        <View >

        {!journals.find(journal => moment(journal.time).format('L') === moment(today).format('L')) && 
            <Box empty = {true} color = {'white'} image = {require('../../assets/addJournal.png')} time = {null} mood = {null} journal = {''} />
        }

        <Text style = {styles.date}>{date}</Text>
        
        {/*cannot find today's date then show option to add journal*/}
        
        {journalList}
        {/*mapped array of journal previews*/}
        {/*<TouchableOpacity onPress = {showJournal} style = {image?{...styles.box,backgroundColor:'white',borderWidth:1,borderColor:'#f2e9e4'}:styles.box}>
            {image? 
            <Image style = {styles.icon} source = {image}/>
            : 
            <Image style = {styles.icon} source = {require('../../assets/moodTest.png')}/>
            }
            <Text style = {styles.journal}>{journal}</Text>
        </TouchableOpacity>*/}
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        display: 'flex',
        height: 90,
        flexDirection:'row',
        borderRadius: 5,
        marginTop: '3%',
        shadowColor:'#adb5bd',
        //shadowRadius:3,
        shadowOpacity: 0.7,
        shadowOffset: {width:-1,height:1},

    },
    container:{
        margin:'2.5%',
        width: '92%',
        height: 130,
        marginTop: '0.5%',
        marginBottom: '2.5%',
        marginLeft:'3.5%'
    },
    date:{
        fontFamily: 'Avenir',
        fontWeight:'800',
        fontSize: 20,
        marginLeft: '3%',
        marginBottom: '2%'
    },
    journal:{
        fontSize: 14,
        width: 200,
        paddingBottom:'5%',
        textAlign:'left',
        marginLeft:'8%'
    },
    icon:{
        margin:'3%',
        marginLeft:'7%',
        marginTop:'4%'
    },
    time:{
        fontWeight:'500',
        fontSize: 15,

    },
    journalTitle: {
        textAlign:'left',
        marginLeft:'8%',
        paddingTop:'5%',
        paddingBottom:'5%',
        fontSize: 17,
    }
})