import React, { useState, useEffect } from "react";
import {
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import Text from "../components/Text";
import hex from '../stylesheets/hexCodes';
import styles from "../stylesheets/countingStyles";
import sprit from "../../assets/counting/spirit2.png";
import bg from "../../assets/counting/backdrop.png";
import Recipes from "../data/countingData";
import Exit from "../components/Exit";
import { windowHeight, windowWidth } from "../util/windowDimensions";

/**
 * This componet is the starting point for the counting activity
 * It will handle selection of recipe data and handle it by passing it
 * as a route parameter to counting.
 *
 * @param { object } stuff  - json object containing recipe data
 */
export default CountingSelection = ({ navigation: { navigate } }) => {
  var positionList = [];
  async function randomizePosition() {
    var i;
    for(i = 0; i < Recipes.start.items.length; i++) {
      var xpos = {
        top: parseFloat((Math.random() * ((windowHeight * 0.350) - (windowHeight * 0.005)) + (windowHeight * 0.005)).toFixed(3)),
        left: parseFloat((Math.random() * ((windowWidth * 0.895) - (windowWidth * 0.005)) + (windowWidth * 0.005)).toFixed(3)),
      }
      positionList.push(xpos);
    }
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.backImage}>
        <View style={styles.exitPosition}>
          <Exit navTo={"Modal"} />
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
            onPress={() => {
              randomizePosition().then(navigate("Counting", { stuff: Recipes.start, positionList: positionList }));
            }}
          >
            <Text style={{ color: hex.white.white1 }}>Fruits</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
