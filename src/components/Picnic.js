import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import styles from "../stylesheets/picnicStyles";
import picnicData from "./picnicData";

export default Picnic = ({ navigation: { navigate } }) => {
  const [letter, setLetter] = useState(0);
  const [selected, setSelected] = useState([]);

  const alphaButton = (item) => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (letter < picnicData.length - 1) {
            setSelected([
              ...selected,
              { id: item.id, name: item.itemName, img: item.image },
            ]);
            setLetter(letter + 1);
          } else {
            return null;
          }

          letter < picnicData.length - 1 ? setLetter(letter + 1) : null;
        }}
        key={item.id}
        style={styles.itemContainer}
      >
        <Image source={item.image} />
        <Text>{item.itemName}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ImageBackground
      source={require("../../assets/adventure/locations/picnic/picnicBackground.png")}
      style={styles.background}
    >
      <View style={styles.basketContainer}>
        <Text style={styles.txtLetter}>Selected items will appear here</Text>
        <ScrollView
          style={styles.basket}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {selected.map((item) => {
            return (
              <View key={item.id} styles={styles.itemContainer}>
                <Image source={item.img} />
                <Text>{item.name}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.imgSpiritContainer}>
        <Image
          style={styles.imgSpirit}
          source={require("../../assets/adventure/spirit.png")}
        />
      </View>
      <View style={styles.locationContainer}>
        <Text style={styles.txtLetter}>
          What should we bring that starts with{" "}
          {picnicData[letter.valueOf()].letter}?
        </Text>
      </View>
      <View style={styles.row}>
        {picnicData[letter.valueOf()].items.map((item) => {
          return alphaButton(item);
        })}
      </View>
    </ImageBackground>
  );
};
