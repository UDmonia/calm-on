import React, { useState, useEffect, useRef } from "react";
import { View, Text, Image, TouchableOpacity, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../stylesheets/components/colorCardStyles";
import Colors from "../data/cardmatchData";
import Exit from "../components/Exit";
import { addScore} from "../actions/score";
import { useDispatch, useSelector } from "react-redux";
import deviceStorage from '../services/device_storage.js';

const getRandomColor = (colors) => {
  return colors[Math.floor(Math.random() * colors.length)];
};

/**
 *
 * @param {{text: String, color: String}} card : Object value to compare with solution
 * @param {{text: String, color: String}} solution :  Object solution
 */
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

export default MatchTheColor = ({ navigation }) => {
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
  const Mark = useRef(new Animated.Value(0)).current;
  const disa = useRef(false);
  const [effect, setEffect] = useState(false);
  const firstRender = useRef(true);
  // NOTE: correct and incrrect are intended to be used later for keeping track of score
  // const [bestScore,newBestScore] = useState(null);
  const [getScoreOnce, setRan] = useState(false);

  const correct = useRef(0);
  const incorrect = useRef(0);
  const bestScore = useSelector((store) => store.score.score);
  const dispatch = useDispatch();

  // get score from device storage
  const getFromStorage = () => {
    deviceStorage.get('score')
    .then(score=>{
      // save thru redux
      dispatch({type: 'ADD_SCORE', data: score});
    })
    .catch(err=>{throw err});
  }

  // save the score to device storage then get the score from device storage then dispatch that
  // score to redux store
  const saveThenGetFromStorage = (score) => {
    // save to device storage
    deviceStorage.save('score',score.toString())
      .then(success=>{
        //then retrieve from device storage
        getFromStorage();
      })
      .catch(err=>{throw err});
  }

  useEffect(() => {

    // get intial best score from device storage
    if (!getScoreOnce) {
      getFromStorage()
    }

    if (firstRender.current === false) {
      Animated.sequence([
        Animated.timing(Mark, {
          toValue: 2,
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
      //console.log(correct.current - incorrect.current);
      //bestScore();
      navigation.pop();
      navigation.navigate("MatchScore", {
        //score: correct.current - incorrect.current,
        score: setScore(),
        bestScore: bestScore
      });
    }
  }, 1000);

  const getScore = () => {
    if (correct.current - incorrect.current <= 0) {
      return 0;
    } else {
      return correct.current - incorrect.current;
    }
  };

  const setScore = () => {
    const newScore = getScore();
    if (bestScore < newScore) {
      // deviceStorage.save('score',newScore.toString());
      // dispatch(addScore(newScore));
      saveThenGetFromStorage(newScore);
    }
    console.log('new score')
    return newScore;
  };

  /**
   * Reset flags after animation
   * reenable button pressses
   */
  const setMarks = () => {
    check.current = false;
    cross.current = false;
    disa.current = false;
  };

  /**
   * intalize next set of cards
   */
  const drawCards = () => {
    solutionCard.current = getRandomColor(Colors);
    cardText.current = getRandomColor(Colors);
    cards.current = [solutionCard.current, getRandomColor(Colors)];
    rCardColor.current = getRandomColor(Colors);
    rCardText.current = getRandomColor(cards.current);
    lCardColor.current = getRandomColor(Colors);
    lCardText.current = getOther(rCardText.current, solutionCard.current);
  };

  /**
   * compares the passed card with the solution card and sets the appropiate flag
   *
   * @param {String} card : value to compare to the solution
   */
  const handlePress = (card) => {
    disa.current = true;
    firstRender.current = false;
    if (card === solutionCard.current.text) {
      (check.current = true), setEffect(!effect);
      correct.current = correct.current + 1;
    } else {
      (cross.current = true), setEffect(!effect);
      incorrect.current = incorrect.current + 1;
    }
  };

  /**
   * formats the timer display
   */
  const timerFormat = () => {
    if (progress >= 60) {
      return `1:00`;
    } else if (progress < 10) {
      return `0:0${progress}`;
    } else {
      return `0:${progress}`;
    }
  };

  /**
   * returns the correct mark based on a correct or wrong answer
   */
  const dispalyMark = () => {
    if (check.current) {
      return <Image source={require("../../assets/colorMatching/check.png")} />;
    }
    if (cross.current) {
      return <Image source={require("../../assets/colorMatching/cross.png")} />;
    }
  };

  /**
   * returns a view for the score text
   */
  const displayScore = () => {
    if (check.current) {
      return (
        <View style={styles.scoreText}>
          <Text style={[{ color: "#FFD00D" }, styles.score]}>+1</Text>
        </View>
      );
    }
    if (cross.current) {
      return (
        <View style={styles.scoreText}>
          <Text style={[{ color: "#000000" }, styles.score]}>-1</Text>
        </View>
      );
    }
  };

  // console.log(bestScore);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.clockView}>
        <View style={styles.exit}>
          <Exit
            navTo={"Modal"}
            img={require("../../assets/colorMatching/exit.png")}
          />
        </View>
        <View style={styles.timerView}>
          <Image source={require("../../assets/colorMatching/clock.png")} />
          <Text style={styles.clock}>{timerFormat()}</Text>
        </View>
      </View>
      <View style={styles.solutionView}>
        <View style={styles.markView}>
          <Animated.View style={{ opacity: Mark }}>
            {dispalyMark()}
          </Animated.View>
        </View>
        <View style={styles.solutionCard}>
          <Text
            style={[styles.cardText, { color: solutionCard.current.color }]}
          >
            {cardText.current.text}
          </Text>
        </View>
      </View>
      <View style={styles.textView}>
        <Animated.View style={{ opacity: Mark }}>
          {displayScore()}
        </Animated.View>
      </View>
      <View style={styles.buttonView}>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.colorButton}
            onPress={() => handlePress(rCardText.current.text)}
            disabled={disa.current}
          >
            <Text
              style={[styles.cardText, { color: rCardColor.current.color }]}
            >
              {rCardText.current.text}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.colorButton}
            onPress={() => handlePress(lCardText.current.text)}
            disabled={disa.current}
          >
            <Text
              style={[styles.cardText, { color: lCardColor.current.color }]}
            >
              {lCardText.current.text}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
