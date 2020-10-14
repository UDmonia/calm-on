import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
} from "react-native";
import styles from "../stylesheets/picnicStyles";
import picnicData from "./picnicData";

const alphaButton = (item) => {
  return (
    <TouchableOpacity key={item.id} style={styles.itemContainer}>
      <Image source={item.image} />
      <Text>{items.itemName}</Text>
    </TouchableOpacity>
  );
};

export default Picnic = ({ navigation: { navigate } }) => {
  const [letter, setLetter] = useState(0);
  const [selected, setSelected] = useState([]);
  console.log(
    picnicData[letter.valueOf()].items.map((item) => console.log(item.itemName))
  );
  return (
    <ImageBackground
      source={require("../../assets/adventure/locations/picnic/picnicBackground.png")}
      style={styles.background}
    >
      <View style={styles.basketContainer}>
        <Text style={styles.txtLetter}>Selected items will appear here</Text>
        <View style={styles.basket}></View>
      </View>
      <View style={styles.imgSpiritContainer}>
        <Image
          style={styles.imgSpirit}
          source={require("../../assets/adventure/spirit.png")}
        />
      </View>
      <View style={styles.locationContainer}>
        <Text style={styles.txtLetter}>
          What should we bring that starts with [letter]?
        </Text>
      </View>
      <View style={styles.row}>
        {/* {picnicData[letter.valueOf()].items.map((item) => {
          return alphaButton(item);
        })} */}
        {/* <TouchableOpacity style={styles.itemContainer}>
          <Image source={picnicData[letter.valueOf()].} />
          <Text>{items.itemName}</Text>
        </TouchableOpacity> */}
      </View>
    </ImageBackground>
  );
};
