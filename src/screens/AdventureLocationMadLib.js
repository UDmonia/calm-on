import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ImageBackground,
} from "react-native";
import Exit from "../components/Exit";
import styles from "../stylesheets/adventureLocationMadLibStyles";
import hexCodes from "../stylesheets/hexCodes";
import { windowHeight, windowWidth } from "../util/windowDimensions";
import { navigate } from "../components/RootNavigation";
import AdventureMadLib from "../components/AdventureMadLib";
const AdventureLocationMadLib = ({ route }) => {
  const {
    pMsg,
    sMsg,
    bg,
    bgTint,
    randomWords,
    randomStory,
    location,
  } = route.params;
  const [progress, setProgress] = useState(0);

  return (
    <ImageBackground source={bg} style={{ height: "100%", width: "100%" }}>
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.exitContainer}>
          <Exit
            style={{ alignSelf: "flex-start" }}
            navTo={"Modal"}
            img={require("../../assets/exit/whtExitBtn.png")}
          />
        </View>
        <View style={styles.storyContainer}>
          {/* If you want to edit/add madlibs you need to access the AdventureMadLib component located in components/AdventureMadLib.js */}
          <AdventureMadLib
            randomWords={randomWords}
            randomStory={randomStory}
            location={location}
            progress={progress}
            setProgress={setProgress}
            pMsg={pMsg}
            sMsg={sMsg}
            bg={bgTint}
          />
        </View>
        <View
          style={{
            flex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() =>
              navigate("kpi", {
                bg: bgTint,
                pMsg: pMsg,
                sMsg: sMsg,
              })
            }
          >
            <Text style={styles.storyText}>Next</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default AdventureLocationMadLib;
