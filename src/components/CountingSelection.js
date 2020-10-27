import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "../stylesheets/countingStyles";
import sprit from "../../assets/counting/spirit2.png";
import bg from "../../assets/counting/backdrop.png";
import apple from "../../assets/counting/apple.png";

var applePie = {
  groupName: "apples",
  dialog: [
    "Let’s make an apple pie together! We’re going to need 7 apples. Can you help me count them?",
    "All done! With your help, we made a delicious apple pie!",
    "Do you want to try another recipe?",
  ],
  fruits: [
    {
      id: 1,
      name: "apple",
      img: apple,
      xpos: {
        top: 10,
        left: 10,
      },
    },
    {
      id: 2,
      name: "apple",
      img: apple,
      xpos: {
        top: 60,
        left: 10,
      },
    },
    {
      id: 3,
      name: "apple",
      img: apple,
      xpos: {
        top: 60,
        left: 60,
      },
    },
  ],
};

export default CountingSelection = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.image}>
        <View style={styles.spritBox3}>
          <Image style={styles.sprit} source={sprit} />
        </View>
        <View style={styles.fin}>
          <DialogBox
            message={{
              style: styles.textBox2,
              text:
                "Are you feeling worried? Let’s play a game together! Pick a category to start.",
            }}
          />
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => navigate("Counting", { stuff: applePie })}
          >
            <Text>START</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
