import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
import styles from "../stylesheets/components/colorCardStyles";
import Colors from "../data/cardmatchData";

const getRandomColor = (colors) => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const getOther = (card, solution) => {
  if (card === solution) {
    //console.log(card);
    return getRandomColor(Colors);
  }
  return solution;
};

export default MatchTheColor = ({ navigation: { navigate } }) => {
  const solutionCard = getRandomColor(Colors);
  const cards = [solutionCard, getRandomColor(Colors)];
  const rCardText = getRandomColor(cards);
  const lCardText = getOther(rCardText, solutionCard);
  const [check, setCheck] = useState(false);
  const [cross, setCross] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const checkMark = useRef(new Animated.Value(0)).current;
  const crossMark = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (check) {
      //console.log("I made it here");
      //console.log(check);
      Animated.sequence([
        Animated.timing(checkMark, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(checkMark, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ]).start(() => setCheck(false));
    }
    if (cross) {
      //console.log("I made it here");
      Animated.sequence([
        Animated.timing(crossMark, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(crossMark, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),
      ]).start(() => setCross(false));
    }
  }, [check, cross]);

  const handlePress = (card) => {
    card === solutionCard
      ? (setCorrect(correct + 1), setCheck(true))
      : (setIncorrect(incorrect + 1), setCross(true));
  };

  console.log("check: " + check);
  console.log("cross: " + cross);


  function decideAnimation() {
    if (cross) {
      return (
        <Animated.View
          style={{
            opacity: checkMark,
            backgroundColor: "green",
            //marginTop: "60%",
            //position: "absolute",
            zIndex: 2,
          }}
        >
          <Image source={require("../../assets/colorMatching/check.png")} />
        </Animated.View>
      );
    } else if (check) {
      return (
        <Animated.View
          style={{
            opacity: crossMark,
            backgroundColor: "red",
            //marginTop: "60%",
            //position: "absolute",
            zIndex: 1,
          }}
        >
          <Image source={require("../../assets/colorMatching/cross.png")} />
        </Animated.View>
      );
    }
  }

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "grey",
      }}
    >
      <View style={{height: "30%", backgroundColor: "green"}}>{decideAnimation()}</View>
      <View style={styles.solutionCard}>
        {/* {!check ? (
          <Animated.View
            style={{
              opacity: checkMark,
              backgroundColor: "green",
              //marginTop: "60%",
              //position: "absolute",
              zIndex: 2,
            }}
          >
            <Image source={require("../../assets/colorMatching/check.png")} />
          </Animated.View>
        ) : (
          <Animated.View
            style={{
              opacity: crossMark,
              backgroundColor: "red",
              //marginTop: "60%",
              //position: "absolute",
              zIndex: 1,
            }}
          >
            <Image source={require("../../assets/colorMatching/cross.png")} />
          </Animated.View>
        )} */}
        <Text style={[styles.cardText, { color: solutionCard }]}>
          {getRandomColor(Colors)}
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "15%",
          width: "100%",
          //marginTop: "100%",
          padding: "5%",
          backgroundColor: "blue",
        }}
      >
        <TouchableOpacity
          style={styles.colorButton}
          onPress={() => {
            // console.log("press " + (correct + incorrect));
            handlePress(rCardText);
          }}
        >
          <Text style={[styles.cardText, { color: getRandomColor(Colors) }]}>
            {rCardText}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.colorButton}
          onPress={() => {
            //console.log("press " + (correct + incorrect));
            handlePress(lCardText);
          }}
        >
          <Text style={[styles.cardText, { color: getRandomColor(Colors) }]}>
            {lCardText}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
