import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity, Image } from 'react-native';
import styles from '../stylesheets/splashStyles';

const Splash = props => {
    return (
        <View style={styles.format}>
            <ImageBackground source={require('../../assets/image73.png')} style={styles.image}>

            <TouchableOpacity onPress={() => props.navigation.navigate('loginSignup') }>
                <Image style={styles.btn}
                    source={require('../../assets/start_btn.png')}
                />
            </TouchableOpacity>


            </ImageBackground>
        </View>
    );
}


export default Splash;