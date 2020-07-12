import React, {useState} from 'react';
import { TextInput,ImageBackground, Text, View, TouchableOpacity, Image, Keyboard } from 'react-native';


export default spiritChat =props=> {

    const [showOptions,setShow] = useState(false)
    
    if(showOptions === false){
        Keyboard.dismiss()
    }

    return (
        <View style = {{flex: 1, flexDirection: "column"}}>
            <ImageBackground style = {{flex: 1,resizeMode: "cover",justifyContent: "flex-end"}} source = {require('./images/SpiritChat/spiritChatImg.png')}>
            <Image style = {{position:'absolute', top: '3%', left:'5%'}} source = {require('./images/SpiritChat/fake.png')}></Image>
            <View style = {{height: 70,backgroundColor:'#C4C4C4',justifyContent: "center",alignItems:'center',flexDirection:'row'}}>
                <TextInput onFocus = {()=>setShow(true)} style = {{width: '80%',height: 45,backgroundColor:'white',borderRadius:20,paddingLeft:'5%',fontSize: 18,marginRight:'7%'}} placeholder = 'Enter Message'></TextInput>
                <TouchableOpacity onPress = {()=>setShow(!showOptions)}>
                    {showOptions?
                    <View>
                    <Image  source = {require('./images/SpiritChat/down.png')}></Image>
                <TouchableOpacity style = {{position:'absolute', right:65}}>
                    <Image  source = {require('./images/SpiritChat/sendMessage.png')} />
                </TouchableOpacity>
                    </View>
                    :
                    <Image  source = {require('./images/SpiritChat/up.png')}></Image>
                }
                </TouchableOpacity>
            </View>
            

            {showOptions?
            <View style = {{height: '42.5%', backgroundColor: '#E5F2D8',}}>
                
                <View style = {{flexDirection:'row', justifyContent:'space-evenly', alignItems:'center',padding:'8%'}}>
                <TouchableOpacity onPress = {()=>props.navigation.navigate('mindfulnessStack')}>
                    <Image source = {require('./images/SpiritChat/Mindfullness.png')}></Image>
                </TouchableOpacity>

                <TouchableOpacity onPress = {()=>props.navigation.navigate('Storytime')}>
                    <Image style = {{marginTop:'10%'}} source = {require('./images/SpiritChat/StoryTime.png')}></Image>
                </TouchableOpacity>
                </View>
                    <Image style = {{marginLeft: '28%',marginTop: '3%'}} source = {require('./images/SpiritChat/achievement.png')}></Image>
            </View>
                :null}
            </ImageBackground>
        </View>
    )
}
