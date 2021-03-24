import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { navigate } from "../components/RootNavigation";
import styles from "../stylesheets/adventureLocationListAllStyles";
const AdventureLocationListAll = ({ route }) => {
  const { pMsg, sMsg, arr, bg } = route.params;

  console.log(arr);

  const handlePress = () => {
    navigate("AdventureLocationMadLib", {
      bg: bg,
      pMsg: pMsg,
      sMsg: sMsg,
    });
  };

  return (
    <View style={styles.mainContainer}>
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
      <TouchableOpacity onPress={() => handlePress()}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AdventureLocationListAll;
