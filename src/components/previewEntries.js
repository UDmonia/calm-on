import React, { useEffect} from 'react';
import { Text, View, Image , StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import moment from 'moment'
import { useNavigation } from '@react-navigation/native'

var today = Date.now()

export const Box = ({mood,journal,time,image,showJournal,color,empty})=>{
    const navigation = useNavigation()
    return(
        <View style = {styles.container}>
        {empty? 
            <TouchableOpacity onPress = {()=>navigation.navigate("DailyCheckIn")} style = {{...styles.box}}>
                    <Image style = {{marginLeft:20,marginTop:20}} source = {require('../../assets/addJournal.png')}/>
                <Text style = {{...styles.journalTitle,marginTop:10,marginRight:20}}>Tell me how you're feeling</Text>
            </TouchableOpacity>
        :
            <View >
                <Text style = {styles.time}>{moment(time).format('LT')}</Text>
                <TouchableOpacity  onPress = {()=>showJournal(time)} 
                    style = {{...styles.box,backgroundColor:color}}
                >
                        <View style = {styles.iconBox}>
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

const previewEntries = ({journals,date,showJournal})=>{

    //fake data
    const moodMap = {
        happy: {path:require('../../assets/preview/happy.png'), color: '#FBC423'},
        angry: {path:require('../../assets/preview/angry.png'), color: '#F09696'},
        sad: {path:require('../../assets/preview/sad.png'), color: '#DF9AFF'},
        scared: {path:require('../../assets/preview/scared.png'), color: '#A5DFF0'},
        excited: {path:require('../../assets/preview/excited.png'), color: '#AED4B0'},
        worried: {path:require('../../assets/preview/worried.png'), color: '#E8B285'}
    }

    
    
    const journalList = journals.map((journal,i)=>(
        <Box  color = {moodMap[journal.mood].color} image = {moodMap[journal.mood].path} key = {i} showJournal = {showJournal} journal = {journal.journal} mood = {journal.mood} time = {journal.createdAt}/>
    ))


    //useEffect(()=>{
    //    //console.log('before',render)
    //    //render = false
    //    //console.log('after',render)
    //},[])

    
    return (
        <View >
            <Text style = {styles.date}>{date}</Text>
            {journalList}
        </View>
    )
}

export default previewEntries

const styles = StyleSheet.create({
    iconBox:{
        width: '25%',
        backgroundColor:'white', 
        justifyContent:'center',
        alignItems:'center',
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5
    },
    box: {
        display: 'flex',
        height: 90,
        flexDirection:'row',
        borderRadius: 5,
        margin:'1.2%',
        marginTop:'2%',
        backgroundColor:'#edf2f4',
        shadowColor:`rgba(0, 0, 0, 0.15)`,
        shadowOpacity: 1,
        shadowOffset: {width:0,height:0},
        //borderWidth:1,

    },
    container:{
        margin:'2.5%',
        width: '92%',
        height: 130,
        marginTop: '0.5%',
        marginBottom: '2.5%',
        marginLeft:'3.5%',
        borderRadius:5
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
        marginLeft:'3%'

    },
    journalTitle: {
        textAlign:'left',
        marginLeft:'8%',
        paddingTop:'5%',
        paddingBottom:'5%',
        fontSize: 17,
    }
})