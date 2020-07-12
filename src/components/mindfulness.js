import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import styles from '../stylesheets/mindfulness.styles'

export default mindfulness =props=> {
    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>Here are some activities you can try to think more positive</Text>

            <TouchableOpacity onPress = {()=>props.navigation.navigate('Techniques')}>
            <Image style = {styles.image} source = {require('./images/MindfulnessNav/1.png')}/>
            </TouchableOpacity>

            <TouchableOpacity onPress = {()=>props.navigation.navigate('BigSqueeze')}>
            <Image style = {styles.image} source = {require('./images/MindfulnessNav/2.png')}/>
            </TouchableOpacity>
            
            <TouchableOpacity onPress = {()=>props.navigation.navigate('MonsterHug')}>
            <Image style = {styles.image} source = {require('./images/MindfulnessNav/3.png')}/>
            </TouchableOpacity>

            <TouchableOpacity>
            <Image style = {styles.image} source = {require('./images/MindfulnessNav/4.png')}/>
            </TouchableOpacity>

        </View>
    )
}
