import React from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { navigate } from "../components/RootNavigation";
import styles from "../stylesheets/adventureLocationListAllStyles";
const AdventureLocationMadLib = ({ route }) => {
  const { pMsg, sMsg } = route.params;
  const { bg } = route.params;

  const handlePress = () => {
    navigate("kpi", {
      bg: bg,
      pMsg: pMsg,
      sMsg: sMsg,
    });
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text>Hello 2 </Text>
      <TouchableOpacity onPress={() => handlePress()}>
        <Text>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AdventureLocationMadLib;
