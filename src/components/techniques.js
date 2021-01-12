import React, {useState} from 'react';
import { Image,View, TouchableOpacity } from 'react-native';
import Text from './Text';
import styles from '../stylesheets/techniques.styles'


export default Techniques =()=> {
    const techniques = [
        {   
            image: require('../../assets/images/Technique/five.png'), 
        },
        {
            image: require('../../assets/images/Technique/four.png'), 
        },
        {
            image: require('../../assets/images/Technique/three.png'), 
        },
        {
            image: require('../../assets/images/Technique/two.png'), 
        },
        {
            image: require('../../assets/images/Technique/one.png'), 
        },    
    ]
    const [current, setCurrent] = useState(0)
    
 return (
        <View style={styles.container} >
            <Text style={styles.text} >5-4-3-2-1 Technique</Text>
            <Image style={styles.paper} source={require('../../assets/images/Technique/background.png')} />
            <Image style={styles[`image${current}`]} source={techniques[current].image} />
            { current === 2 ? 
                <> 
                 <Text style={styles.text1}>What do you call a bear without an ear? A bee!</Text>

                <Image style={styles.ear} source={require('../../assets/images/Technique/ear.png')}/> 
                 <Text style={styles.text2}>Acknowledge THREE things you hear.</Text>
                </>

                : null
            }
            
            { current !== 4 ?
            <TouchableOpacity onPress={() => setCurrent(current + 1)} style={styles.rightArrow} >
                <Image source={require('../../assets/images/misc/rightArrow.png')} />
            </TouchableOpacity>
            :
                <View style={styles.rightArrow} >
                    <Image source={require('../../assets/images/misc/disabledRight.png')}/>
                </View>
            }


            { current !== 0 ?
            <TouchableOpacity onPress={() => setCurrent(current - 1)} style={styles.leftArrow}>
            <Image source={require('../../assets/images/misc/leftArrow.png')} />
            </TouchableOpacity>
            :
            <View style={styles.leftArrow} >
                <Image source={require('../../assets/images/misc/disabledLeft.png')} />
            </View>
        }
       </View>
   )
}