import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../stylesheets/fiveFourThreeTwoOneStyles";

const FiveFourThreeTwoOne = ({ navigation: { navigate } }) => {
  return (
    <View>
      <View style={styles.breatheSteps}>
        <Text>Hold - 4 Seconds</Text>
        <View style={styles.row}>
          <Text style={styles.verticalTxt}>Breathe Out - 4 Seconds</Text>
          <Image
            source={require("../../assets/emotions/happySelected.png")}
            style={styles.meditationImg}
          />
          <Text style={styles.verticalTxt}>Hold - 4 Seconds</Text>
        </View>
        <Text>Breathe In - 4 aasdfasddf</Text>
      </View>
      <View style={{}}>
        <Text>About/Description</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
        </Text>
        <Text>Helps/Works</Text>
        <Text>When you feel Anxiety, Depression</Text>
        <Text>Taken</Text>
        <Text>7 timesasdfasdfasdfasdfasdf asfda</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigate("FiveFourThreeTwoOneTech")}>
          <Text>Demo</Text>
        </TouchableOpacity>
      </View>
      <View></View>
    </View>
  );
};

export default FiveFourThreeTwoOne;