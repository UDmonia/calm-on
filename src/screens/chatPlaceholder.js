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
 * Figure out how to conditionally import
 */
import { SpriteActivityData } from "../data/activityData";

/**
 * TODO:
 * [X] Use the navigate function out of the main function
 *    - use a string, that will be used by a switch statement to call specific fucntions
 * [X] Pass the route params out of the main function scope
 * [X] Convert all of the class methods to regular functions
 * [X] Import the styles from the milkmilk chat box
 * [ ] Obtain the last emotion entered
 * [ ] Make a tree for all emotions
 */
const spriteHappy = {
  key: null,
  question:
    "Hey _____. I heard you were feeling happy today. Can I tell you a story about the last time I felt happy?",
  answers: ["Ok"],
  animation: null,
  renderAnim: "",
  navInfo: null,
  nxtNode: [
    {
      key: "Ok",
      question:
        "Flynn and I went on a nice hike recently. I could clearly see Fairylantis Bridge, and there was a huuuuge rainbow!",
      answers: ["That sounds like so much fun!"],
      animation: null,
      renderAnim: "",
      navInfo: null,
      nxtNode: [
        {
          key: "That sounds like so much fun!",
          question:
            "Sometimes we need to find our happiness again. How about some activities for those moments?",
          answers: ["Sure!", "No, not right now."],
          animation: null,
          renderAnim: "",
          navInfo: null,
          nxtNode: [
            {
              key: "Sure!",
              question: "Great, let’s go!",
              answers: ["5-4-3-2-1", "Box Breathing"],
              animation: null,
              renderAnim: "",
              navInfo: "",
              nxtNode: [
                {
                  key: "5-4-3-2-1",
                  question: "",
                  answers: [],
                  animation: null,
                  renderAnim: "",
                  navInfo: SpriteActivityData[0], // info for "FiveFourThreeTwoOne"
                  nxtNode: [],
                },
                {
                  key: "Box Breathing",
                  question: "",
                  answers: [],
                  animation: null,
                  renderAnim: "",
                  navInfo: SpriteActivityData[3], // info for boxBreathing
                  nxtNode: [],
                },
              ],
            },
            {
              key: "No, not right now.",
              question: "Okay we can try another activity next time!",
              answers: ["Ok"],
              animation: null,
              renderAnim: "",
              navInfo: null,
              nxtNode: [
                {
                  key: "Ok",
                  question: "",
                  answers: [],
                  animation: null,
                  renderAnim: "",
                  navInfo: "FlatActivities",
                  nxtNode: [],
                },
              ],
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
  const [navInfo, setNavInfo] = useState(spriteHappy.navInfo);

  console.log("Print last emotion");
  if (nxtNode.length === 0) {
    // console.log("done with the activity.");
    if (navInfo === "FlatActivities") {
      navigate("FlatActivities", {
        activities: charaterActivities,
        headerColor: curCharacter.characterColor,
      });
    } else {
      navigate(navInfo.introPageData.navRoute, {
        name: navInfo.title,
        actNav: navInfo.introPageData.ActRoute,
        about: navInfo.introPageData.about,
        helpful: navInfo.introPageData.helpful,
        img: navInfo.introPageData.img,
        headerColor: curCharacter.characterColor,
      });
    }
  }

  function traverseTree(answers) {
    const newNode = findNode(answers, nxtNode);

    setNavInfo(() => newNode.navInfo);
    setQuestion(() => newNode.question);
    setAnswers(() => newNode.answers);
    setNxtNode(() => newNode.nxtNode);
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
                  traverseTree(a);
                  console.log("Called from PRESS");
                  navInfo ? navigate(navInfo) : null;
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
