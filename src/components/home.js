import React, { useState } from "react";
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
import { sprite, aurora, flynn } from "./characterData";
import { Dimensions } from "react-native";
import { windowWidth } from "../util/windowDimensions.js";

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
  const userName = "Jack";
  // const userName = useSelector((state) =>
  //   state.session.user.name ? state.session.user.name : "user"
  // );
  if (userName === "user") {
    console.log("Home -> loginSignup: userPrompt=true userlogin=false");
    navigate("loginSignup", { userPrompt: true, userLogin: false });
  }
  let [spirits, setSpirits] = useState([sprite, flynn, aurora]);
  let spirit = spirit || sprite;
  let [currentSpirit, setCurrentSpirit] = useState(spirit);
  let xOffset;
  let screenWidth = Dimensions.get("window").width;

  function handleScroll(e) {
    xOffset = e.nativeEvent.contentOffset.x;
    updateSpirit(xOffset);
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
    navigate("chatPlaceholder", {
      curCharacter: currentSpirit,
      name: currentSpirit.name,
      headerColor: currentSpirit.characterColor,
    });
  }

  // what units are these?
  const screenWidthThreshold = 800;
  return (
    <View style={styles.format}>
      <ImageBackground
        source={require("../../assets/images/splash_panel.png")}
        style={styles.image}
      >
        <View style={styles.main}>
          <View style={styles.topBox}>
            <Text style={styles.topBoxTextName}>Hi {userName}!</Text>
            <Text
              numberOfLines={windowWidth > screenWidthThreshold ? 1 : 2}
              adjustsFontSizeToFit
              style={styles.topBoxText}
            >
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
          <TouchableOpacity onPress={() => handleBtnPress()}>
            <Image
              style={styles.btn}
              source={require("../../assets/images/homescreen_btn.png")}
            />
          </TouchableOpacity>

          <View style={styles.bottomBox}>
            <Text adjustsFontSizeToFit={true} style={styles.bottomBoxTextName}>
              {currentSpirit.name}
            </Text>
            <Text
              numberOfLines={windowWidth > screenWidthThreshold ? 2 : 3}
              adjustsFontSizeToFit={true}
              style={styles.bottomBoxTextDescription}
            >
              {currentSpirit.description}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;
