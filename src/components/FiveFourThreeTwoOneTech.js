import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import styles from "../stylesheets/fiveFourThreeTwoOneTechStyles";

const stepData = [
  {
    id: 1,
    stepTitle: "Sight",
    direction: "Name out loud FIVE things you can SEE",
    stepProgress: "1/5",
    thought: "I spy with my little eye...",
    progressImg: require("../../assets/FiveFourThreeTwoOne/progress1.png"),
  },
  {
    id: 2,
    stepTitle: "Touch",
    direction: "Name out loud FOUR things you can TOUCH",
    stepProgress: "2/5",
    thought: "I’m feeling better already!",
    progressImg: require("../../assets/FiveFourThreeTwoOne/progress2.png"),
  },
  {
    id: 3,
    stepTitle: "Sound",
    direction: "Name out loud THREE things you can HEAR",
    stepProgress: "3/5",
    thought: "What is that noise?",
    progressImg: require("../../assets/FiveFourThreeTwoOne/progress3.png"),
  },
  {
    id: 4,
    stepTitle: "Smell",
    direction: "Name out loud TWO things you can SMELL",
    stepProgress: "4/5",
    thought: "These flowers smell good!",
    progressImg: require("../../assets/FiveFourThreeTwoOne/progress4.png"),
  },
  {
    id: 5,
    stepTitle: "Taste",
    direction: "Name out loud ONE thing you can TASTE",
    stepProgress: "5/5",
    thought: "Fruit salad! Yummy yummy!",
    progressImg: require("../../assets/FiveFourThreeTwoOne/progress5.png"),
  },
];

const FiveFourThreeTwoOneTech = ({ navigation: { navigate } }) => {
  const [progress, setProgress] = useState(0);
  return (
    <View style={styles.background}>
      <ImageBackground
        source={require("../../assets/FiveFourThreeTwoOne/background.png")}
        style={styles.background}
      >
        <View style={styles.breatheSteps}>
          <View style={styles.titleContainer}>
            <Text style={styles.slideTitle}>
              {stepData[progress.valueOf()].stepTitle}
            </Text>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => {
                progress.valueOf() > 0 ? setProgress(progress - 1) : null;
              }}
            >
              <Image
                source={require("../../assets/FiveFourThreeTwoOne/leftArrow.png")}
              />
            </TouchableOpacity>
            <Text>{stepData[progress.valueOf()].direction}</Text>
            <TouchableOpacity
              onPress={() => {
                progress.valueOf() < 4 ? setProgress(progress + 1) : null;
              }}
            >
              <Image
                source={require("../../assets/FiveFourThreeTwoOne/rightArrow.png")}
              />
            </TouchableOpacity>
          </View>
          <View>
            <View style={styles.cloud}>
              <ImageBackground
                source={require("../../assets/FiveFourThreeTwoOne/thinkCloud.png")}
                style={styles.image}
              >
                <Text style={styles.txt}>
                  {stepData[progress.valueOf()].thought}
                </Text>
              </ImageBackground>
            </View>
            <Image
              source={require("../../assets/FiveFourThreeTwoOne/tmpCharacter.png")}
            />
          </View>
          <View>
            <Text>Steps {stepData[progress.valueOf()].stepProgress}</Text>
          </View>
          <View>
            {/* <ImageBackground
              source={require("../../assets/FiveFourThreeTwoOne/progress0.png")}
              style={styles.zeroProgress}
            >
              <View> */}
            <Image
              source={stepData[progress.valueOf()].pro}
              style={styles.breatheSteps}
            />
            {/* </View>
            </ImageBackground> */}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default FiveFourThreeTwoOneTech;
