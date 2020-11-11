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
import Node from "./Node";
import { useNavigation } from "@react-navigation/native";

const Intro = ({ title, statArray, about, helpful, start }) => {
  //May use this later, dont need it for now
  const [voice, setVoice] = useState(false);
  const [startActivity, setStartActivity] = useState(false);

  return (
    <View>
      <View style={styles.upper}></View>
      <View style={styles.lower}>
        <Text style={styles.title}>Box Breathing</Text>
        <View style={styles.statsRow}>
          <View>
            <Text style={styles.statType}>Time (mins)</Text>
            <Text style={styles.stats}>2</Text>
          </View>

          <View>
            <Text style={styles.statType}>Time(s) Completed</Text>
            <View
              style={{
                borderLeftWidth: 2,
                borderRightWidth: 2,
                width: 130,
                borderColor: "#C4C4C4",
              }}
            >
              <Text style={styles.stats}>1</Text>
            </View>
          </View>

          <View>
            <Text style={styles.statType}>Add to Favorite</Text>
            <TouchableOpacity>
              <Image
                style={{ marginLeft: "32%" }}
                source={require("../../assets/favorite.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.descriptions}>2 minutes</Text>
        <Text style={styles.descriptions}>
          Take a walk with Sprite while you work on a calming breathing pattern
        </Text>

        <Text style={styles.sectionTitle}>Helpful when..</Text>
        <Text style={styles.descriptions}>
          you are feeling very sad, mad, scared, or worried. This can help you
          feel more calm
        </Text>

        {/*<TouchableOpacity onPress = {()=>start(true)} style = {styles.start}>*/}
        <TouchableOpacity
          onPress={start ? () => start(true) : null}
          style={styles.start}
        >
          <Text style={styles.startText}>Start Box Breathing</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const IntroStory = ({ start }) => {
  const [page, setPage] = useState(0);

  //Modify this array to add more screens
  const storyMap = [
    {
      question:
        "While we walk and breathe, follow the instructions on the sand. Click 'Go' when you're ready to start!",
      answers: ["Go"],
      background: "forest",
    },
  ];

  //Implementing story progression mechanism
  return (
    <View style={styles.introContainer}>
      <View style={styles.prompt}>
        <View style={styles.questionBox}>
          <Text style={{ color: "white", textAlign: "center" }}>
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
              <Text style={{ textAlign: "center" }}>{answer}</Text>
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
            <Text style={{ color: "white", textAlign: "center" }}>
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
                    ? navigation.navigate("kpi")
                    : setPage(page + 1);
                }}
                key={key}
              >
                <Text style={{ textAlign: "center" }}>{answer}</Text>
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
  const length2 = useRef(new Animated.Value(280)).current;
  const length3 = useRef(new Animated.Value(290)).current;
  const length4 = useRef(new Animated.Value(0)).current;
  const move1 = useRef(new Animated.ValueXY({ x: 20, y: 330 })).current;
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
        toValue: 280,
        duration: 0,
        useNativeDriver: false,
      }),
      Animated.timing(length3, {
        toValue: 290,
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
                toValue: { x: 300, y: 330 },
                useNativeDriver: false,
                duration: 4000,
              }),
              Animated.timing(length1, {
                toValue: 290,
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
                toValue: { x: 300, y: 60 },
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
                toValue: { x: 20, y: 60 },
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
                toValue: { x: 20, y: 330 },
                useNativeDriver: false,
                duration: 4000,
              }),
              Animated.timing(length4, {
                toValue: 285,
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
    left: "14.5%",
    top: 395,
    width: length1,
    borderWidth: 10,
    borderColor: "#064B5B",
    zIndex: 3,
  };

  //Light blue
  const animated2 = {
    position: "absolute",
    top: 135,
    right: 64,
    width: 10,
    borderWidth: topRightCorner,
    height: length2,
    borderColor: "#429BAF",
    zIndex: 2,
  };

  //Light blue frame 3
  const animated3 = {
    position: "absolute",
    top: 134,
    left: 60,
    width: length3,
    borderWidth: 10,
    borderColor: "#429BAF",
  };

  //Dark blue moving bar 4
  const animated4 = {
    position: "absolute",
    top: 134,
    left: 60,
    borderWidth: leftBar,
    height: length4,
    borderColor: "#064B5B",
    zIndex: 1,
  };

  return (
    <View>
      {outro && <OutroStory />}

      <ImageBackground
        source={require("../../assets/boxBreathing/beach.png")}
        style={styles.backgroundImage}
      >
        {!start ? (
          <Intro start={setStart} />
        ) : (
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
        )}
      </ImageBackground>
    </View>
  );
};

export default boxBreathing;
