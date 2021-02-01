import React, { useState, useEffect, useRef } from "react";
import {
  Animated,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";
import styles from "../stylesheets/screens/trainSuperheroStyles";
import kpiData from "../data/kpiData";
import exerciseData from "../data/trainSuperheroData";

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

/**
 * getRandUnique is a helper function to getRandExercises. It returns
 * a random array of indexes that are also unique. The size of the
 * array is dictated by "numRetVals" parameter
 *
 * @param {Array} arrData : Array we want random and unique indexes from
 * @param {Number} numRetVals : integer value specifying how many random
 *  numbers we want returned
 */
function getRandUnique(arrData, numRetVals) {
  const nums = new Set();
  while (nums.size !== numRetVals) {
    nums.add(Math.floor(Math.random() * arrData.length));
  }

  return nums;
}

/**
 * getRandExercises returns a random array of exercises from the imported
 * array data
 *
 * @param {Number} amount : integer value specifying how many random
 *  numbers we want returned
 * @param {Array} data : Array we want random and unique indexes from
 */
function getRandExercises(amount, data) {
  const randomIndexes = [...getRandUnique(exerciseData, amount)];
  const randExercises = randomIndexes.map((index) => {
    return data[index];
  });

  return randExercises;
}

/**
 * Intro component is the first sequnece of this activity. Displaying
 * a short count down timer for preparation of the exercises
 *
 * @param {Number} introProgress : integer used to show
 * @param {Array} randomExercises : Array containing a random selection of
 *  exercise objects
 */
function Intro(props) {
  const introProgress = props.introProgress;
  const randomExercises = props.randomExercises;

  return (
    <View style={styles.generalContainer}>
      <View style={styles.introTimerContainer}>
        <Text style={styles.introTimer}>
          {introProgress > 0 ? introProgress : "Go!"}
        </Text>
      </View>
      <View style={styles.introFlynnContainer}>
        <Image
          source={require("../../assets/trainSuperhero/basePic.png")}
          style={styles.flynnImg}
        />
      </View>
      <View style={styles.introTextBoxContainer}>
        <View style={styles.textBox}>
          <Text style={styles.text}>
            We are starting with {randomExercises[0].name}. Ready?
          </Text>
        </View>
      </View>
    </View>
  );
}

/**
 * The Exercise component handles the second portion of the activity
 * displaying the random exercise, timer and the progress bar
 *
 * @param {String} randomExercises : array with random exercises
 * @param {Number} cycleCount : integer with the current cycle number used
 *  display the current exercise
 * @param {Number} progress : integer with the current progress for the timer
 * @param {Number} width : integer specifying the width of the progress bar
 */
function Exercises(props) {
  const randomExercises = props.randExercises;
  const cycleCount = props.cycleCount;
  const progress = props.progress;
  const width = props.width;

  return (
    <View style={styles.generalContainer}>
      <View style={styles.exercisesTimerContainer}>
        <Text style={styles.exercisesNameText}>
          {randomExercises[cycleCount].name}
        </Text>
        <Text style={styles.exercisesTimer}>
          {progress < 10 ? `00:0${progress}` : `00:${progress}`}
        </Text>
        <View style={styles.progressBar}>
          <Animated.View
            style={
              ([StyleSheet.absoluteFill],
              {
                backgroundColor: "#FFA471",
                width,
                borderRadius: 20,
                opacity: 1,
              })
            }
          />
        </View>
      </View>
      <View style={styles.exercisesImageContainer}>
        <Image
          style={styles.exercisesImage}
          source={randomExercises[cycleCount].img}
        />
      </View>
    </View>
  );
}

/**
 * The TrainSuperhero or "Train Like a Superhero" activity is broken up
 * into two main components "Intro" and "Exercises" based on our timer
 * we will proceed from the "Intro" component to the "Exercises" component
 */
export default function TrainSuperhero({ navigation: { navigate } }) {
  const timer = 30;
  const introTimer = 3;
  const cycleLimit = 3;
  const [intro, setIntro] = useState(true);
  const [progress, setProgress] = useState(timer);
  const [introProgress, setIntroProgress] = useState(introTimer);
  const [cycleCount, setCycleCount] = useState(0);
  const [randomExercises, setRandomExercises] = useState(() =>
    getRandExercises(cycleLimit, exerciseData)
  );
  let animation = useRef(new Animated.Value(0));

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
    if (intro && introProgress > 0) {
      setIntroProgress(introProgress - 1);
    } else if (intro && introProgress === 0) {
      setIntro(false);
    } else if (progress > 0 && cycleCount < cycleLimit && !intro) {
      setProgress(progress - 1);
    } else if (cycleCount + 1 === cycleLimit && !intro) {
      navigate("kpi", {
        bg: require("../../assets/trainSuperhero/background.png"),
        pMsg: kpiData.trainSuperhero.primMsg,
        sMsg: kpiData.trainSuperhero.secMsg,
      });
    } else if (cycleCount < cycleLimit && !intro) {
      setCycleCount(cycleCount + 1);
      setProgress(timer);
    }
  }, 1000);

  const width = animation.current.interpolate({
    // setting the end inputRange to the "timer" value defines the width
    // of the progress bar animation
    inputRange: [0, timer],
    outputRange: ["0%", "100%"],
    extrapolate: "clamp",
  });

  useEffect(() => {
    Animated.timing(animation.current, {
      toValue: progress,
      duration: 100,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  return (
    <ImageBackground
      source={require("../../assets/trainSuperhero/background.png")}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.generalContainer}>
        <View style={styles.exitContainer}>
          <Exit navTo={"Modal"} />
        </View>
        {intro ? (
          <Intro
            introProgress={introProgress}
            randomExercises={randomExercises}
          />
        ) : (
          <Exercises
            randExercises={randomExercises}
            cycleCount={cycleCount}
            progress={progress}
            width={width}
          />
        )}
        <View style={styles.bottomPadding} />
      </SafeAreaView>
    </ImageBackground>
  );
}
