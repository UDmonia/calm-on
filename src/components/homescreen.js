import React from 'react';
import { Text, View, Button, ImageBackground } from 'react-native';
import styles from '../stylesheets/homescreenStyles';

const Homescreen = props => {
  return (
    <View style={styles.format}>
      <ImageBackground source={require('../../assets/splash_panel.png')} style={styles.image}>
        {/* <Text style={styles.text}>Inside</Text> */}
      <Text>Homescreen</Text>

      <Button
        title='Home'
        onPress={() =>
          props.navigation.navigate('Splash')
        }
      />
      
      </ImageBackground>

    </View>
  );
}

export default Homescreen;