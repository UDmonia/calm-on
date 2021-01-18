import { months } from "moment";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "../stylesheets/components/colorCardStyles";
import Colors from "../data/cardmatchData";

const getRandomColor = (colors) => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const getOther = (card, solution) => {
  if (card === solution) {
    return getRandomColor(Colors);
  }
  return solution;
};

export default MatchTheColor = ({ navigation: { navigate } }) => {
  const solutionCard = getRandomColor(Colors);
  const cards = [solutionCard, getRandomColor(Colors)];
  const rCardText = getRandomColor(cards);
  const lCardText = getOther(rCardText, solutionCard);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  const handlePress = (card) => {
    card === solutionCard
      ? setCorrect(correct + 1)
      : setIncorrect(incorrect + 1);
  };

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        height: "100%",
        width: "100%",
        //backgroundColor: "grey",
      }}
    >
      <View style={styles.solutionCard}>
        <Text style={[styles.cardText, { color: solutionCard }]}>
          {getRandomColor(Colors)}
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: "10%",
          width: "30%",
          marginTop: "20%",
          //backgroundColor: "blue",
        }}
      >
        <Text
          onPress={() => {
            console.log("press " + (correct + incorrect));
            handlePress(rCardText);
            //console.log(correct);
            //console.log(incorrect);
          }}
          style={{ color: getRandomColor(Colors) }}
        >
          {rCardText}
        </Text>
        <Text
          onPress={() => {
            console.log("press " + (correct + incorrect));
            handlePress(lCardText);
            //console.log(correct);
            //console.log(incorrect);
          }}
          style={{ color: getRandomColor(Colors) }}
        >
          {lCardText}
        </Text>
      </View>
    </View>
  );
};
