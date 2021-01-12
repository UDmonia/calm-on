import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import Text from './Text';
import styles from '../stylesheets/mindfulness.styles'

export default mindfulness = props=> {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Here are some activities you can try to think more positively</Text>

            <TouchableOpacity onPress={()=>props.navigation.navigate('Techniques')}>
            <Image style={styles.image} source={require('../../assets/images/MindfulnessNav/1.png')}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>props.navigation.navigate('BigSqueeze')}>
            <Image style={styles.image} source={require('../../assets/images/MindfulnessNav/2.png')}/>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={()=>props.navigation.navigate('MonsterHug')}>
            <Image style={styles.image} source={require('../../assets/images/MindfulnessNav/3.png')}/>
            </TouchableOpacity>

            <TouchableOpacity>
            <Image style={styles.image} source={require('../../assets/images/MindfulnessNav/4.png')}/>
            </TouchableOpacity>

        </View>
    )
}
