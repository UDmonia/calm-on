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
                <Image style={styles.fake} source={require('./images/spriteChat/fake.png')} />
                <View style={styles.sendMessage}>
                    <TextInput onFocus={() => setShow(true)} style={styles.sendMessageBox} placeholder='Enter Message'></TextInput>
                    <TouchableOpacity onPress={()=>setShow(!showOptions)}>
                        {showOptions ?
                        <View>
                        <Image style={styles.downBtn} source={require('./images/spriteChat/down.png')} />
                    <TouchableOpacity style={styles.sendMessageBtn}>
                        <Image style={styles.sendMessageBtn} source={require('./images/spriteChat/sendMessage.png')} />
                    </TouchableOpacity>
                        </View>
                        :
                        <Image source={require('./images/spriteChat/up.png')} />
                    }
                    </TouchableOpacity>
                </View>
                

                {showOptions ?
                <View style={styles.optionBox}>
                    <View style={styles.optionBoxItems}>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('Storytime')}>
                            <Image style={styles.storytimeBtn} source={require('./images/spriteChat/StoryTime.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('mindfulnessStack')}>
                            <Image style={styles.mindfulnessBtn} source={require('./images/spriteChat/Mindfullness.png')} />
                        </TouchableOpacity>

                    </View>
                    <Image style={styles.achievementBtn} source={require('./images/spriteChat/achievement.png')}></Image>
                </View>
                    :null}
            </ImageBackground>
        </View>
    )
}
