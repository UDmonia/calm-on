//This file is a temporary placeholder
import {
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import Text from './Text';
import React from "react";
import styles from "../stylesheets/chatPlaceholderStyles";

const chatPlaceholder = ({ route, navigation: { navigate } }) => {
  const { curCharacter } = route.params;
  const img = curCharacter.img;
  const bg = curCharacter.background;
  const activitiesBtnImg = curCharacter.viewActivities;
  const charaterActivities = curCharacter.activities;

  return (
    <ImageBackground style={styles.background} source={bg}>
      <Image style={styles.chosenCharacter} source={img} />
      <View style={styles.activityBtnContainer}>
        <TouchableOpacity
          style={styles.activityBtn}
          onPress={() =>
            navigate("FlatActivities", {
              activities: charaterActivities,
              headerColor: curCharacter.characterColor,
            })
          }
        >
          <Image source={activitiesBtnImg} />
        </TouchableOpacity>
      </View>
      <View style={styles.chatContainer}>
        <Text>Placeholder page</Text>
        <TouchableOpacity onPress={() => navigate("milkMilkMilk")}>
          <Text>Milk Milk Milk</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate("boxBreathing")}>
          <Text>Box Breathing</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigate("IntroActivity", {
              name: "54321 Technique",
              actNav: "FiveFourThreeTwoOneTech",
              about:
                "Use your senses to bring you back to the present moment. This will help you feel more focused and calm.",
              helpful:
                "You have trouble focusing or when you feel scared or worried.",
              img: require("../../assets/FiveFourThreeTwoOne/54321Title.png"),
            })
          }
        >
          <Text>5-4-3-2-1 Technique</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate("Mindfulness")}>
          <Text>Mindfulness</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate("Activities")}>
          <Text>Activities</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate("Adventure")}>
          <Text>Going on an Adventure</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default chatPlaceholder;
