import React from 'react';
import { Image,View, TouchableOpacity } from 'react-native';
import Text from './Text';
import styles from '../stylesheets/techniques.styles'

export default MonsterHug =()=>{
    return(
        <View style = {styles.container}>
        <Text style = {styles.text} >Monster Hug</Text>
         <Image source = {require('../../assets/images/MonsterHug/monsterHug.png')}/>
     </View>
    )
}