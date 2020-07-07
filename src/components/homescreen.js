import React from 'react';
import { Text, View, Button, ImageBackground, TouchableOpacity, Image } from 'react-native';
import styles from '../stylesheets/homescreenStyles';

const Homescreen = props => {
  return (
    <View style={styles.format}>
      <ImageBackground source={require('../../assets/splash_panel.png')} style={styles.image}>
        {/* <Text style={styles.text}>Inside</Text> */}
      
      <View style={styles.main}>
        <View style={styles.topBox}>

        </View>
        <Text>Homescreen</Text>

        <Button
          title='Home'
          onPress={() =>
            props.navigation.navigate('Splash')
          }
        />
      </View>

      <View style={styles.nav}>
        <View style={styles.navIcons}>
          <TouchableOpacity>
              <Image style={styles.homeIcon}
                source={require('../../assets/icon_home_selected.png')}/>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={styles.achieveIcon}
              source={require('../../assets/icon_achievements.png')} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={styles.profileIcon}
              source={require('../../assets/icon_profile.png')} />
          </TouchableOpacity>
        </View>
      </View>
      </ImageBackground>

    </View>
  );
}

export default Homescreen;