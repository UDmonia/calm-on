import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import styles from "../stylesheets/feelingDictionaryStyles";

const feelingData = [
  {
    id: 1,
    title: "Happy",
    img: require("../../assets/emotions/angrySelected.png"),
    description:
      "When something or someone makes you smile or laugh\n\nI am happy to play games.",
    color: "rgba(251, 196, 35, 0.5)",
  },
];

export default FeelingDictionary = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.pageTitle}>Emotion Dictionary</Text>
        {feelingData.map((feeling) => {
          return (
            <View style={styles.column}>
              <View style={styles.border} />
              <View style={styles.row}>
                <View style={styles.column}>
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
                    {
                      backgroundColor: feeling.color,
                      justifyContent: "center",
                      alignItems: "center",
                    },
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
        })}
      </ScrollView>
    </SafeAreaView>
  );
};
