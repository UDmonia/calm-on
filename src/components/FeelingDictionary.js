import React from "react";
import { View,SafeAreaView, ScrollView, Image } from "react-native";
import styles from "../stylesheets/feelingDictionaryStyles";
import Text from './Text';
/**
 * This screen is a dictionary of what each feeling means.
 * Data is stored in objects and is mapped on to a component.
 * Add data to feeling data to add it to the list.
 */
const feelingData = [
  {
    id: 1,
    title: "Happy",
    img: require("../../assets/emotions/happySelected.png"),
    description:
      "When something or someone makes you smile or laugh\n\nI am happy to play games.",
    color: "rgba(251, 196, 35, 0.5)",
  },
  {
    id: 2,
    title: "Excited",
    img: require("../../assets/emotions/excitedSelected.png"),
    description:
      "Showing high energy, enthusiasm, interest, eagerness for something or someone\n\nI am excited that Mama is taking me to see the seals tomorrow.",
    color: "rgba(174, 212, 176, 0.5)",
  },
  {
    id: 3,
    title: "Scared",
    img: require("../../assets/emotions/scaredSelected.png"),
    description:
      "When something or someone causes you to tremble, freeze, panic or scream\n\nI am scared because there is a monster under my bed.",
    color: "rgba(165, 223, 240, 0.5)",
  },
  {
    id: 4,
    title: "Worried",
    img: require("../../assets/emotions/worriedSelected.png"),
    description:
      "When you keep thinking about problems you have or about bad things that might happen\n\nI am worried that something bad will happen if we go outside.",
    color: "rgba(232, 178, 133, 0.5)",
  },
  {
    id: 5,
    title: "Sad",
    img: require("../../assets/emotions/sadSelected.png"),
    description:
      "When something happens that you don't like\n\nI am sad that I can’t play with my friends.",
    color: "rgba(223, 154, 255, 0.5)",
  },
  {
    id: 6,
    title: "Angry",
    img: require("../../assets/emotions/angrySelected.png"),
    description:
      "A strong feeling you have when something is wrong, unfair or unreasonable. It can range from annoyance to rage.\n\nI am angry because my dad promised to take me to the zoo, but he didn’t.",
    color: "rgba(240, 150, 150, 0.5)",
  },
];

function singleFeeling(feeling) {
  return (
    <View style={styles.column}>
      <View style={styles.border} />
      <View style={styles.row}>
        <View style={[styles.column, styles.imgTitleContainer]}>
          <Image
            key={feeling.id}
            style={styles.feelingImg}
            source={feeling.img}
          />
          <Text style={styles.feelingName}>{feeling.title}</Text>
        </View>
        <View
          style={[
            styles.wrap,
            styles.outerDesc,
            { backgroundColor: feeling.color },
          ]}
        >
          <View style={styles.innerDesc}>
            <Text style={styles.text}>{feeling.description}</Text>
          </View>
        </View>
      </View>
      <View style={styles.border} />
    </View>
  );
}

export default FeelingDictionary = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.pageTitle}>Emotion Dictionary</Text>
        {feelingData.map((feeling) => {
          return singleFeeling(feeling);
        })}
      </ScrollView>
    </SafeAreaView>
  );
};
