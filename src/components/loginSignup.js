import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import styles from '../stylesheets/splashStyles';

const LoginSignup = props => {
    return (
        <View style={styles.format}>
            <Text>do whatever you want with this section Jack -Cliff</Text>
            <Button 
                title='Home'
                onPress={() => 
                    props.navigation.navigate('Splash')
                }
            />
        </View>
    )
}

export default LoginSignup;