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
import styles from "../stylesheets/adventureLocationStyles";
// import locationData from "./locationData";
import { navigate } from "./RootNavigation";
// import locationData from "./locationData";
import kpiData from "../data/kpiData";

/**
 * AdventureLocation is a single screen in the adventures activity.
 * We use the data imported from "locationData" to fill our componenets.
 */
export default AdventureLocation = ({ route, navigation }) => {
  const [letter, setLetter] = useState(0);
  const [selected, setSelected] = useState([]);
  const [done, setDone] = useState(false);
  const scrollViewRef = useRef();
  const { locationBackground } = route.params;
  const { locationBackgroundTint } = route.params;
  const { locationData } = route.params;
  const {exitAsset} = route.params; 
  // const locationData = locationData;

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
          // After each press we increment our index through "locationData"
          if (letter < locationData.length - 1) {
            setSelected([
              ...selected,
              { id: item.id, name: item.itemName, img: item.image },
            ]);
            setLetter(letter + 1);
          } else if (letter === locationData.length - 1 && !done) {
            setSelected([
              ...selected,
              { id: item.id, name: item.itemName, img: item.image },
            ]);
            setDone(true);
          }
          // TODO: when designs are finalized replace "true" with another flag that will end the activity
          else if (done && true) {
            navigate("kpi", {
              bg: locationBackgroundTint,
              pMsg: kpiData.adventure.primMsg,
              sMsg: kpiData.adventure.secMsg,
            });
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
        source={locationBackground}
        style={styles.background}
        imageStyle={styles.imgBackground}
      >
        <View style={styles.exitPosition}>
          <Exit navTo={"chatPlaceholder"} img={exitAsset} />
        </View>
        <View style={styles.locationContainer}>
          <Text style={styles.txtLetter}>
            What should we bring that starts with{" "}
            {locationData[letter.valueOf()].letter}?
          </Text>
        </View>
        <View style={styles.row}>
          {locationData[letter.valueOf()].items.map((item) => {
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
              navigation.navigate("AdventureLocationSeeAll", {
                arr: selected,
                bg: locationBackgroundTint,
              });
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
