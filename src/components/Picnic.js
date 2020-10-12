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
      <Text>Picnic</Text>
    </ImageBackground>
  );
};
