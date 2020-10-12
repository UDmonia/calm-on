import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import styles from "../stylesheets/adventureStyles";

/**
 * TODO:
 * - map each location
 * - margins
 * - styles
 */
export default Adventure = ({ navigation: { navigate } }) => {
  return (
    <View style={{ flex: 1 }}>
      <Image source={require("../../assets/adventure/spirit.png")} />
      <View style={styles.dialogContainer}>
        <Text>
          Hey user! Great to see you! I’m so glad you want to go on an adventure
          with me. Where do you want to go?
        </Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.locationContainer}
          onPress={() => navigate("Picnic")}
        >
          <Image
            source={require("../../assets/adventure/locations/picnic.png")}
          />
          <Text>Picnic</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.locationContainer}>
          <Image
            source={require("../../assets/adventure/locations/movieTheater.png")}
          />
          <Text>Movie Theater</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.locationContainer}>
          <Image
            source={require("../../assets/adventure/locations/amusementPark.png")}
          />
          <Text>Amusement Park</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
