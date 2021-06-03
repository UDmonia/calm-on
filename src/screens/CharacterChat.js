import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import React, { useState } from "react";
import styles from "../stylesheets/CharacterChatStyles";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  spriteHappy,
  spriteSad,
  spriteAngry,
  spriteScared,
  spriteWorried,
} from "../data/spriteChatData";

/**
 * The default dialogue, if no dialoge has ever been chosen or when the user goes back to the
 * character chat
 */
const defaultDialogue = {
  key: null,
  question: "Let’s do something together!",
  answers: ["Take me to the activities"],
  animation: null,
  renderAnim: "",
  navInfo: null,
  nxtNode: [
    {
      key: "Take me to the activities",
      question: "",
      answers: [],
      animation: null,
      renderAnim: "",
      navInfo: "FlatActivities",
      nxtNode: [],
    },
  ],
};

/**
 * isEmpty: will check whether an object is empty or not
 *
 * @param {Object} inputObject : tested object
 */
function isEmpty(inputObject) {
  return Object.keys(inputObject).length === 0;
}

/**
 * findNode: finds the next node in the tree
 *
 * @param {String} answer : the answer the user selected
 * @param {Array} nxtNode : the array of the next nodes available
 */
function findNode(answer, nxtNode) {
  return nxtNode.find((node) => node.key === answer);
}

/**
 * getEmotion: will return the last emotion the user entered if one doesnt
 *  exist the function will return a "default" string value signaling that
 *  no emotion was ever entered
 *
 * @param {Object} checkinObject: checkinObject will contain
 *  all of the user checkins and returns a string value of the last emotion
 */
function getEmotion(checkinObject) {
  const journals = [];

  if (!isEmpty(checkinObject)) {
    for (const prop in checkinObject) {
      journals.push({ journals: checkinObject[prop], _id: prop, date: prop });
    }
    //Reverse journals array so the first element check-in item is the latest set instead of the oldest
    journals.reverse();
    // last element in this array is the latest emotion input
    const len = journals[0].journals.length;

    return journals[0].journals[len - 1].mood;
  } else {
    return null;
  }
}

/**
 * TODO: add other character dialogue trees when design team is done with them
 * getDialogue: returns the dialogue based on the character chosen and the last emotion
 *  the user input. If no emotion is input getDilogue sends back
 *
 * @param {String} emotion: last emotion entered
 * @param {String} character: current character
 */
function getDialogue(emotion, character) {
  if (character === "Sprite") {
    switch (emotion) {
      case "happy":
        return spriteHappy;
      case "sad":
        return spriteSad;
      case "angry":
        return spriteAngry;
      case "scared":
        return spriteScared;
      case "worried":
        return spriteWorried;
      case "excited": // TODO: replace with the actual worried dialogue
        return spriteWorried;
      default:
        return defaultDialogue;
    }
  } else if (character === "Flynn") {
    switch (emotion) {
      case "happy":
        return spriteHappy;
      case "sad":
        return spriteSad;
      case "angry":
        return spriteAngry;
      case "scared":
        return spriteScared;
      case "worried":
        return spriteWorried;
      case "excited": // TODO: replace with the actual worried dialogue
        return spriteWorried;
      default:
        return defaultDialogue;
    }
  } else if (character === "Aurora") {
    switch (emotion) {
      case "happy":
        return spriteHappy;
      case "sad":
        return spriteSad;
      case "angry":
        return spriteAngry;
      case "scared":
        return spriteScared;
      case "worried":
        return spriteWorried;
      case "excited": // TODO: replace with the actual worried dialogue
        return spriteWorried;
      default:
        return defaultDialogue;
    }
  }
  return defaultDialogue;
}

const CharacterChat = ({ route, navigation: { navigate } }) => {
  const { curCharacter } = route.params;
  const img = curCharacter.img;
  const bg = curCharacter.background;
  const activitiesBtnImg = curCharacter.viewActivities;
  const charaterActivities = curCharacter.activities;
  // if checkinObject is undefined, then there's no checkins
  const checkinObject = useSelector((state) => state.session.user.checkIns) || [];
  const chatEmotion = getEmotion(checkinObject);
  const chatDialogue = getDialogue(chatEmotion, curCharacter.name);
  const [question, setQuestion] = useState(chatDialogue.question);
  const [answers, setAnswers] = useState(chatDialogue.answers);
  const [nxtNode, setNxtNode] = useState(chatDialogue.nxtNode);
  const [navInfo, setNavInfo] = useState(chatDialogue.navInfo);
  const [key, setKey] = useState(chatDialogue.key);
  const name = useSelector((state) => state.session.user.name);

  if (nxtNode.length === 0) {
    setNavInfo(() => defaultDialogue.navInfo);
    setQuestion(() => defaultDialogue.question);
    setAnswers(() => defaultDialogue.answers);
    setNxtNode(() => defaultDialogue.nxtNode);
    setKey(() => defaultDialogue.key);

    // FlatActivities is the default navigation
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
    setKey(() => newNode.key);
  }

  return (
    <ImageBackground style={styles.background} source={bg}>
      <Image style={styles.chosenCharacter} source={img} />
      <View style={styles.activityBtnContainer}>
        <TouchableOpacity
          style={styles.activityBtn}
          onPress={() =>{
            if(curCharacter.name === "Flynn") {
              navigate("FilteredActivities", {
                activities: charaterActivities,
                headerColor: curCharacter.characterColor,
              })
            }
            else {
              navigate("FlatActivities", {
                activities: charaterActivities,
                headerColor: curCharacter.characterColor,
              })
            }
            }
          }
        >
          <Image source={activitiesBtnImg} />
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <View
          style={[styles.top, { backgroundColor: curCharacter.characterColor }]}
        >
          {!key && <Text style={styles.question}>{"Hey "+ name + ". " + question}</Text>}
          {key && <Text style={styles.question}>{question}</Text>}
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

export { getDialogue, defaultDialogue, getEmotion, findNode, isEmpty };
export default CharacterChat;
