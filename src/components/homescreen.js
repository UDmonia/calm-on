import React, { useState } from 'react';
import { Text, View, Button, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import { Dimensions } from 'react-native';

import styles from '../stylesheets/homescreenStyles';


const sprite = {
  img: require('../../assets/sprite.gif'),
  name: 'Sprite',
  description: 'Hello, I am the great Sprite. I’m the coolest fairy of them all. I have some of the most interesting stories to share! Let’s explore our feelings together!'
}

const flynn = {
  img: require('../../assets/flynn.gif'),
  name: 'Flynn',
  description: 'Yo, I’m Flynn! I can teach you how to be strong and healthy like me through exercise and dance!'
}

const aurora = {
  img: require('../../assets/aurora.gif'),
  name: 'Aurora',
  description: 'Hi, I’m Aurora! I have some fun activities that can inspire that awesome mind of yours. I can’t wait to color and journal with you!'
};

const Homescreen = props => {

  let [spirits, setSpirits] = useState([aurora, sprite, flynn]);
  let [currentSpirit, setCurrentSpirit] = useState(aurora);
  // let [currentSwipe, setCurrentSwipe] = useState(0);
  
  // function handleSwipeLeft() {
  //   if(currentSwipe < 2){
  //     setCurrentSwipe += 1;
  //   }
  //   setCurrentSpirit = spirits[currentSwipe]
  // }
  
  // function handleSwipeRight() {
  //   if(currentSwipe > 0){
  //     setCurrentSwipe -= 1;
  //   }
  //   setCurrentSpirit = spirits[currentSwipe]
  // }

  // function updateDescription(event) {
  //   // let scrollX = scrollView.getScrollX();
  //   // console.log(scrollX);
  //   console.log(event.nativeEvent.contentOffset.y);
  // }

  // updateDescription();
  let xOffset;

  function handleScroll(e) {
    xOffset = e.nativeEvent.contentOffset.x;
    console.log(xOffset);

    updateSpirit(xOffset);
    // console.log(Dimensions.get('window').width)     //= 375
  }

  function updateSpirit(x = 0) {
    if (x < 375) {
      currentSpirit = spirits[0];
    } else if (x >= 375 && x < 750) {
      currentSpirit = spirits[1];
    } else {
      currentSpirit = spirits[2];
    }

    console.log(currentSpirit.name);
  }

  

  return (
    <View style={styles.format}>
      <ImageBackground source={require('../../assets/splash_panel.png')} style={styles.image}>
      
      <View style={styles.main}>
        <View style={styles.topBox}>
          {/* CHANGE NAME TO USERNAME OR NAME????? */}
          <Text style={styles.topBoxTextName}>Hi Joe!</Text>
          <Text style={styles.topBoxText}>Scroll through your three fairy friends and pick one to learn more about them.</Text>
        </View>
    <View style={styles.scroll}>
      <ScrollView snapToInterval={Dimensions.get('window').width} 
        decelerationRate='fast' 
        horizontal 
        pagingEnabled='true' 
        showsHorizontalScrollIndicator={false}
        onScroll={event => handleScroll(event)}
        scrollEventThrottle={100}
        >
          {spirits.map(spirit => {

            return (
            <View key ={spirit.name}
              style={styles.scroll}
            >
              <Image 
                style={styles.spirit}
                source={spirit.img} />
            </View>
            )
          })}
      </ScrollView>
    </View>
        {/* COMMENT OUT LATER ON */}
        {/* <Button
          title='Home'
          onPress={() =>
            props.navigation.navigate('Splash')
          }
        /> */}
        {/* BEEPBOOP */}
        
        {/* <GestureRecognizer style={styles.spirits}
          onSwipeLeft={() => handleSwipeLeft()}
          onSwipeRight={() => handleSwipeRight()}
          >
          <Image style={styles.spiritLeft}
            source={spirits[0].img} />
          
          <View style={styles.spiritCenterView}>
            <Image style={styles.spiritCenter}
              source={spirits[1].img} />
          </View>

          <Image style={styles.spiritRight}
            source={spirits[2].img} />
        </GestureRecognizer> */}

        <TouchableOpacity>
          <Image style={styles.btn}
            source={require('../../assets/homescreen_btn.png')} />
        </TouchableOpacity>

        <View style={styles.bottomBox}>
          <Text style={styles.bottomBoxTextName}>{currentSpirit.name}</Text>
          <Text style={styles.bottomBoxTextDescription}>{currentSpirit.description}</Text>
          {/* <Text style={styles.bottomBoxTextDescription}>{currentSpirit.description}</Text> */}
        </View>

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