import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import styles from "../stylesheets/fiveFourThreeTwoOneTechStyles";
import kpiData from "../data/kpiData";
import Exit from "../components/Exit";
import stepData from "../data/54321Data";
/**
 * In this activity we step through stepData inorder to atchieve our conditional rendering.
 * On press of the arrow buttons we itterate through the array.
 * For now we only have a temporay images since they are not finalized.
 */

/**
 * Function that will display one step
 * @param progress - progress state that constains the int step for current state
 * @param setProgress - function that sets the state for the current step
 * @param navigate - since we are in a function we need to pass navigate inorder to navigate from within it
 */
const step = (progress, setProgress, navigate) => {
  return (
    <View style={styles.breatheSteps}>
      <View style={styles.exitContainer}>
        <Exit navTo={"Modal"} />
      </View>
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
        <Text style={styles.dirText}>
          {stepData[progress.valueOf()].direction}
        </Text>
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
          resizeMode="contain"
        >
          <View style={styles.txtCloudContainer}>
            <Text adjustsFontSizeToFit={true} style={styles.txt}>
              {stepData[progress.valueOf()].thought}
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.characterView}>
        <Image
          style={styles.image}
          source={stepData[progress.valueOf()].stepImg}
          resizeMode="cover"
        />
      </View>
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
    <ImageBackground
      source={require("../../assets/FiveFourThreeTwoOne/background.png")}
      style={styles.background}
    >
      <SafeAreaView>{step(progress, setProgress, navigate)}</SafeAreaView>
    </ImageBackground>
  );
};

export default FiveFourThreeTwoOneTech;
