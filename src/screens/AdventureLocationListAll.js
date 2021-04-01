import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
  ImageBackground,
  Modal,
} from "react-native";
import { navigate } from "../components/RootNavigation";
import styles from "../stylesheets/adventureLocationListAllStyles";
import Exit from "../components/Exit";
const AdventureLocationListAll = ({ route }) => {
  const { pMsg, sMsg, arr, bg, bgTint, location } = route.params;
  const randomStory = Math.floor(Math.random() * 3);
  const [randomWords, setRandomWords] = useState([]);
  useEffect(() => {
    let i;
    let tempArray = [];
    while (tempArray.length < 9) {
      let r = Math.floor(Math.random() * 26);
      if (tempArray.indexOf(r) === -1) {
        tempArray.push(r);
      }
    }
    // console.log(tempArray);
    for (i = 0; i < 9; i++) {
      tempArray[i] = arr[tempArray[i]];
    }
    // console.log(tempArray);
    setRandomWords(tempArray);
  }, []);

  const handlePress = () => {
    navigate("AdventureLocationMadLib", {
      bg: bg,
      bgTint: bgTint,
      pMsg: pMsg,
      sMsg: sMsg,
      randomWords: randomWords,
      randomStory: randomStory,
      location: location,
    });
  };

  return (
    <ImageBackground source={bgTint} style={styles.background}>
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.exitContainer}>
          <Exit
            navTo={"Modal"}
            img={require("../../assets/exit/whtExitBtn.png")}
          />
        </View>
        <ScrollView contentContainerStyle={styles.allSelectedContainer}>
          <View>
            <Text style={styles.selectedItemsTxt}>Selected Items</Text>
          </View>
          <View style={styles.grid}>
            {arr.map((item) => {
              return (
                <View key={item.name} style={styles.itemContainer}>
                  <Image source={item.img} style={styles.imgContainer} />
                  <Text style={styles.itemsTxt}>{item.name}</Text>
                </View>
              );
            })}
          </View>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => handlePress()}
          >
            <Text style={styles.selectedItemsTxt}>Next</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default AdventureLocationListAll;
