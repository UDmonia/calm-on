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
  //console.log(colors);
  return colors[Math.floor(Math.random() * colors.length)];
};

const getOther = (card, solution) => {
  if (card === solution) {
    // console.log("Solution: " + solution);
    // const index = Colors.findIndex((colors) => colors === solution);
    // console.log("index: " + index);
    // const tempArray = Colors.slice();
    // tempArray.forEach((thing) => console.log(thing));
    return getRandomColor(Colors);
  }
  return solution;
};

export default MatchTheColor = ({ navigation: { navigate } }) => {
  const solutionCard = useRef(getRandomColor(Colors)).current
  const [cardText, setCardText] = useState(getRandomColor(Colors));
  const [cards, setCards] = useState([solutionCard, getRandomColor(Colors)]);
  const [rCardColor, setRCardColor] = useState(getRandomColor(Colors));
  const [rCardText, setRCardText] = useState(getRandomColor(cards));
  const [lCardColor, setLCardColor] = useState(getRandomColor(Colors));
  const [lCardText, setLCardText] = useState(getOther(rCardText, solutionCard));
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
    //solutionCard.current = useRef(getRandomColor(Colors));
    //console.log(solutionCard);
    setCardText(getRandomColor(Colors));
    setCards([solutionCard, getRandomColor(Colors)]);
    //console.log(cards);
    setRCardColor(getRandomColor(Colors));
    setRCardText(getRandomColor(cards));
    setLCardColor(getRandomColor(Colors));
    setLCardText(getOther(rCardText, solutionCard));
  };

  const handlePress = (card) => {
    //use if
    card === solutionCard
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
        <Text style={[styles.cardText, { color: solutionCard }]}>
          {cardText}
        </Text>
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.colorButton}
          onPress={() => {
            // console.log("press " + (correct + incorrect));
            handlePress(rCardText);
          }}
          disabled={dis}
        >
          <Text style={[styles.cardText, { color: rCardColor }]}>
            {rCardText}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.colorButton}
          onPress={() => {
            //console.log("press " + (correct + incorrect));
            handlePress(lCardText);
          }}
          disabled={dis}
        >
          <Text style={[styles.cardText, { color: lCardColor }]}>
            {lCardText}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
