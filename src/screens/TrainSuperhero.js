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

function Intro(params) {
  return ()
};

export default function TrainSuperhero({ navigation: { navigate } }) {
  const timer = 30;
  const cycleLimit = 3;
  const [intro, setIntro] = useState(true);
  const [progress, setProgress] = useState(timer);
  const [introProgress, setIntroProgress] = useState(3);
  const [cycleCount, setCycleCount] = useState(0);
  const [randomExercises, setRandomExercises] = useState(() =>
    getRandExercises(3, exerciseData)
  );
  let animation = useRef(new Animated.Value(0));

  useInterval(() => {
    if (intro && introProgress > 0) {
      // show the intro timer!
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
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            // backgroundColor: "blue",
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
                  We are starting with {randomExercises[0].name}. Ready?
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
                {randomExercises[cycleCount].name}
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
                source={randomExercises[cycleCount].img}
              />
            </View>
          </View>
        )}
        <View
          style={{
            // backgroundColor: "brown",
            height: "5%",
          }}
        ></View>
      </SafeAreaView>
    </ImageBackground>
  );
}
