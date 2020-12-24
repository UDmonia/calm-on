import React, {useState} from 'react';
import { Image,View, TouchableOpacity } from 'react-native';
import Text from './Text';
import styles from '../stylesheets/techniques.styles'

export default BigSqueeze =() => {
    const screens = [
        {
            image: require('../../assets/images/BigSqueeze/bigSq1.png')
        },
        {
            image:require('../../assets/images/BigSqueeze/bigSq2.png')
        }
    ]

    const [current,setCurrent] = useState(0)
        
    return (
        <View style={styles.container}>
        <Text style={styles.text} >The Big Squeeze</Text>
        <Image source={require('../../assets/images/BigSqueeze/background.png')}/>
        <Text style={styles.bigSqueezeAngry}>Are you feeling angry?</Text>
        <Image style={styles[`imageBigSqueeze${current}`]} source={screens[current].image}/>
         
        {current !== 1 ? 
            <TouchableOpacity onPress={()=>setCurrent(current+1)} style={styles.rightArrow} >
                <Image source={require('../../assets/images/misc/rightArrow.png')}/>
            </TouchableOpacity>
         :
            <View style={styles.rightArrow}>
                <Image source={require('../../assets/images/misc/disabledRight.png')}/>
            </View>
         }

         {current !==0 ?
            <TouchableOpacity onPress={()=>setCurrent(current-1)} style={styles.leftArrow}>
                <Image  source={require('../../assets/images/misc/leftArrow.png')}/>
            </TouchableOpacity>
         :
            <View style={styles.leftArrow} >
                <Image  source={require('../../assets/images/misc/disabledLeft.png')}/>
            </View>
         }

     </View>

    )
        
}