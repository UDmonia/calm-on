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
  // let [introText, setIntroText] = useState("Ready");
  const [intro, setIntro] = useState(true);
  const [progress, setProgress] = useState(0);
  const [introProgress, setIntroProgress] = useState(200);
  const [cycleCount, setCycleCount] = useState(0);
  const cycleLimit = 3;
  const endTime = 5;

  useInterval(() => {
    if (intro && introProgress > 0) {
      // show the intro timer!
      setIntroProgress(introProgress - 1);
    } else if (intro && introProgress === 0) {
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
      <SafeAreaView style={{ flex: 1 }}>
        {intro ? (
          <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: "blue", height: "10%" }}>
              <Exit />
            </View>
            <View style={{ backgroundColor: "yellow", flex: 1 }}>
              <Text style={{ fontSize: 100 }}>
                {introProgress > 0 ? introProgress : "Go!"}
              </Text>
            </View>
            <View style={{ backgroundColor: "pink", flex: 1 }}>
              <Image
                source={require("../../assets/washHands/flynn.png")}
                // style={styles.flynnImg}
              />
            </View>
            <View style={{ backgroundColor: "green", flex: 1 }}>
              <View style={styles.textBox}>
                <Text style={styles.text}>
                  We are starting with [exersize name]. Ready?
                </Text>
              </View>
            </View>
            {/* <View style={{ backgroundColor: "brown", flex: 1 }}></View> */}
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
