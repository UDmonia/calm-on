import React, { useState, useEffect, useRef } from "react";
import {
  Animated,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ImageBackground,
} from "react-native";
import styles from "../stylesheets/screens/trainSuperheroStyles";

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
const exerciseData = [
  { id: 1, name: "Jumping Jacks", img: "path" },
  { id: 2, name: "Mountain Climbers", img: "path" },
  { id: 3, name: "Squats", img: "path" },
  { id: 4, name: "March", img: "path" },
  { id: 5, name: "Jog in Place", img: "path" },
  { id: 6, name: "Side Reach", img: "path" },
];

export default function TrainSuperhero() {
  let animation = useRef(new Animated.Value(0));
  let [introText, setIntroText] = useState("Ready");
  const [intro, setIntro] = useState(true);
  const [progress, setProgress] = useState(0);
  const [introProgress, setIntroProgress] = useState(3);
  const [cycleCount, setCycleCount] = useState(0);
  const cycleLimit = 3;
  const endTime = 5;

  useInterval(() => {
    if (intro && introProgress >= 0) {
      // show the intro timer!
      setIntroProgress(introProgress - 1);
      if (introProgress === 3) {
        setIntroText("Set");
      } else if (introProgress === 0) {
        setIntroText("Go!");
      }
    } else if (intro && introProgress === -1) {
      setIntro(false);
    } else if (progress < endTime && cycleCount < cycleLimit && !intro) {
      setProgress(progress + 1);
    } else if (cycleCount < cycleLimit && !intro) {
      setCycleCount(cycleCount + 1);
      setProgress(0);
    }
  }, 1000);

  const width = animation.current.interpolate({
    inputRange: [0, endTime],
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
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        {intro ? (
          <View>
            <Text>{introText}</Text>
            <Text>{introProgress}</Text>
          </View>
        ) : (
          // <View
          //   style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          // >
          // <Text>{exerciseData[cycleCount].name}</Text>
          <View style={styles.progressBar}>
            <Animated.View
              style={
                ([StyleSheet.absoluteFill],
                { backgroundColor: "#8BED4F", width })
              }
            />
          </View>
          // <Text>{progress}</Text>
          // </View>
        )}
      </SafeAreaView>
    </ImageBackground>
  );
}
