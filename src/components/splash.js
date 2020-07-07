import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import styles from '../stylesheets/splashStyles';

const Splash = props => {
    return (
        <View style={styles.format}>
        <ImageBackground source={require('../../assets/image73.png')} style={styles.image}>
            <Text>Splash Page</Text>
            <Button 
                title='Signup'
                onPress={() => 
                    props.navigation.navigate('loginSignup')
                }
                />

            <Button 
                title='Homescreen'
                onPress={() => 
                    props.navigation.navigate('homescreen') 
                }
                />

        </ImageBackground>
        </View>
    );
}


export default Splash;