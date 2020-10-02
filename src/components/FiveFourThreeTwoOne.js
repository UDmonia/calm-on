import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../stylesheets/fiveFourThreeTwoOneStyles";

const FiveFourThreeTwoOne = ({ navigation: { navigate } }) => {
  return (
    <View>
      <View style={styles.breatheSteps}>
        <View style={styles.breathTxt}>
          <Text>Hold - 4 Seconds</Text>
        </View>
        <View style={styles.row}>
          {/* <Text style={styles.verticalTxt}>Breathe Out - 4 Seconds</Text> */}
          <Image
            source={require("../../assets/FiveFourThreeTwoOne/meditation.png")}
            style={styles.meditationImg}
          />
          {/* <Text style={styles.verticalTxt}>Hold - 4 Seconds</Text> */}
        </View>
        <View style={styles.breathTxt}>
          <Text>Breathe In - 4 seconds</Text>
        </View>
      </View>
      <View style={styles.bodyText}>
        <View style={styles.subsection}>
          <Text style={styles.subtitles}>About/Description</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut
          </Text>
        </View>
        <View style={styles.subsection}>
          <Text style={styles.subtitles}>Helps/Works</Text>
          <Text>When you feel Anxiety, Depression</Text>
        </View>
        <View style={styles.subsection}>
          <Text style={styles.subtitles}>Taken</Text>
          {/* Will this be an end point in the database */}
          <Text>7 times</Text>
        </View>
      </View>
      <View style={styles.startSection}>
        <Text style={{ textAlign: "center", marginVertical: 5 }}>Demo Video</Text>
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => navigate("FiveFourThreeTwoOneTech")}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
            }}
          >
            Start
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FiveFourThreeTwoOne;
