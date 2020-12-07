import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import React, { useState } from "react";
import styles from "../stylesheets/chatPlaceholderStyles";

/**
 * TODO:
 * [ ] Use the navigate function out of the main function
 *    - use a string, that will be used by a switch statement to call specific fucntions
 * [ ] Pass the route params out of the main function scope
 * [X] Convert all of the class methods to regular functions
 * [ ] Import the styles from the milkmilk chat box
 * [ ] Obatain the last emotion entered
 */
const spriteHappy = {
  key: null,
  question:
    "Hey _____. I heard you were feeling happy today. Can I tell you a story about the last time I felt happy?",
  answers: ["Ok"],
  animation: null,
  renderAnim: "",
  func: null,
  nxtNode: [
    {
      key: "Ok",
      question:
        "Last weekend, my buddy Flynn and I went on a nice and long hike near Fairylantis! We went on a very scenic trail with a lot of trees. You could see the bridge that connects from Central Fairyland to Northern Fairyland. There was a huuuuge rainbow and it was so beautiful. I felt so happy!",
      answers: [
        "Wow Sprite! That sounds like so much fun! I would like to go there sometime.",
      ],
      animation: null,
      renderAnim: "",
      func: null,
      nxtNode: [
        {
          key:
            "Wow Sprite! That sounds like so much fun! I would like to go there sometime.",
          question:
            "It is great to feel happy, but sometimes there may be a time where you may not feel happy. Why don’t we do some activities to help you be prepared for those moments?",
          answers: ["Sure!", "No, not right now."],
          animation: null,
          renderAnim: "",
          func: null,
          nxtNode: [
            {
              key: "Sure!",
              question: "Great, let’s go!",
              answers: ["5-4-3-2-1", "Box Breathing"],
              animation: null,
              renderAnim: "",
              func: null,
              nxtNode: [
                {
                  key: "5-4-3-2-1",
                  question: "",
                  answers: [],
                  animation: null,
                  renderAnim: "",
                  func: () =>
                    navigation.navigate("FiveFourThreeTwoOneTech", {
                      headerColor: curCharacter.characterColor,
                    }),
                  nxtNode: [],
                },
                {
                  key: "Box Breathing",
                  question: "",
                  answers: [],
                  animation: null,
                  renderAnim: "",
                  func: () =>
                    navigation.navigate("boxBreathing", {
                      headerColor: curCharacter.characterColor,
                    }),
                  nxtNode: [],
                },
              ],
            },
            {
              key: "No, not right now.",
              question:
                "Do any of these pop up in your mind when we say milk? You can choose one of the options above:",
              answers: [],
              animation: null,
              renderAnim: "",
              func: () =>
                navigation.navigate("FlatActivities", {
                  activities: charaterActivities,
                  headerColor: curCharacter.characterColor,
                }),
              nxtNode: [],
            },
          ],
        },
      ],
    },
  ],
};

function findNode(answer, nxtNode) {
  return nxtNode.find((node) => node.key === answer);
}

const chatPlaceholder = ({ route, navigation: { navigate } }) => {
  const { curCharacter } = route.params;
  const img = curCharacter.img;
  const bg = curCharacter.background;
  const activitiesBtnImg = curCharacter.viewActivities;
  const charaterActivities = curCharacter.activities;

  const [question, setQuestion] = useState(spriteHappy.question);
  const [answers, setAnswers] = useState(spriteHappy.answers);
  const [nxtNode, setNxtNode] = useState(spriteHappy.nxtNode);

  function traverseTree(answers) {
    const newNode = findNode(answers, nxtNode);
    if (newNode !== undefined) {
      setQuestion(() => newNode.question);
      setAnswers(() => newNode.answers);
      setNxtNode(() => newNode.nxtNode);
    } else {
      console.log("done with the activity.");
      navigate("FlatActivities", {
        activities: charaterActivities,
        headerColor: curCharacter.characterColor,
      });
    }
  }

  return (
    <ImageBackground style={styles.background} source={bg}>
      <Image style={styles.chosenCharacter} source={img} />
      <View style={styles.activityBtnContainer}>
        <TouchableOpacity
          style={styles.activityBtn}
          onPress={() =>
            navigate("FlatActivities", {
              activities: charaterActivities,
              headerColor: curCharacter.characterColor,
            })
          }
        >
          <Image source={activitiesBtnImg} />
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <View
          style={[styles.top, { backgroundColor: curCharacter.characterColor }]}
        >
          <Text style={styles.question}>{question}</Text>
        </View>
        <View style={styles.bottom}>
          {answers.map((a, i) => {
            return (
              <TouchableOpacity
                key={i}
                style={[
                  styles.answer,
                  { borderColor: curCharacter.characterColor },
                ]}
                onPress={() => {
                  // func;
                  traverseTree(a);
                }}
              >
                <Text key={i} style={styles.a}>
                  {a}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </ImageBackground>
  );
};

export default chatPlaceholder;
