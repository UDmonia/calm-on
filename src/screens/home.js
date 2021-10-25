import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import styles from "../stylesheets/homeStyles";
import { useSelector } from "react-redux";
import { Dimensions } from "react-native";
import { windowWidth } from "../util/windowDimensions.js";
import { sprite, aurora, flynn } from "../data/characterData";
import { screenWidthThreshold } from "../util/thresholds";

const checkInExists = () => {
  var res = false;
  const checkIns = [];
  //useSelector((state) =>
  //  state.session.user.checkIns ? state.session.user.checkIns : []
  //);
  for (var i = 0; i < checkIns.length; i++) {
    const curDate = new Date(checkIns[i].date);
    const todaysDate = new Date();

    if (todaysDate.toDateString() == curDate.toDateString()) {
      res = false;
      break;
    } else {
      res = true;
    }
  }
  return res;
};

const Home = ({ props, navigation: { navigate } }) => {
  if (checkInExists()) {
    navigate("DailyCheckIn");
  }
  //const userName = "Jack";
  const getUser = useSelector((state) =>
    state.session.user && state.session.user.name
  );

  const [userName, setUsername] = useState(null);

  if (userName === "user") {
    console.log("Home -> loginSignup: userPrompt=true userlogin=false");
    navigate("loginSignup", { userPrompt: true, userLogin: false });
  }
  let [spirits, setSpirits] = useState([sprite, flynn, aurora]);
  let spirit = spirit || sprite;
  let [currentSpirit, setCurrentSpirit] = useState(spirit);
  let xOffset;
  let screenWidth = Dimensions.get("window").width;
  const scrollViewRef = useRef(null);

  function handleScroll(e) {
    xOffset = e.nativeEvent.contentOffset.x;
    updateSpirit(xOffset);
  }
  
  const handleChange = (direction) => {
    let newFairy = spirits.findIndex(fairy => fairy == currentSpirit)
    let changeFairy;
    if(direction == 'back') {
      changeFairy = newFairy - 1
    } else {
      changeFairy = newFairy + 1
    }
    if (scrollViewRef.current !== null) {
      scrollViewRef.current.scrollTo({
           x: screenWidth * (changeFairy),
          animated: true,
      });
    }
  }


  function updateSpirit(x = 0) {
    if (x < screenWidth / 2) {
      spirit = spirits[0];
    } else if (x < screenWidth * 1.5) {
      spirit = spirits[1];
    } else {
      spirit = spirits[2];
    }

    if (currentSpirit !== spirit) {
      setCurrentSpirit(spirit);
    }
  }

  function handleBtnPress() {
    navigate("CharacterChat", {
      curCharacter: currentSpirit,
      name: currentSpirit.name,
      headerColor: currentSpirit.characterColor,
    });
  }

  useEffect(()=>{
    if (getUser) {
      setUsername(getUser);
    }
  },[getUser])

  return (
    <ImageBackground
      source={require("../../assets/images/splash_panel.png")}
      style={styles.main}
      imageStyle={styles.imageTint}
    >
      <View style={styles.inner}>
        <View style={styles.topBox}>
          <Text style={styles.topBoxTextName}>Hi {userName}!</Text>
          <Text style={styles.topBoxText}>
            Scroll through your three fairy friends and pick one to learn more
            about them.
          </Text>
        </View>
        <View style={styles.scroll}>
          <ScrollView
            snapToInterval={Dimensions.get("window").width}
            decelerationRate="fast"
            horizontal
            pagingEnabled="true"
            showsHorizontalScrollIndicator={false}
            onScroll={(event) => handleScroll(event)}
            scrollEventThrottle={100}
            ref={scrollViewRef}
          >
            {spirits.map((spirit) => {
              return (
                <View key={spirit.name} style={styles.spiritView}>
                  <Image style={styles.spirit} source={spirit.img} />
                </View>
              );
            })}
          </ScrollView>
        </View>

        <View style={styles.pickButtonContainer}>
          <TouchableOpacity onPress={() => handleChange('back')}>
            <Image  source={require('../../assets/images/backButton.png')} />
          </TouchableOpacity>
          {/* <Text style={styles.currentSpiritText}>{currentSpirit.name}</Text> */}
          <TouchableOpacity onPress={() => handleChange('forward')}>
            <Image source={require('../../assets/images/forwardButton.png')} />
          </TouchableOpacity>
          </View>
        <View style={styles.bottomBox}>
          <Text style={styles.bottomBoxTextName}>{currentSpirit.name}</Text>
          <Text style={styles.bottomBoxTextDescription}>
            {currentSpirit.description}
          </Text>
        </View>
          <TouchableOpacity
          onPress={() => handleBtnPress()}
          style={styles.pickMeButton}
          >
          <Text style={styles.pickMeText}>Pick Me!</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Home;
