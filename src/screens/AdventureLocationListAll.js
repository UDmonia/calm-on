import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image, SafeAreaView } from "react-native";
import { navigate } from "../components/RootNavigation";
import styles from "../stylesheets/adventureLocationListAllStyles";
import Exit from "../components/Exit";
const AdventureLocationListAll = ({ route }) => {
  const { pMsg, sMsg, arr, bg, bgTint, location } = route.params;
  const randomStory = Math.floor(Math.random() * 3)
  const [randomWords, setRandomWords] = useState([]);
  console.log(randomStory);
  console.log(arr);

  useEffect(() => {
    let i;
    let tempArray = [];
    while(tempArray.length < 9) {
      let r = Math.floor(Math.random() * 26);
      if(tempArray.indexOf(r) === -1) {
        tempArray.push(r);
      }
    }
    // console.log(tempArray);
    for(i = 0; i < 9; i++){
      tempArray[i] = arr[tempArray[i]];
    }
    // console.log(tempArray);
    setRandomWords(tempArray);
  }, [])

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
    <SafeAreaView style={styles.mainContainer}>
      <Exit navTo={"Modal"}/>
      <ScrollView contentContainerStyle={styles.listContainer}>
        {arr.map((item) => {
          return (
            <View key={item.name} style={styles.itemContainer}>
              <Image source={item.img} style={styles.imgContainer} />
              <Text style={styles.itemsTxt}>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView>
      <TouchableOpacity style={{alignSelf: "center"}} onPress={() => handlePress()}>
        <Text>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AdventureLocationListAll;
