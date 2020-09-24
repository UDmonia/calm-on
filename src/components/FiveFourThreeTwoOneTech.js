import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import styles from "../stylesheets/fiveFourThreeTwoOneTechStyles";

const FiveFourThreeTwoOneTech = ({ navigation: { navigate } }) => {
  return (
    <View>
      <ImageBackground
        source={require("../../assets/FiveFourThreeTwoOne/background.png")}
        style={styles.breatheSteps}
      >
        <View style={styles.breatheSteps}>
          <View>
            <Text>Sight</Text>
            {/* <Text>Touch</Text>
          <Text>Sound</Text>
          <Text>Smell</Text>
          <Text>Taste</Text> */}
          </View>
          <View>
            <TouchableOpacity>
              <Image />
            </TouchableOpacity>
            <Text>Name out loud FIVE things you can SEE</Text>
            {/* <Text>Name out loud FOUR things you can TOUCH </Text>
          <Text>Name out loud THREE things you can HEAR </Text>
          <Text>Name out loud TWO things you can SMELL </Text>
          <Text>Name out loud ONE thing you can TASTE</Text> */}
            <TouchableOpacity>
              <Image />
            </TouchableOpacity>
          </View>
          <View>
            <View>
              {/* <Image> */}
              <Text>I spy with my little eye...</Text>
              {/* <Text>I’m feeling better already!</Text>
              <Text>What is that noise?</Text>
              <Text>These flowers smell good!</Text>
              <Text>Fruit salad! Yummy yummy!</Text> */}
              {/* </Image> */}
            </View>
            <Image />
          </View>
          <View>
            <Text>Steps 1/5</Text>
            {/* <Text>Steps 2/5</Text>
          <Text>Steps 3/5</Text>
          <Text>Steps 4/5</Text>
          <Text>Steps 5/5</Text> */}
          </View>
          <View>
            <Image />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default FiveFourThreeTwoOneTech;
