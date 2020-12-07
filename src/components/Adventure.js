import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import Text from './Text';
import styles from "../stylesheets/adventureStyles";
import picnicData from "../data/picnicData";
import theaterData from "../data/theaterData";
import amusementData from "../data/amusementData";

export default Adventure = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.screenContainer}>
      <Image
        style={styles.imgPosition}
        source={require("../../assets/adventure/spirit.png")}
      />
      <View style={styles.dialogContainer}>
        <Text style={styles.greetingTxt}>
          Hey [user]! Great to see you! I’m so glad you want to go on an
          adventure with me. Where do you want to go?
        </Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.locationContainer}
          onPress={() =>
            navigate("AdventureLocation", {
              locationBackground: require("../../assets/adventure/locations/picnic/picnicBackground.png"),
              locationBackgroundTint: require("../../assets/adventure/locations/picnic/picnicBackgroundTint.png"),
              locationData: picnicData,
              exitAsset: null,
            })
          }
        >
          <Image
            source={require("../../assets/adventure/locations/picnic.png")}
          />
          <Text style={styles.locationTxt}>Picnic</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.locationContainer}
          onPress={() =>
            navigate("AdventureLocation", {
              locationBackground: require("../../assets/adventure/locations/movieTheater/movieTheaterBackground.png"),
              locationBackgroundTint: require("../../assets/adventure/locations/movieTheater/movieTheaterBackgroundTint.png"),
              locationData: theaterData,
              exitAsset: require("../../assets/exit/whtExitBtn.png"),
            })
          }
        >
          <Image
            source={require("../../assets/adventure/locations/movieTheater.png")}
          />
          <Text style={styles.locationTxt}>Movie Theater</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.locationContainer}
          onPress={() =>
            navigate("AdventureLocation", {
              locationBackground: require("../../assets/adventure/locations/amusementPark/amusementParkBackground.png"),
              locationBackgroundTint: require("../../assets/adventure/locations/amusementPark/amusementParkBackgroundTint.png"),
              locationData: amusementData,
              exitAsset: null,
            })
          }
        >
          <Image
            source={require("../../assets/adventure/locations/amusementPark.png")}
          />
          <Text style={styles.locationTxt}>Amusement Park</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
