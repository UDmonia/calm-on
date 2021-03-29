import React, { useState } from "react";
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
import stories from "../data/picnicStoryData";
import adventureMadLib from "../components/AdventureMadLib"
import AdventureMadLib from "../components/AdventureMadLib";
const AdventureLocationMadLib = ({ route }) => {
  const { pMsg, sMsg, bg, bgTint, randomWords, randomStory } = route.params;
  const [progress, setProgress] = useState(0);

  return (
    <ImageBackground source={bg} style={{ height: "100%", width: "100%" }}>
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.exitContainer}>
          <Exit style={{ alignSelf: "flex-start" }} />
        </View>
        <View style={styles.storyContainer}>
          <AdventureMadLib 
            randomWords={randomWords} 
            randomStory={0} 
            location={1} 
            progress={progress} 
            setProgress={setProgress}
            pMsg={pMsg}
            sMsg={sMsg}
            bg={bgTint}/>
        </View>
        <View style={{flex: 1}}></View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default AdventureLocationMadLib;
