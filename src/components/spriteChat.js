import React, {useState} from 'react';
import { TextInput,ImageBackground, Text, View, TouchableOpacity, Image, Keyboard } from 'react-native';
import styles from '../stylesheets/spriteChatStyles';


export default spriteChat =props=> {

    const [showOptions,setShow] = useState(false)
    
    if(showOptions === false){
        Keyboard.dismiss()
    }

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.background} source={require('./images/spriteChat/spriteChatImg.png')}>
                <View style={styles.main}></View>
                <Image style={styles.fake} source={require('./images/spriteChat/fake.png')}></Image>
                <View style={{height: 70,backgroundColor:'#C4C4C4',justifyContent: "center",alignItems:'center',flexDirection:'row'}}>
                    <TextInput onFocus={()=>setShow(true)} style={{width: '80%',height: 45,backgroundColor:'white',borderRadius:20,paddingLeft:'5%',fontSize: 18,marginRight:'7%'}} placeholder='Enter Message'></TextInput>
                    <TouchableOpacity onPress={()=>setShow(!showOptions)}>
                        {showOptions ?
                        <View>
                        <Image source={require('./images/spriteChat/down.png')}></Image>
                    <TouchableOpacity style={{position:'absolute', right:65}}>
                        <Image source={require('./images/spriteChat/sendMessage.png')} />
                    </TouchableOpacity>
                        </View>
                        :
                        <Image source={require('./images/spriteChat/up.png')}></Image>
                    }
                    </TouchableOpacity>
                </View>
                

                {showOptions?
                <View style = {{height: '42.5%', backgroundColor: '#E5F2D8',}}>
                    
                    <View style = {{flexDirection:'row', justifyContent:'space-evenly', alignItems:'center',padding:'8%'}}>
                    <TouchableOpacity onPress = {()=>props.navigation.navigate('mindfulnessStack')}>
                        <Image source = {require('./images/spriteChat/Mindfullness.png')}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity onPress = {()=>props.navigation.navigate('Storytime')}>
                        <Image style = {{marginTop:'10%'}} source = {require('./images/spriteChat/StoryTime.png')}></Image>
                    </TouchableOpacity>
                    </View>
                        <Image style = {{marginLeft: '28%',marginTop: '3%'}} source = {require('./images/spriteChat/achievement.png')}></Image>
                </View>
                    :null}
            </ImageBackground>
        </View>
    )
}
