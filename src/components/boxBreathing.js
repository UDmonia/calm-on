import { Animated,Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import React, {useState,useEffect,useRef,useContext} from 'react';
import styles from '../stylesheets/boxBreathingStyles'
import Node from './Node'


const Intro = ({title,statArray,about,helpful,start})=>{

    //May use this later, dont need it for now
    const [voice,setVoice] = useState(false)
    const [startActivity,setStartActivity] = useState(false)

    return(
            <View>
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

                {/*<TouchableOpacity onPress = {()=>start(true)} style = {styles.start}>*/}
                <TouchableOpacity onPress = {()=>start(true)} style = {styles.start}>
                    <Text style = {styles.startText}>Start Box Breathing</Text>
                </TouchableOpacity>

            </View>

            </View>
    )
}

const IntroStory =({start})=>{
    const startAnimation = useContext(Context)
    const [page,setPage] = useState(0)

    //Modify this array to add more screens
    const storyMap = [
        //{question:'I love the beach! The sound of the waves is so relaxing, and I love the soft sand on my toes.',
        //answers:['Continue',],background: 'forest' },

        //{question:'For this activity, find a place where you can go 4 steps in any direction so we can walk together!',
        //answers:["I'm there!","I'll imagine it!",],background: 'beach'},

        //{question:'While we walk and breathe, follow the instructions on the sand. Click “Go” when you’re ready to start!',
        //answers:['Go!'],background: 'city'},

        // Calm On 2.1 updated screen
        {question:"While we walk and breathe, follow the instructions on the sand. Click 'Go' when you're ready to start!",
        answers:['Go',],background: 'forest' },

    ]

    const displayPrompt =()=>{
        
    }

    //Implementing story progression mechanism
    return (
        <View style = {styles.introContainer}>

            {/*Add background image here*/}
            {/*<ImageBackground source = {require("../../assets/storytime_background.png")} style = {styles.backgroundImage}>*/}
            {/*<TouchableOpacity onPress = {()=>startAnimation(true)}><Text>start animation</Text></TouchableOpacity>*/}
            <View style = {styles.prompt}>
                <View style = {styles.questionBox}>
                    <Text style = {{color:'white',textAlign:'center'}}>{storyMap[page].question}</Text>
                </View>

            <View>
                {storyMap[page].answers.map((answer,key)=>(
                <TouchableOpacity style = {styles.answers} onPress = {page !== storyMap.length-1?()=>setPage(page+1):()=>start(true)} key = {key}>
                    <Text style = {{textAlign:'center'}}>{answer}</Text>
                </TouchableOpacity>
                ))}
            </View>

            </View>
            {/*</ImageBackground>*/}
        </View>
    )
}

//Use this hook to pass startAnimation function from root to children
const Context = React.createContext(null)


const boxBreathing =()=>{
    const [start,setStart] = useState(false)
    const [startAnimation,setStartAnimation] = useState(false)
    const [text,setText] = useState('')
    const [timer,setTimer] = useState(1)
    const getReady = 3000
    const length1 = useRef(new Animated.Value(0)).current
    const length2 = useRef(new Animated.Value(300)).current
    const length3 = useRef(new Animated.Value(310)).current
    const length4 = useRef(new Animated.Value(0)).current
    const move1 = useRef(new Animated.ValueXY({x:20,y:330})).current

    useEffect(()=>{
        if (startAnimation) {
        //if (timer != 16) {
        //    setInterval(()=>{
        //        setTimer(timer+1)
        //        if (timer % 4 === 0) {
        //            setTimer(1)
        //        }
        //    },1000)
        //}
        //console.log(timer)
        //else{
        //    setTimer(1)
        //}
            
        
        setTimeout(()=>{
            setText('Get Ready')
        },1000)
        setTimeout(()=>{ 
            setText('Start!')
        },2400)

        setTimeout(()=>{
            setText('Breathe In...')
        },3000)

        setTimeout(()=>{
            setText('Hold Air In...')
        },7000)

        setTimeout(()=>{
            setText('Breathe Out...')
        },11000)

        setTimeout(()=>{
            setText('Hold Air Out...')
        },15000)

        setTimeout(()=>{
            setText('Finished!')
        },19000)



    Animated.sequence([
        Animated.timing(
            move1,
            {
                toValue: {x:300,y:330},
                useNativeDriver: false,
                delay:getReady,
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
            delay:getReady,
            useNativeDriver:false
        }).start()

        
        Animated.timing(length2,{
            toValue: 0,
            delay:4000+getReady,
            duration: 4000,
            useNativeDriver:false
        }).start()

        Animated.timing(length3,{
            toValue: 0,
            delay:8000+getReady,
            duration: 4000,
            useNativeDriver:false
        }).start()

        Animated.timing(length4,{
            toValue:285,
            delay:12000+getReady,
            duration: 4000,
            useNativeDriver:false
        }).start()
    }

    console.log(startAnimation)

    return ()=>{
        //Clean up here
    }

    },[timer,start,startAnimation])

    const animated1 = {
        position: 'absolute',
        left:'14.5%',
        //left:60,
        top: 395,
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

    return (
        <View>
            <ImageBackground source = {require("../../assets/boxBreathing/beach.png")} style = {styles.backgroundImage}>
        {!start?
            <Intro start = {setStart}/>
            :
        <View style = {styles.container}>
            <Text style = {styles.text}>
                {text}
                {/*{timer}*/}
            </Text>

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
            {!startAnimation &&
                <View style = {{position:'absolute',top:20,}}>
                    <IntroStory start = {setStartAnimation}/>
                </View>
            }
        </View>
        }
            </ImageBackground>
        </View>

    )
}

export default boxBreathing