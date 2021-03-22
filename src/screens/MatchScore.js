import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import styles from "../stylesheets/screens/matchScoreStyles";
import kpiData from "../data/kpiData";
import {useSelector} from 'react-redux';

export default MatchScore = ({ route, navigation: { navigate } }) => {
  const bestScore = useSelector((store) => store.score.score);
  //console.log(bestScore);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <Text style={styles.header}>Times Up!</Text>
      </View>
      <View style={styles.midView}>
        <Text style={styles.message}>You Got</Text>
        <Text style={styles.score}>{route.params.score}</Text>
        <Text style={styles.message}>Points</Text>
        <Text style={styles.bestScore}>
          Best Score : {bestScore} points
        </Text>
      </View>
      <View style={styles.bottomView}>
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
