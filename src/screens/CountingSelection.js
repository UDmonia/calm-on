import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "../stylesheets/countingStyles";
import sprit from "../../assets/counting/spirit2.png";
import bg from "../../assets/counting/backdrop.png";
import Recipes from "../data/countingData";
import Exit from "../components/Exit";

/**
 * This componet is the starting point for the counting activity
 * It will handle selection of recipe data and handle it by passing it
 * as a route parameter to counting.
 *
 * @param { object } stuff  - json object containing recipe data
 */

export default CountingSelection = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.backImage}>
        <View style={styles.exitPosition}>
          <Exit navTo={"CharacterChat"} />
        </View>
        <View style={styles.spritBox3}>
          <Image style={styles.sprit} source={sprit} />
        </View>
        <View style={styles.starting}>
          <DialogBox
            message={{
              style: styles.textBox2,
              text:
                "Are you feeling worried? Let’s play a game together! Pick a category to start.",
            }}
          />
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => navigate("Counting", { stuff: Recipes.start })}
          >
            <Text style={{ color: "#3B96B2" }}>Fruits</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
