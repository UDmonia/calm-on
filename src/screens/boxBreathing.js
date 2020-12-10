import {
  Animated,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import React, { useState, useEffect, useRef, useContext } from "react";
import styles from "../stylesheets/boxBreathingStyles";
import { useNavigation } from "@react-navigation/native";
import kpiData from "../data/kpiData";
import { horizontalLength, horizontalPosition, bottomPosition, topPosition, spriteX1, spriteY1, spriteX2, spriteY2, spriteX3, spriteY3 } from "../util/boxBreathingMeasurements";


const IntroStory = ({ start }) => {
  const [page, setPage] = useState(0);
  //Modify this array to add more screens
  const storyMap = [
    {
      question:
        "While we walk and breathe, follow the instructions on the sand. Click 'Go' when you're ready to start!",
      answers: ["Go!"],
      background: "forest",
    },
  ];

  //Implementing story progression mechanism
  return (
    <View style={styles.introContainer}>
      <View style={styles.prompt}>
        <View style={styles.questionBox}>
          <Text style={{ color: "white", textAlign: "center", fontFamily: "FontBold" }}>
            {storyMap[page].question}
          </Text>
        </View>

        <View>
          {storyMap[page].answers.map((answer, key) => (
            <TouchableOpacity
              style={styles.answers}
              onPress={
                page !== storyMap.length - 1
                  ? () => setPage(page + 1)
                  : () => start(true)
              }
              key={key}
            >
              <Text style={{ textAlign: "center", fontFamily: "FontReg", color: "#DD6755" }}>{answer}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const OutroStory = () => {
  const navigation = useNavigation();
  const [page, setPage] = useState(0);

  const storyMap1 = [
    //branch1
    {
      question:
        "That was so much fun, and I feel much calmer now. What about you?",
      answers: ["I feel calmer too!", "I don't feel different"],
    },
    {
      question:
        "That's great to hear! I always enjoy going ton walks with you, let's walk again soon!",
      answers: ["I also had fun, bye for now!", "Can we walk again now?"],
    },
    {
      question:
        "Okay, I'm looking forwaard to doing more activities with you! Goodbye!",
      answers: ["Bye Bye!"],
    },

    //branch2
    {
      question:
        "Hmm, would you like to go walk some more? Sometimes it takes some time to feel better",
      answers: ["Yea, let's walk again?", "I don't feel different"],
    },
  ];

  const restartThis = () => {
    navigation.pop();
    navigation.navigate("boxBreathing");
  };

  return (
    <View style={styles.introContainer}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../../assets/boxBreathing/beach.png")}
      >
        <View style={styles.prompt}>
          <View style={styles.questionBox}>
            <Text style={{ color: "white", textAlign: "center", fontFamily: "FontReg" }}>
              {storyMap1[page].question}
            </Text>
          </View>

          <View>
            {storyMap1[page].answers.map((answer, key) => (
              <TouchableOpacity
                style={styles.answers}
                onPress={() => {
                  answer === "Can we walk again now?"
                    ? setPage(3)
                    : answer === "Yea, let's walk again?"
                    ? restartThis()
                    : answer === "Bye Bye!"
                    ? navigation.navigate("kpi", {
                      bg: require("../../assets/boxBreathing/beach.png"),
                      pMsg: kpiData.boxBreathing.primMsg,
                      sMsg: kpiData.boxBreathing.secMsg,
                    })
                    : setPage(page + 1);
                }}
                key={key}
              >
                <Text style={{ textAlign: "center", fontFamily: "FontReg" }}>{answer}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const boxBreathing = () => {
  const [start, setStart] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  const [text, setText] = useState("");
  const getReady = 3000;
  const topRightCorner = useRef(new Animated.Value(10)).current;
  const leftBar = useRef(new Animated.Value(0)).current;
  const [outro, showOutro] = useState(false);
  const length1 = useRef(new Animated.Value(0)).current;
  const length2 = useRef(new Animated.Value(horizontalLength)).current;
  const length3 = useRef(new Animated.Value(horizontalLength)).current;
  const length4 = useRef(new Animated.Value(0)).current;
  const move1 = useRef(new Animated.ValueXY({ x: spriteX1, y: spriteY1 })).current;
  const index = useRef(new Animated.Value(0)).current;

  const fadeAnimHoldInAir = useRef(new Animated.Value(0)).current;
  const fadeAnimBreatheAirOut = useRef(new Animated.Value(0)).current;
  const fadeAnimHoldAirOut = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeTimer1 = useRef(new Animated.Value(0)).current;
  const fadeTimer2 = useRef(new Animated.Value(0)).current;
  const fadeTimer3 = useRef(new Animated.Value(0)).current;
  const fadeTimer4 = useRef(new Animated.Value(0)).current;

  const ready1 = useRef(new Animated.Value(0)).current;
  const ready2 = useRef(new Animated.Value(0)).current;

  const timerAnim = () =>
    Animated.sequence([
      Animated.timing(fadeTimer1, {
        toValue: 1,
        duration: 0,
        useNativeDriver: false,
      }),
      Animated.timing(fadeTimer1, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }),

      Animated.timing(fadeTimer2, {
        toValue: 1,
        duration: 0,
        useNativeDriver: false,
      }),
      Animated.timing(fadeTimer2, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(fadeTimer3, {
        toValue: 1,
        duration: 0,
        useNativeDriver: false,
      }),
      Animated.timing(fadeTimer3, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(fadeTimer4, {
        toValue: 1,
        duration: 0,
        useNativeDriver: false,
      }),
      Animated.timing(fadeTimer4, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(fadeTimer1, {
        toValue: 1,
        duration: 0,
        useNativeDriver: false,
      }),
    ]);

  const cleanUp = () => {
    return Animated.parallel([
      Animated.timing(topRightCorner, {
        toValue: 10,
        duration: 0,
        useNativeDriver: false,
      }),

      Animated.timing(length1, {
        toValue: 0,
        duration: 0,
        useNativeDriver: false,
      }),
      Animated.timing(length2, {
        toValue: horizontalLength,
        duration: 0,
        useNativeDriver: false,
      }),
      Animated.timing(length3, {
        toValue: horizontalLength,
        duration: 0,
        useNativeDriver: false,
      }),
      Animated.timing(length4, {
        toValue: 0,
        duration: 0,
        useNativeDriver: false,
      }),
      Animated.timing(leftBar, {
        toValue: 0,
        duration: 0,
        useNativeDriver: false,
      }),
    ]);
  };

  useEffect(() => {
    if (startAnimation) {
      Animated.sequence([
        Animated.timing(ready1, {
          toValue: 1,
          duration: 0,
          useNativeDriver: false,
        }),
        Animated.timing(ready1, {
          toValue: 0,
          duration: 3000,
          useNativeDriver: false,
        }),
        Animated.timing(ready2, {
          toValue: 1,
          duration: 0,
          useNativeDriver: false,
        }),
        Animated.timing(ready2, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: false,
        }),
        Animated.loop(
          Animated.sequence([
            Animated.parallel([
              timerAnim(),
              Animated.timing(move1, {
                toValue: { x: spriteX2, y: spriteY1 },
                useNativeDriver: false,
                duration: 4000,
              }),
              Animated.timing(length1, {
                toValue: horizontalLength,
                duration: 4000,
                useNativeDriver: false,
              }),
              Animated.timing(index, {
                toValue: 1,
                duration: 4000,
                useNativeDriver: false,
              }),

              Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: false,
              }),

              Animated.timing(fadeAnimHoldAirOut, {
                toValue: 0,
                duration: 0,
                useNativeDriver: false,
              }),
            ]),

            Animated.parallel([
              timerAnim(),
              Animated.timing(move1, {
                toValue: { x: spriteX2, y: spriteY3 },
                useNativeDriver: false,
                duration: 4000,
              }),
              Animated.timing(length2, {
                toValue: 0,
                duration: 4000,
                useNativeDriver: false,
              }),
              Animated.timing(fadeAnimHoldInAir, {
                toValue: 1,
                duration: 500,
                useNativeDriver: false,
              }),
              Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 0,
                useNativeDriver: false,
              }),
            ]),

            Animated.timing(index, {
              toValue: 1,
              duration: 0,
              useNativeDriver: false,
            }),
            Animated.timing(topRightCorner, {
              toValue: 0,
              duration: 0,
              useNativeDriver: false,
            }),

            Animated.parallel([
              timerAnim(),
              Animated.timing(move1, {
                toValue: { x: spriteX1, y: spriteY3 },
                useNativeDriver: false,
                duration: 4000,
              }),
              Animated.timing(length3, {
                toValue: 0,
                duration: 4000,
                useNativeDriver: false,
              }),

              Animated.timing(fadeAnimBreatheAirOut, {
                toValue: 1,
                duration: 500,
                useNativeDriver: false,
              }),

              Animated.timing(fadeAnimHoldInAir, {
                toValue: 0,
                duration: 0,
                useNativeDriver: false,
              }),
            ]),

            Animated.timing(leftBar, {
              toValue: 10,
              duration: 0,
              useNativeDriver: false,
            }),

            Animated.parallel([
              timerAnim(),
              Animated.timing(move1, {
                toValue: { x: spriteX1, y: spriteY1 },
                useNativeDriver: false,
                duration: 4000,
              }),
              Animated.timing(length4, {
                toValue: horizontalLength,
                duration: 4000,
                useNativeDriver: false,
              }),

              Animated.timing(fadeAnimHoldAirOut, {
                toValue: 1,
                duration: 500,
                useNativeDriver: false,
              }),

              Animated.timing(fadeAnimBreatheAirOut, {
                toValue: 0,
                duration: 0,
                useNativeDriver: false,
              }),
            ]),

            cleanUp(),
          ]),
          { iterations: 3 }
        ),
      ]).start(() => showOutro(true));
    }
  }, [start, startAnimation]);

  const animated1 = {
    position: "absolute",
    left: horizontalPosition,
    top: bottomPosition,
    width: length1,
    borderWidth: 10,
    borderColor: "#064B5B",
    zIndex: 3,
  };

  //Light blue
  const animated2 = {
    position: "absolute",
    top: topPosition,
    right: horizontalPosition,
    width: 10,
    borderWidth: topRightCorner,
    height: length2,
    borderColor: "#429BAF",
    zIndex: 2,
  };

  //Light blue frame 3
  const animated3 = {
    position: "absolute",
    top: topPosition,
    left: horizontalPosition,
    width: length3,
    borderWidth: 10,
    borderColor: "#429BAF",
  };

  //Dark blue moving bar 4
  const animated4 = {
    position: "absolute",
    top: topPosition,
    left: horizontalPosition,
    borderWidth: leftBar,
    height: length4,
    borderColor: "#064B5B",
    zIndex: 1,
  };

  const navigation = useNavigation();
  console.log("Length: "+ horizontalLength +" | Window: " + horizontalLength/0.70)
  return (
    <View>
      <ImageBackground
        source={require("../../assets/boxBreathing/beach.png")}
        style={styles.backgroundImage}
      >
        <TouchableOpacity
          style={{position: "absolute", top: "5%", left: "5%", zIndex: 14}}
          onPress={ () => {navigation.navigate("kpi", {
                      bg: require("../../assets/boxBreathing/beach.png"),
                      pMsg: kpiData.boxBreathing.primMsg,
                      sMsg: kpiData.boxBreathing.secMsg,
                    })}}>
          <Image
            source={require('../../assets/exit/blkExitBtn.png')}/>
        </TouchableOpacity>
          {outro && <OutroStory />}
          <View style={styles.container}>
            {/*<TouchableOpacity style = {{position:'absolute', top:10,left:10}} source = {require("../../assets/exit_storytime.png")}>
                <Image source = {require("../../assets/exit_storytime.png")}/>
            </TouchableOpacity>*/}

            <Animated.View
              style={[
                styles.numText,
                {
                  opacity: fadeTimer1, // Bind opacity to animated value
                },
              ]}
            >
              <Text style={styles.animatedText}>1</Text>
            </Animated.View>

            <Animated.View
              style={[
                styles.numText,
                {
                  opacity: fadeTimer2, // Bind opacity to animated value
                },
              ]}
            >
              <Text style={styles.animatedText}>2</Text>
            </Animated.View>

            <Animated.View
              style={[
                styles.numText,
                {
                  opacity: fadeTimer3, // Bind opacity to animated value
                },
              ]}
            >
              <Text style={styles.animatedText}>3</Text>
            </Animated.View>

            <Animated.View
              style={[
                styles.numText,
                {
                  opacity: fadeTimer4, // Bind opacity to animated value
                },
              ]}
            >
              <Text style={styles.animatedText}>4</Text>
            </Animated.View>

            <Animated.View
              style={[
                styles.introText,
                {
                  opacity: ready1, // Bind opacity to animated value
                },
              ]}
            >
              <Text style={styles.animatedText2}>Get ready...</Text>
            </Animated.View>

            <Animated.View
              style={[
                { ...styles.introText, left: 160 },
                {
                  opacity: ready2, // Bind opacity to animated value
                },
              ]}
            >
              <Text style={styles.animatedText2}>Start!</Text>
            </Animated.View>

            <Animated.View
              style={[
                styles.text,
                {
                  opacity: fadeAnim, // Bind opacity to animated value
                },
              ]}
            >
              <Text style={styles.animatedText2}>Breathe In...</Text>
            </Animated.View>

            <Animated.View
              style={[
                styles.text,
                {
                  opacity: fadeAnimHoldInAir, // Bind opacity to animated value
                },
              ]}
            >
              <Text style={styles.animatedText2}>Hold In Air...</Text>
            </Animated.View>

            <Animated.View
              style={[
                styles.text,
                {
                  opacity: fadeAnimBreatheAirOut, // Bind opacity to animated value
                },
              ]}
            >
              <Text style={styles.animatedText2}>Breath Out...</Text>
            </Animated.View>

            <Animated.View
              style={[
                styles.text,
                {
                  opacity: fadeAnimHoldAirOut, // Bind opacity to animated value
                },
              ]}
            >
              <Text style={styles.animatedText2}>Hold Air Out...</Text>
            </Animated.View>

            <Animated.View style={[animated1]}></Animated.View>
            <Animated.View style={styles.bottomFrame}></Animated.View>
            <View style={styles.barTop}></View>
            <Animated.View style={[animated3]}></Animated.View>

            <View style={styles.barRight}></View>
            <Animated.View style={[animated2]}></Animated.View>
            <Animated.View style={[animated4]}></Animated.View>
            <View style={styles.coverLeft}></View>
            <Animated.View
              style={[move1.getLayout(), { position: "absolute", zIndex: 5 }]}
            >
              <Image source={require("../../assets/boxBreathing/spirit.png")} />
            </Animated.View>

            {!startAnimation && (
              <View style={{ position: "absolute", top: 20, zIndex: 12 }}>
                <IntroStory start={setStartAnimation} />
              </View>
            )}
          </View>
      </ImageBackground>
    </View>
  );
};

export default boxBreathing;
