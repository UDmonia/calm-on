import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import styles from '../stylesheets/techniques.styles'

export default MonsterHug =()=>{
    return(
        <View style = {styles.container}>
        <Text style = {styles.text} >Monster Hug</Text>
         <Image source = {require('../../assets/images/MonsterHug/monsterHug.png')}/>
     </View>
    )
}