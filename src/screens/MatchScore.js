import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import styles from "../stylesheets/screens/matchScoreStyles";
import kpiData from "../data/kpiData";

export default MatchScore = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.View1}>
        <Text style={styles.header}>Times Up!</Text>
      </View>
      <View style={styles.View2}>
        <Text style={styles.message}>You Got</Text>
        <Text style={styles.score}>(number)</Text>
        <Text style={styles.message}>Correct</Text>
        <Text style={styles.bestScore}>
          Best Score : (place holder) correct
        </Text>
      </View>
      <View style={styles.View3}>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigate("MatchTheColor")}
        >
          <Text>Play Again?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() =>
            navigate("kpi", {
              bg: require("../../assets/trainSuperhero/background.png"),
              pMsg: kpiData.matching.primMsg,
              sMsg: kpiData.matching.secMsg,
            })
          }
        >
          <Text>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
