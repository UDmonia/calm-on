import { Animated,TextInput,ImageBackground, StyleSheet,Text, View, TouchableOpacity, Image, Keyboard } from 'react-native';
import React, {useState,useEffect} from 'react';

const Intro = ()=>{
    const [voice,setVoice] = useState(false)
    return(
        <View style = {styles.container}>
            {/*<Intro/>*/}
            <View style = {styles.upper}></View>
            <View style = {styles.lower}>
                <Text style = {styles.title}>About</Text>
                <Text style = {styles.descriptions}>2 minutes</Text>
                <Text style = {styles.descriptions}>Take a walk with Sprite while you work on a calming breathing pattern</Text>

                <Text style = {styles.title}>Helpful when..</Text>
                <Text style = {styles.descriptions}>you are feeling very sad, mad, scared, or worried. This can help you feel more calm</Text>

                <Text style = {styles.title}>Spoken Instructions</Text>
                {/*Slider here*/}

                <View style = {styles.switchContainer}>
                <TouchableOpacity onPress = {()=>setVoice(true)} style = {{...styles.switchLeft,backgroundColor:voice?'#2E7D32':null}}>
                    <Text style = {{...styles.switchText,color: voice? 'white': 'black'}}>ON</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress = {()=>setVoice(false)} style = {{...styles.switchRight,backgroundColor:!voice?'#2E7D32':null}}>
                    <Text style = {{...styles.switchText, color: !voice? 'white': 'black'}}>OFF</Text>
                </TouchableOpacity>
                </View>

                <TouchableOpacity style = {styles.start}>
                    <Text style = {styles.startText}>Start Box Breathing</Text>
                </TouchableOpacity>

                <Text></Text>
            </View>
        </View>
    )
}

const boxBreathing =()=>{
    //const [location,setLocation] = useState({x:100,y:500})
    const location = new Animated.ValueXY({x:100,y:400})

    useEffect(()=>{
        Animated.timing(location,{
            toValue: {x:200,y:400},
            useNativeDriver:false
        }).start()
    },[])

    return (
        <View style = {styles.container}>
            <View style = {{borderWidth:10,height:300,width:300,borderColor:'#CFDCEF'}}>
            </View>
            <Animated.View style = {location.getLayout()}>
                <View style = {{borderWidth:10,height:10,width:300,borderColor:'#7990AF'}}>
                </View>
            </Animated.View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    startText:{
        textAlign:'center',
        fontSize:18,
        color:'white'
    },
    start:{
        display:'flex',
        height: 50,
        width: 250,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#2E7D32',
        marginTop: '10%',
        marginLeft: '15%'

    },
    switchText:{
        fontSize:22,
        textAlign:'center'
    },
    switchContainer:{
        flexDirection:'row',
        marginTop:'3%'
    },
    switchLeft:{
        height: 50,
        width: 100,
        borderWidth:2,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderBottomLeftRadius:25,
        borderTopLeftRadius:25,
        borderColor: '#2E7D32'
    },
    switchRight:{
        height: 50,
        width: 100,
        borderWidth:2,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderBottomRightRadius:25,
        borderTopRightRadius:25,
        borderColor: '#2E7D32'
    },
    upper:{
        height: '40%'
    },
    lower: {
        backgroundColor:'white',
        height: '60%',
        width: '100%',
        paddingLeft: '5%',
        paddingTop: '8%'
    },
    title :{
        fontSize: 25,
    },
    descriptions: {
        color: '#7B7B7B',
        paddingTop: '2%',
        paddingBottom: '3%'
    }
    
})

export default boxBreathing