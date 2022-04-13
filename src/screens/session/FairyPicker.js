import React, { useState, useRef } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import { editProfile } from "../../actions/session_actions";
import { Dimensions } from "react-native";
import { sprite, aurora, flynn } from "../../data/characterData";
import styles from "./FairyPicker.styles";

const spirits = [sprite, aurora, flynn];

const FairyPicker = ({ navigate }) => {
  const dispatch = useDispatch();
  let spirit = spirit || sprite;
  let [currentSpirit, setCurrentSpirit] = useState(spirit);
  let xOffset;
  let screenWidth = Dimensions.get("window").width;
  const scrollViewRef = useRef(null);

  function handleScroll(e) {
    xOffset = e.nativeEvent.contentOffset.x;
    updateSpirit(xOffset);
  }

  const handleChange = (direction) => {
    let newFairy = spirits.findIndex((fairy) => fairy == currentSpirit);
    let changeFairy;
    if (direction == "back") {
      changeFairy = newFairy - 1;
    } else {
      changeFairy = newFairy + 1;
    }
    if (scrollViewRef.current !== null) {
      scrollViewRef.current.scrollTo({
        x: screenWidth * changeFairy,
        animated: true,
      });
    }
  };

  function updateSpirit(x = 0) {
    if (x < screenWidth / 2) {
      spirit = spirits[0];
    } else if (x < screenWidth * 1.5) {
      spirit = spirits[1];
    } else {
      spirit = spirits[2];
    }

    if (currentSpirit !== spirit) {
      setCurrentSpirit(spirit);
    }
  }

  async function handleSelectFairy() {
    // navigate("CharacterChat", {
    //   curCharacter: currentSpirit,
    //   name: currentSpirit.name,
    //   headerColor: currentSpirit.characterColor,
    // });
    try {
      await dispatch(editProfile({ coach: currentSpirit.name }));
      navigate("DailyCheckIn");
    } catch (e) {
      console.log({ error: "could not set fairy", extra: e });
    }
  }
  return (
    <View style={styles.inner}>
      <View style={styles.viewTitleContainer}>
        <Text style={styles.viewTitle}>Pick a Fairy Buddy!</Text>
      </View>
      <View style={styles.scroll}>
        <ScrollView
          snapToInterval={Dimensions.get("window").width}
          decelerationRate="fast"
          horizontal
          pagingEnabled="true"
          showsHorizontalScrollIndicator={false}
          onScroll={(event) => handleScroll(event)}
          scrollEventThrottle={100}
          ref={scrollViewRef}
        >
          {spirits.map((spirit) => {
            return (
              <View key={spirit.name} style={styles.spiritView}>
                <Image style={styles.spirit} source={spirit.img} />
              </View>
            );
          })}
        </ScrollView>
      </View>

      <View style={styles.pickButtonContainer}>
        <TouchableOpacity onPress={() => handleChange("back")}>
          {currentSpirit.name !== "Sprite" && (
            <Image source={require("../../../assets/images/backButton.png")} />
          )}
        </TouchableOpacity>

        <Text style={styles.currentSpiritText}>{currentSpirit.name}</Text>
        <TouchableOpacity onPress={() => handleChange("forward")}>
          {currentSpirit.name !== "Flynn" && (
            <Image
              source={require("../../../assets/images/forwardButton.png")}
            />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.bottomBox}>
        <Text style={styles.bottomBoxTextDescription}>
          {currentSpirit.description}
        </Text>
      </View>
      <TouchableOpacity onPress={handleSelectFairy} style={styles.pickMeButton}>
        <Text style={styles.pickMeText}>Pick {currentSpirit.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FairyPicker;
