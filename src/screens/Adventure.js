import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
} from "react-native";
import styles from "../stylesheets/adventureStyles";
import picnicData from "../data/picnicData";
import theaterData from "../data/theaterData";
import amusementData from "../data/amusementData";
import kpiData from "../data/kpiData";
import Exit from "../components/Exit";

export default Adventure = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.screenContainer}>
      <ImageBackground
        source={require("../../assets/adventure/bgimage.png")}
        style={styles.background}
      >
        <View style={styles.exitPosition}>
          <Exit navTo={"Modal"} />
        </View>
        <View style={styles.center}>
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
                  kpiData: kpiData.picnic,
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
                  kpiData: kpiData.theater,
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
                  kpiData: kpiData.amusement,
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
      </ImageBackground>
    </View>
  );
};
