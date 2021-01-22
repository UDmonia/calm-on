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

// used this for timer https://blog.logrocket.com/how-to-build-a-progress-bar-with-react-native/

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

function getRandUnique(arrData, numRetVals) {
  const nums = new Set();
  while (nums.size !== numRetVals) {
    nums.add(Math.floor(Math.random() * arrData.length));
  }

  return nums;
}

function getRandExercises(amount, data) {
  const randomIndexes = [...getRandUnique(exerciseData, amount)];
  const randExercises = randomIndexes.map((index) => {
    return data[index];
  });

  return randExercises;
}

function Intro(props) {
  return (
    <View style={styles.generalContainer}>
      <View style={styles.introTimerContainer}>
        <Text style={styles.introTimer}>
          {props.introProgress > 0 ? props.introProgress : "Go!"}
        </Text>
      </View>
      <View style={styles.introFlynnContainer}>
        <Image
          source={require("../../assets/washHands/flynn.png")}
          style={styles.flynnImg}
        />
      </View>
      <View style={styles.introTextBoxContainer}>
        <View style={styles.textBox}>
          <Text style={styles.text}>
            We are starting with {props.randomExercises[0].name}. Ready?
          </Text>
        </View>
      </View>
    </View>
  );
}

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

export default function TrainSuperhero({ navigation: { navigate } }) {
  const timer = 30;
  const cycleLimit = 3;
  const [intro, setIntro] = useState(true);
  const [progress, setProgress] = useState(timer);
  const [introProgress, setIntroProgress] = useState(3);
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
   * - ""
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
          <Exit />
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
