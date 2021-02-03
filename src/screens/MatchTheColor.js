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

/**
 * Custom Hook created by Dan Abramov
 *
 * useInterval Hook sets up an interval and clears it after unmounting.
 * It’s a combo of setInterval and clearInterval tied to the component lifecycle.
 *
 * Source:
 * - https://blog.logrocket.com/how-to-build-a-progress-bar-with-react-native/
 * - https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 */
function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default MatchTheColor = ({ navigation: { navigate } }) => {
  const timer = 60;
  const [progress, setProgress] = useState(timer);
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

  /**
   * The useInterval hook is the work horse of this activity
   * based on it's "1000" millisecond tick it will:
   * - decrement the timer for the Intro sequence
   * - once "introProgress" is 0, advance to Exercises sequence
   * - "cycleCount" determines how many times we loop
   * - "progress" is the timer for each individual exercise
   * - once our "cycleCount" is 1 short of cycleLimit we procceed to
   *  the kpi screen
   */
  useInterval(() => {
    if (progress > 0) {
      setProgress(progress - 1);
    }
  }, 1000);

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

  //console.log(dis);
  console.log(progress);
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
