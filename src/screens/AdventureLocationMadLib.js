import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ImageBackground,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { navigate } from "../components/RootNavigation";
import Exit from "../components/Exit";
import styles from "../stylesheets/adventureLocationMadLibStyles";
import hexCodes from "../stylesheets/hexCodes";
import { windowHeight, windowWidth } from "../util/windowDimensions";
const AdventureLocationMadLib = ({ route }) => {
  const { pMsg, sMsg, bg, bgTint, randomWords, randomStory } = route.params;

  const handlePress = () => {
    navigate("kpi", {
      bg: bgTint,
      pMsg: pMsg,
      sMsg: sMsg,
    });
  };

  return (
    <ImageBackground source={bg} style={{ height: "100%", width: "100%" }}>
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.exitContainer}>
          <Exit style={{ alignSelf: "flex-start" }} />
        </View>
        <View style={{ flex: 1, width: windowWidth * 0.9 }}>
          <ScrollView
            bounces={false}
            contentContainerStyle={styles.storyContainer}
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.storyText}>
              {" "}
              Dear Diary,{"\n"} It was a beautiful day outside. There were birds
              chirping and the sun was shining bright. I wanted to go on a
              picnic with my friends, but they were busy so I went with mom. Dad
              said he was too busy doing boring grown-up stuff. I took an{" "}
              <Image style={styles.inlineImage} source={randomWords[0].img} />,
              my{" "}
              <Image style={styles.inlineImage} source={randomWords[1].img} />,
              my{" "}
              <Image style={styles.inlineImage} source={randomWords[2].img} />,
              and my stuffed{" "}
              <Image style={styles.inlineImage} source={randomWords[3].img} />.
              When I got there, I sat on my{" "}
              <Image style={styles.inlineImage} source={randomWords[4].img} />{" "}
              with mom and saw people drawing{" "}
              <Image style={styles.inlineImage} source={randomWords[5].img} />.
              There was a farm near the park which had{" "}
              <Image style={styles.inlineImage} source={randomWords[6].img} />,{" "}
              <Image style={styles.inlineImage} source={randomWords[7].img} />,
              and{" "}
              <Image style={styles.inlineImage} source={randomWords[8].img} />.
              After visiting the farm, we started to play various games such as
              hopscotch. We spent an hour at the swings and then mom said we had
              to go home. It was a good day overall. I hope tomorrow will be a
              good day as well.
            </Text>
          </ScrollView>
        </View>
        <TouchableOpacity onPress={() => handlePress()}>
          <Text>Next</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default AdventureLocationMadLib;
