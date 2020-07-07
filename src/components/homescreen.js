import React from 'react';
import { Text, View, Button, ImageBackground, TouchableOpacity, Image } from 'react-native';
import styles from '../stylesheets/homescreenStyles';

const Homescreen = props => {

  const sprite = {
    img: require('../../assets/sprite.gif'),
  }
  
  const flynn = {
    img: require('../../assets/flynn.gif'),
  }
  
  const aurora = {
    img: require('../../assets/aurora.gif'),
  };

  let spirits = [aurora.img, sprite.img, flynn.img];

  return (
    <View style={styles.format}>
      <ImageBackground source={require('../../assets/splash_panel.png')} style={styles.image}>
        {/* <Text style={styles.text}>Inside</Text> */}
      
      <View style={styles.main}>
        <View style={styles.topBox}>
          {/* CHANGE NAME TO USERNAME OR NAME????? */}
          <Text style={styles.topBoxTextName}>Hi Joe!</Text>
          <Text style={styles.topBoxText}>Scroll through your three fairy friends and pick one to learn more about them.</Text>
        </View>

        {/* COMMENT OUT LATER ON */}
        {/* <Button
          title='Home'
          onPress={() =>
            props.navigation.navigate('Splash')
          }
        /> */}
        {/* BEEPBOOP */}

        <Image style={styles.spiritLeft}
          source={spirits[0]} />
        
        <View style={styles.spiritCenterView}>
          <Image style={styles.spiritCenter}
            source={spirits[1]} />
        </View>
        <Image style={styles.spiritRight}
          source={spirits[2]} />
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