//This file is a temporary placeholder
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import React from "react";
import styles from "../stylesheets/chatPlaceholderStyles";

const chatPlaceholder = ({ route, navigation: { navigate } }) => {
  const { curCharacter } = route.params;
  const img = curCharacter.img;
  const bg = curCharacter.background;
  const activitiesBtnImg = curCharacter.viewActivities;
  const charaterActivities = curCharacter.activities;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Placeholder page</Text>
      <TouchableOpacity onPress={() => navigate("milkMilkMilk")}>
        <Text>Milk Milk Milk</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate("boxBreathing")}>
        <Text>Box Breathing</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate("FiveFourThreeTwoOne")}>
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
      <TouchableOpacity onPress={() => navigate("FlatActivities")}>
        <Text>FlatActivities</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate("kpi")}>
        <Text>kpi</Text>
      </TouchableOpacity>
    </View>
  );
};

export default chatPlaceholder;
