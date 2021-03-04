import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
  SafeAreaView,
  FlatList,
} from "react-native";
import styles from "../stylesheets/coloringStyles";
import Exit from "../components/Exit";
import { coloringPicturesData } from "../data/coloringData.js";

export default function Coloring({ navigation: { navigate } }) {
  function ImageBox(data) {
    console.log("____________________");
    console.log(data.item);
    return (
      <TouchableOpacity
        style={styles.imageBoxContainer}
        onPress={() =>
          navigate("ColoringPage", {
            name: data.item.title,
          })
        }
      >
        <Image
          source={require("../../assets/favicon.png")}
          style={styles.img}
        />
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.exitContainer}>
        <Exit />
      </View>
      <View style={styles.main}>
        <FlatList
          data={coloringPicturesData.pictures}
          renderItem={(item) => ImageBox(item)}
          keyExtractor={(item) => item.id}
          numColumns={2}
          style={styles.imageList}
        />
      </View>
      <View style={styles.bottom}>
        <View style={styles.auroraContainer}>
          <Image
            source={require("../../assets/decodingMessages/Aurora.png")}
            style={styles.auroraImg}
          />
        </View>
        <View style={styles.textContainer}>
          <Text>Pick one of the Images to color!</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
