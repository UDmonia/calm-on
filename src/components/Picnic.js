import React, { useState, useRef } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import Exit from "./Exit";
import styles from "../stylesheets/picnicStyles";
import picnicData from "./picnicData";
import { navigate } from "./RootNavigation";

/**
 * Picnic is a single screen in the adventures activity.
 * We use the data imported from "picnicData" to fill our componenets.
 */
export default Picnic = ({ navigation }) => {
  const [letter, setLetter] = useState(0);
  const [selected, setSelected] = useState([]);
  const [done, setDone] = useState(false);
  const scrollViewRef = useRef();

  /**
   * alphaButton populates a single button for each letter A - Z. It
   * adds items to our "selected" array which will display
   * items at the bottom of the screen and in the "See All" screen
   *
   * @param { object } item - object for each letters subitem
   *                           (Ex. {id: 1, itemName: "Dog", image: PATH TO PIC})
   */
  const alphaButton = (item) => {
    return (
      <TouchableOpacity
        onPress={() => {
          // Add item to the bottom basket
          // After each press we increment our index through "picnicData"
          if (letter < picnicData.length - 1) {
            setSelected([
              ...selected,
              { id: item.id, name: item.itemName, img: item.image },
            ]);
            setLetter(letter + 1);
          } else if (letter === picnicData.length - 1 && !done) {
            setSelected([
              ...selected,
              { id: item.id, name: item.itemName, img: item.image },
            ]);
            setDone(true);
          }
          // TODO: when designs are finalized replace "true" with another flag that will end the activity
          else if (done && true) {
            navigate("chatPlaceholder");
          }
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
    <View style={styles.screenContainer}>
      <ImageBackground
        source={require("../../assets/adventure/locations/picnic/picnicBackground.png")}
        style={styles.background}
        imageStyle={styles.imgBackground}
      >
        <View style={styles.exitPosition}>
          <Exit navTo={"chatPlaceholder"} />
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
        <View style={styles.imgSpiritContainer}>
          <Image
            style={styles.imgSpirit}
            source={require("../../assets/adventure/spirit.png")}
          />
        </View>
      </ImageBackground>
      <View style={styles.basketContainer}>
        <View style={styles.seeAllContainer}>
          <Text style={styles.selectedItemTxt}>Selected Items</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("PicnicSeeAll", { arr: selected });
            }}
          >
            <Text style={styles.seeAllTxt}>See all {">"}</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          style={styles.basket}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ref={scrollViewRef}
          onContentSizeChange={() =>
            scrollViewRef.current.scrollToEnd({ animated: true })
          }
        >
          {selected.map((item) => {
            return (
              <View key={item.name} style={styles.basketItemContainer}>
                <View style={styles.basketItem}>
                  <Image style={styles.img} source={item.img} />
                  <Text style={styles.itemName}>{item.name}</Text>
                </View>
                <View style={styles.itemDivider} />
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};
