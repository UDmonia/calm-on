import React, {useState} from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import styles from '../stylesheets/techniques.styles'


export default Techniques =()=> {
    const techniques = [
        {
            image: require('./images/Technique/one.png'), 
        },    
        {
            image: require('./images/Technique/two.png'), 
        },
        {
            image: require('./images/Technique/four.png'), 
        },
        {   image: require('./images/Technique/five.png'), 
        },
       
    ]
    const [current,setCurrent] = useState(0)
   
    
 return(
        <View style = {styles.container}>
        <Text style = {styles.text} >5-4-3-2-1 Technique</Text>
        <Image style = {styles.paper} source = {require('./images/Technique/background.png')}/>
        <Image style = {styles.image} source = {techniques[current].image}/>
           
        {current !== 3?
          <TouchableOpacity onPress = {()=>setCurrent(current+1)} style = {styles.rightArrow} >
            <Image source = {require('./images/misc/rightArrow.png')}/>
          </TouchableOpacity>
        :
            <View style = {styles.rightArrow} >
                <Image source = {require('./images/misc/disabledRight.png')}/>
            </View>
        }


        {current !== 0?
          <TouchableOpacity onPress = {()=>setCurrent(current-1)} style = {styles.leftArrow}>
           <Image  source = {require('./images/misc/leftArrow.png')}/>
           </TouchableOpacity>
           :
           <View style = {styles.leftArrow} >
            <Image source = {require('./images/misc/disabledLeft.png')}/>
           </View>
       }

       </View>
   )
}