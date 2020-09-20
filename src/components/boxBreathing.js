import { Animated,TextInput,ImageBackground, StyleSheet,Text, View, TouchableOpacity, Image, Keyboard } from 'react-native';
import React, {useState,useEffect,useRef} from 'react';

const Intro = ({title,statArray,about,helpful,start})=>{

    //May use this later, dont need it for now
    const [voice,setVoice] = useState(false)

    return(
        <View style = {styles.container}>
            {/*<Intro/>*/}
            <View style = {styles.upper}></View>
            <View style = {styles.lower}>
                <Text style = {styles.title}>Box Breathing</Text>
                <View style = {styles.statsRow}>

                <View>
                    <Text style = {styles.statType}>Time (mins)</Text>
                    <Text style = {styles.stats}>2</Text>
                </View>

                <View>
                    <Text style = {styles.statType}>Time(s) Completed</Text>
                    <View style = {{borderLeftWidth:2, borderRightWidth:2,width:130,borderColor:'#C4C4C4'}}>
                        <Text style = {styles.stats}>1</Text>
                    </View>
                </View>

                <View>
                    <Text style = {styles.statType}>Add to Favorite</Text>
                        <TouchableOpacity>
                            <Image style = {{marginLeft:'32%'}} source = {require('../../assets/favorite.png')}/>
                        </TouchableOpacity>
                </View>
                    
                </View>
                <Text style = {styles.sectionTitle}>About</Text>
                <Text style = {styles.descriptions}>2 minutes</Text>
                <Text style = {styles.descriptions}>Take a walk with Sprite while you work on a calming breathing pattern</Text>

                <Text style = {styles.sectionTitle}>Helpful when..</Text>
                <Text style = {styles.descriptions}>you are feeling very sad, mad, scared, or worried. This can help you feel more calm</Text>

                {/*<Text style = {styles.title}>Spoken Instructions</Text>*/}
                {/*Slider here*/}

                {/*<View style = {styles.switchContainer}>
                <TouchableOpacity onPress = {()=>setVoice(true)} style = {{...styles.switchLeft,backgroundColor:voice?'#2E7D32':null}}>
                    <Text style = {{...styles.switchText,color: voice? 'white': 'black'}}>ON</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress = {()=>setVoice(false)} style = {{...styles.switchRight,backgroundColor:!voice?'#2E7D32':null}}>
                    <Text style = {{...styles.switchText, color: !voice? 'white': 'black'}}>OFF</Text>
                </TouchableOpacity>
                </View>*/}

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
    const [start,setStart] = useState(false)
    const length1 = useRef(new Animated.Value(0)).current
    const length2 = useRef(new Animated.Value(300)).current
    const length3 = useRef(new Animated.Value(310)).current
    const length4 = useRef(new Animated.Value(0)).current
    const move1 = useRef(new Animated.ValueXY({x:20,y:330})).current
    //const height = useRef(new Animated.Value(10)).current

    useEffect(()=>{

    Animated.sequence([
        Animated.timing(
            move1,
            {
                toValue: {x:300,y:330},
                useNativeDriver: false,
                duration:4000,

            }
            
        ),

        Animated.timing(
            move1,
            {
                toValue: {x:300,y:60},
                useNativeDriver: false,
                duration:4000,
            }
        ),
        
        Animated.timing(
            move1,
            {
                toValue: {x:20,y:60},
                useNativeDriver: false,
                duration:4000,
            }
        ),

        Animated.timing(
            move1,
            {
                toValue: {x:20,y:330},
                useNativeDriver: false,
                duration:4000,
            }
        )
        ]).start()




        Animated.timing(length1,{
            toValue: 290,
            duration: 4000,
            useNativeDriver:false
        }).start()

        
        Animated.timing(length2,{
            toValue: 0,
            delay:4000,
            duration: 4000,
            useNativeDriver:false
        }).start()

        Animated.timing(length3,{
            toValue: 0,
            delay:8000,
            duration: 4000,
            useNativeDriver:false
        }).start()

        Animated.timing(length4,{
            toValue:285,
            delay:12000,
            duration: 4000,
            useNativeDriver:false
        }).start()

    },[])

    const animated1 = {
        position: 'absolute',
        left:60,
        width: length1,
        borderWidth:10,
        borderColor:'#7990AF',
        zIndex:3,
    }

    const animated2 = {
        position: 'absolute',
        top:114,
        right:64,
        width: 10,
        borderWidth:10,
        height:length2,
        borderColor:'#CFDCEF',
        zIndex:2
    }

    const animated3 = {
        position: 'absolute',
        top:134,
        left:40,
        width: length3,
        borderWidth:10,
        borderColor:'#CFDCEF',
    }

    const animated4 = {
        position: 'absolute',
        top:115,
        left:60,
        borderWidth:10,
        height:length4,
        borderColor:'#7990AF',
        zIndex:1,
    }

    //const animated3 = {

    //}

    return (
        //<Intro/>
        <View style = {styles.container}>
            
            {/*<View style = {styles.cover}></View>*/}
            <Animated.View style = {[animated1]}>
            </Animated.View>
            <Animated.View style = {styles.bottomFrame}></Animated.View>
            <View style = {styles.barTop}></View>
            <Animated.View style = {[animated3]}>
            </Animated.View>

            <View style = {styles.barRight}></View>
            <Animated.View style = {[animated2]}>
            </Animated.View>
            <Animated.View style = {[animated4]}>
            </Animated.View>
            <View style = {styles.coverLeft}></View>
            <View style = {styles.coverTop}></View>
            <View style = {styles.coverCorner}></View>
            <Animated.View style = {[move1.getLayout(),{position: 'absolute',zIndex:5}]}>
                <Image source = {require('../../assets/boxBreathing/spirit.png')} />
            </Animated.View>
        </View>
    )
}


const styles = StyleSheet.create({
    bottomFrame: {
        position: 'absolute',
        top:394,
        left:60,
        borderWidth:10,
        width:280,
        //borderColor:'red',
        borderColor:'#CFDCEF',
        zIndex:0,
    },

    coverCorner:{
        position: 'absolute',
        top:134,
        left:30,
        borderWidth:10,
        width: 30,
        borderColor:'white',
    },
    coverTop:{
        position: 'absolute',
        top:115,
        width:300,
        borderWidth:10,
        borderColor:'white',
        zIndex:4,
    },
    coverLeft:{
        position: 'absolute',
        top:134,
        left:60,
        borderWidth:10,
        height:280,
        borderColor:'#CFDCEF',
        zIndex:0,
    },
    barRight:{
        position: 'absolute',
        top:114,
        right:64,
        width: 10,
        borderWidth:10,
        borderColor:'#7990AF',
        height:300,
    },
    barTop:{
        position: 'absolute',
        top:134,
        left:40,
        width: 290,
        borderWidth:10,
        borderColor:'#7990AF',
    },
    cover:{
        width:50,
        height:200,
        borderWidth:1,
        position: 'absolute',
        left:0,
        zIndex:1,
        backgroundColor:'white'
    },
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },
    stats:{
        fontSize: 20,
        textAlign:'center',
        marginTop:'2%'
    },
    statType:{
        textAlign:'center',
        color: '#4F7947',
        width: 125,
        marginBottom:'5%'
    },
    statsRow: {
        marginTop:'5%',
        flexDirection:'row',
        marginLeft: '-2%'
    },
    title:{
        fontSize: 24,
        fontWeight: '700',
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
    sectionTitle :{
        fontSize: 20,
        paddingTop: '5%'
    },
    descriptions: {
        color: '#7B7B7B',
        paddingTop: '2%',
        //paddingBottom: '%'
    }
    
})

export default boxBreathing