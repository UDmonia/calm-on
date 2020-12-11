import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import styles from "../stylesheets/fiveFourThreeTwoOneTechStyles";
import kpiData from "../data/kpiData";


/**
 * In this activity we step through stepData inorder to atchieve our conditional rendering.
 * On press of the arrow buttons we itterate through the array.
 * For now we only have a temporay images since they are not finalized.
 */
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

/**
 * Function that will display one step
 * @param progress - progress state that constains the int step for current state
 * @param setProgress - function that sets the state for the current step
 * @param navigate - since we are in a function we need to pass navigate inorder to navigate from within it
 */
const step = (progress, setProgress, navigate) => {
  return (
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
            progress.valueOf() < stepData.length - 1
              ? setProgress(progress + 1)
              : navigate("kpi", {
                bg: require("../../assets/FiveFourThreeTwoOne/background.png"),
                pMsg: kpiData.Five4321Tech.primMsg,
                sMsg: kpiData.Five4321Tech.secMsg,
              });
          }}
        >
          <Image
            source={require("../../assets/FiveFourThreeTwoOne/rightArrow.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.cloud}>
        <ImageBackground
          source={require("../../assets/FiveFourThreeTwoOne/thinkCloud.png")}
          style={styles.image}
        >
          <View style={styles.txtCloudContainer}>
            <Text style={styles.txt}>
              {stepData[progress.valueOf()].thought}
            </Text>
          </View>
        </ImageBackground>
      </View>
      <Image
        source={require("../../assets/FiveFourThreeTwoOne/tmpCharacter.png")}
      />
      <View style={styles.progressText}>
        <Text>Steps {stepData[progress.valueOf()].stepProgress}</Text>
      </View>
      <View>
        <ImageBackground
          source={require("../../assets/FiveFourThreeTwoOne/progress0.png")}
          style={styles.zeroProgress}
        >
          <Image
            source={stepData[progress.valueOf()].progressImg}
            style={styles.breatheSteps}
          />
        </ImageBackground>
      </View>
    </View>
  );
};

/**
 * Main render function that iterates through the stepData array to display each step.
 */
const FiveFourThreeTwoOneTech = ({ navigation: { navigate } }) => {
  const [progress, setProgress] = useState(0);
  return (
    <View style={styles.background}>
      <ImageBackground
        source={require("../../assets/FiveFourThreeTwoOne/background.png")}
        style={styles.background}
      >
        {step(progress, setProgress, navigate)}
      </ImageBackground>
    </View>
  );
};

export default FiveFourThreeTwoOneTech;
