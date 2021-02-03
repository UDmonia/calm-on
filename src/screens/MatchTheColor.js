import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Animated,
  SafeAreaView,
} from "react-native";
import styles from "../stylesheets/components/colorCardStyles";
import Colors from "../data/cardmatchData";

const getRandomColor = (colors) => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const getOther = (card, solution) => {
  if (card === solution) {
    //console.log("Solution: " + solution);
    const index = Colors.findIndex((colors) => colors === solution);
    //console.log("index: " + index);
    const tempArray = Colors.slice();
    tempArray.splice(index, 1)
    //tempArray.forEach((thing) => console.log(thing));
    return getRandomColor(tempArray)
  }
  return solution;
};

export default MatchTheColor = ({ navigation: { navigate } }) => {
  const solutionCard = useRef(getRandomColor(Colors));
  const cardText = useRef(getRandomColor(Colors));
  const cards = useRef([solutionCard.current, getRandomColor(Colors)]);
  const rCardColor = useRef(getRandomColor(Colors));
  const rCardText = useRef(getRandomColor(cards.current));
  const lCardColor = useRef(getRandomColor(Colors));
  const lCardText = useRef(getOther(rCardText.current, solutionCard.current));
  const [check, setCheck] = useState(false);
  const [cross, setCross] = useState(false);
  // const [correct, setCorrect] = useState(0);
  // const [incorrect, setIncorrect] = useState(0);
  const Mark = useRef(new Animated.Value(0)).current;
  const [dis, setDis] = useState(false);
  const [effect, setEffect] = useState(false);

  useEffect(() => {
    Animated.sequence([
      Animated.timing(Mark, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(Mark, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setCheck(false);
      setCross(false);
      drawCards();
      setDis(() => false);
    });
  }, [effect]);

  const drawCards = () => {
    solutionCard.current = getRandomColor(Colors);
    cardText.current = (getRandomColor(Colors));
    cards.current = ([solutionCard.current, getRandomColor(Colors)]);
    rCardColor.current = (getRandomColor(Colors));
    rCardText.current = (getRandomColor(cards.current));
    lCardColor.current = (getRandomColor(Colors));
    lCardText.current = (getOther(rCardText.current, solutionCard.current));
  };

  const handlePress = (card) => {
    card === solutionCard.current
      ? (setCheck(true), setEffect(!effect))
      : (setCross(true), setEffect(!effect));
    setDis(() => true);
  };

  console.log(dis);
  return (
    <View style={styles.container}>
      <View style={styles.markView}>
        <Animated.View style={{ opacity: Mark }}>
          {check ? (
            <Image source={require("../../assets/colorMatching/check.png")} />
          ) : null}
          {cross ? (
            <Image source={require("../../assets/colorMatching/cross.png")} />
          ) : null}
        </Animated.View>
      </View>
      <View style={styles.solutionCard}>
        <Text style={[styles.cardText, { color: solutionCard.current }]}>
          {cardText.current}
        </Text>
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.colorButton}
          onPress={() => {
            // console.log("press " + (correct + incorrect));
            handlePress(rCardText.current);
          }}
          disabled={dis}
        >
          <Text style={[styles.cardText, { color: rCardColor.current }]}>
            {rCardText.current}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.colorButton}
          onPress={() => {
            //console.log("press " + (correct + incorrect));
            handlePress(lCardText.current);
          }}
          disabled={dis}
        >
          <Text style={[styles.cardText, { color: lCardColor.current }]}>
            {lCardText.current}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
