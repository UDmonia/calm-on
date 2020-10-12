import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
} from "react-native";
import styles from "../stylesheets/picnicStyles";

export default Picnic = ({ navigation: { navigate } }) => {
  return (
    <ImageBackground
      source={require("../../assets/adventure/locations/picnic/picnicBackground.png")}
      style={styles.background}
    >
      <Text>Selected items will appear here</Text>
      <Image source={require("../../assets/adventure/spirit.png")} />
      <View style={styles.locationContainer}>
        <Text>What should we bring that starts with [letter]?</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.itemContainer}></View>
        <View style={styles.itemContainer}></View>
        <View style={styles.itemContainer}></View>
      </View>
    </ImageBackground>
  );
};
