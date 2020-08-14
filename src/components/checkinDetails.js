import React from 'react'
import {ImageBackground,Text, View, Image , StyleSheet} from 'react-native';
import { TouchableOpacity} from 'react-native-gesture-handler';
import moment from 'moment'
import { useNavigation } from '@react-navigation/native';

export default checkinDetails =({route})=>{
    const navigation = useNavigation()
    const {entry} = route.params
    return(
<View style = {styles.format}>
    <ImageBackground source={require('../../assets/splash_panel.png')} style = {styles.background}>
    <View style = {styles.main}>
        <View style = {styles.calendar}>
            <View style = {styles.toggle}>

                <Image style = {styles.hangerLeft} source = {require('../../assets/hanger.png')}/>
                <Image style = {styles.hangerRight} source = {require('../../assets/hanger.png')}/>

                <Text style = {styles.text}>{moment(entry.date).format('dddd, LL')}</Text>
                </View>
            <View style = {styles.container}>
                <View style = {styles.upper}>
                    <Text style = {styles.title}>Today I'm Feeling {entry.mood}</Text>
                    <Image source = {require('../../assets/Scared.png')}/>
                    <Text numberOfLines = {40} style = {styles.journal}>{entry.journal}</Text>
                </View>

                <View style = {styles.lower}>
                    <Image source = {require('../../assets/banner.png')}/>
                    <View style = {styles.activities}>
                        <TouchableOpacity style = {styles.option}>
                            <TouchableOpacity  >
                                <Text>Milk Milk Milk</Text>
                        </TouchableOpacity>

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

const styles = StyleSheet.create({
    container:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    upper:{
        display:'flex',
        width: '90%',
        //borderWidth: 1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:'8%'
    },
    journal:{
        width:320,
        height:180,
        borderWidth:1,
        marginTop:'8%',
        fontSize:14,
        borderColor:'#C5C5C5',
        borderRadius: 6,
        padding: '4%',
        fontWeight:'500',

    },
    title: {
        fontSize:18,
        fontWeight:'500',
        marginBottom:'8%'
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
    }


})