import React, { useState, useEffect, useRef } from "react";
import { Animated, SafeAreaView, Text, View, StyleSheet } from "react-native";

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

export default function TrainSuperhero() {
  let animation = useRef(new Animated.Value(0));
  const [progress, setProgress] = useState(0);
  const [cycleCount, setCycleCount] = useState(0);
  const exerciseData = [
    { id: 1, name: "Jumping Jacks", img: "path" },
    { id: 2, name: "Mountain Climbers", img: "path" },
    { id: 3, name: "Squats", img: "path" },
    { id: 4, name: "March", img: "path" },
    { id: 5, name: "Jog in Place", img: "path" },
    { id: 6, name: "Side Reach", img: "path" },
  ];
  const cycleLimit = 3;
  const endTime = 5;

  useInterval(() => {
    if (progress < endTime && cycleCount < cycleLimit) {
      setProgress(progress + 1);
    } else if (cycleCount < cycleLimit) {
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
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>{exerciseData[cycleCount].name}</Text>
      <View style={styles.progressBar}>
        <Animated.View
          style={
            ([StyleSheet.absoluteFill], { backgroundColor: "#8BED4F", width })
          }
        />
      </View>
      <Text>{progress}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  progressBar: {
    flexDirection: "row",
    height: 20,
    width: "100%",
    backgroundColor: "white",
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 5,
  },
});
