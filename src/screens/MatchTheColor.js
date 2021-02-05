import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../stylesheets/components/colorCardStyles";
import Colors from "../data/cardmatchData";
import kpiData from "../data/kpiData";

const getRandomColor = (colors) => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const getOther = (card, solution) => {
  if (card === solution) {
    const index = Colors.findIndex((colors) => colors === solution);
    const tempArray = Colors.slice();
    tempArray.splice(index, 1);
    return getRandomColor(tempArray);
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
  const check = useRef(false);
  const cross = useRef(false);
  const [reRender, setReRender] = useState(0);
  // const correct = useRef(0)
  // const incorrect = useSta(0);
  const Mark = useRef(new Animated.Value(0)).current;
  const disa = useRef(false);
  const [effect, setEffect] = useState(false);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current === false) {
      Animated.sequence([
        Animated.timing(Mark, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(Mark, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setMarks();
        drawCards();
        setReRender(reRender + 1);
      });
    }
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
    } else {
      navigate("kpi", {
        bg: require("../../assets/trainSuperhero/background.png"),
        pMsg: kpiData.trainSuperhero.primMsg,
        sMsg: kpiData.trainSuperhero.secMsg,
      });
    }
  }, 1000);

  const setMarks = () => {
    check.current = false;
    cross.current = false;
    disa.current = false;
  };

  const drawCards = () => {
    solutionCard.current = getRandomColor(Colors);
    cardText.current = getRandomColor(Colors);
    cards.current = [solutionCard.current, getRandomColor(Colors)];
    rCardColor.current = getRandomColor(Colors);
    rCardText.current = getRandomColor(cards.current);
    lCardColor.current = getRandomColor(Colors);
    lCardText.current = getOther(rCardText.current, solutionCard.current);
  };

  const handlePress = (card) => {
    disa.current = true;
    firstRender.current = false;
    if (card === solutionCard.current) {
      (check.current = true), setEffect(!effect);
    } else {
      (cross.current = true), setEffect(!effect);
    }
  };

  //console.log(dis.current);
  //console.log(firstRender.current);
  //console.log(progress < 10 ? `00:0${progress}` : `00:${progress}`);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.clockView}>
        <Image source={require("../../assets/colorMatching/clock.png")} />
        <Text style={styles.clock}>
          {progress >= 60
            ? `1:00`
            : progress < 10
            ? `0:0${progress}`
            : `0:${progress}`}
        </Text>
      </View>
      <View style={styles.solutionView}>
        <View style={styles.markView}>
          <Animated.View style={{ opacity: Mark }}>
            {check.current ? (
              <Image source={require("../../assets/colorMatching/check.png")} />
            ) : null}
            {cross.current ? (
              <Image source={require("../../assets/colorMatching/cross.png")} />
            ) : null}
          </Animated.View>
        </View>
        <View style={styles.solutionCard}>
          <Text style={[styles.cardText, { color: solutionCard.current }]}>
            {cardText.current}
          </Text>
        </View>
      </View>
      <View style={styles.textView}>
        <Animated.View style={{ opacity: Mark }}>
          {check.current ? (
            <View style={styles.scoreText}>
              <Text style={[{ color: "green" }, styles.score]}>Correct!</Text>
              <Text style={[{ color: "green" }, styles.score]}>+1</Text>
            </View>
          ) : null}
          {cross.current ? (
            <View style={styles.scoreText}>
              <Text style={[{ color: "red" }, styles.score]}>Incorrect!</Text>
              <Text style={[{ color: "red" }, styles.score]}>-1</Text>
            </View>
          ) : null}
        </Animated.View>
      </View>
      <View style={styles.buttonView}>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.colorButton}
            onPress={() => {
              handlePress(rCardText.current);
            }}
            disabled={disa.current}
          >
            <Text style={[styles.cardText, { color: rCardColor.current }]}>
              {rCardText.current}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.colorButton}
            onPress={() => {
              handlePress(lCardText.current);
            }}
            disabled={disa.current}
          >
            <Text style={[styles.cardText, { color: lCardColor.current }]}>
              {lCardText.current}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
