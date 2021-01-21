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
  {
    id: 1,
    name: "Jumping Jacks",
    img: require("../../assets/trainSuperhero/jumpingjacks.png"),
  },
  {
    id: 2,
    name: "Mountain Climbers",
    img: require("../../assets/trainSuperhero/jumpingjacks.png"),
  },
  {
    id: 3,
    name: "Squats",
    img: require("../../assets/trainSuperhero/jumpingjacks.png"),
  },
  {
    id: 4,
    name: "March",
    img: require("../../assets/trainSuperhero/jumpingjacks.png"),
  },
  {
    id: 5,
    name: "Jog in Place",
    img: require("../../assets/trainSuperhero/jumpingjacks.png"),
  },
  {
    id: 6,
    name: "Side Reach",
    img: require("../../assets/trainSuperhero/jumpingjacks.png"),
  },
];

function getRandUnique(arrData, numRetVals) {
  const nums = new Set();
  while (nums.size !== 8) {
    nums.add(Math.floor(Math.random() * 100) + 1);
  }

  return nums;
}

export default function TrainSuperhero() {
  let animation = useRef(new Animated.Value(0));
  // let [introText, setIntroText] = useState("Ready");
  const timer = 15;
  const [intro, setIntro] = useState(true);
  const [progress, setProgress] = useState(timer);
  const [introProgress, setIntroProgress] = useState(3);
  const [cycleCount, setCycleCount] = useState(0);
  const cycleLimit = 3;
  const endTime = 15;

  const randomExersizes = getRandUnique(exerciseData, 3);

  useInterval(() => {
    if (intro && introProgress > 0) {
      // show the intro timer!
      setIntroProgress(introProgress - 1);
    } else if (intro && introProgress === 0) {
      setIntro(false);
    } else if (progress > 0 && cycleCount < cycleLimit && !intro) {
      setProgress(progress - 1);
    } else if (cycleCount < cycleLimit && !intro) {
      setCycleCount(cycleCount + 1);
      setProgress(timer);
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
        <View
          style={{
            backgroundColor: "blue",
            height: "12.5%",
            marginLeft: "5%",
            justifyContent: "flex-end",
          }}
        >
          <Exit />
        </View>
        {intro ? (
          <View style={{ flex: 1 }}>
            <View
              style={{
                // backgroundColor: "yellow",
                flex: 2.5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 100,
                  color: "#FFA471",
                  fontFamily: "FontBold",
                }}
              >
                {introProgress > 0 ? introProgress : "Go!"}
              </Text>
            </View>
            <View
              style={{
                // backgroundColor: "pink",
                flex: 2,
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../assets/washHands/flynn.png")}
                style={styles.flynnImg}
              />
            </View>
            <View
              style={{
                // backgroundColor: "green",
                flex: 1,
                alignItems: "center",
              }}
            >
              <View style={styles.textBox}>
                <Text style={styles.text}>
                  We are starting with [exersize name]. Ready?
                </Text>
              </View>
            </View>
          </View>
        ) : (
          <View style={{ flex: 1 }}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 40,
                  color: "#FFA471",
                  fontFamily: "FontBold",
                  marginVertical: "2%",
                }}
              >
                {exerciseData[cycleCount].name}
              </Text>
              <Text
                style={{
                  fontSize: 22.5,
                  color: "#FFA471",
                  fontFamily: "FontReg",
                  marginVertical: "1%",
                }}
              >
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
            <View
              style={{
                flex: 2,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{ height: "70%", width: "100%", resizeMode: "contain" }}
                source={exerciseData[cycleCount].img}
              />
            </View>
          </View>
        )}
        <View style={{ backgroundColor: "brown", height: "5%" }}></View>
      </SafeAreaView>
    </ImageBackground>
  );
}
