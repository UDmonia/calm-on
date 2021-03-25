import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image, SafeAreaView } from "react-native";
import { navigate } from "../components/RootNavigation";
import styles from "../stylesheets/adventureLocationListAllStyles";
import Exit from "../components/Exit";
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
