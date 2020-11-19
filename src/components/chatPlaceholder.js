//This file is a temporary placeholder
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import React, { useState } from "react";
import styles from "../stylesheets/chatPlaceholderStyles";

const chatPlaceholder = ({ route, navigation: { navigate } }) => {
  const { curCharacter } = route.params;
  // const { img } = route.params;
  const img = curCharacter.img;
  const bg = curCharacter.bg;

  return (
    <ImageBackground style={styles.background} source={bg}>
      <Image style={styles.chosenCharacter} source={img} />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "30%",
          width: "90%",
          backgroundColor: "white",
          borderRadius: 10,
        }}
      >
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
      </View>
    </ImageBackground>
  );
};

export default chatPlaceholder;
