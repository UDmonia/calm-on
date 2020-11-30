import React, { useState, useNativeDriver } from "react";

import {
  View,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Text,
  ImageBackground,
  Animated,
} from "react-native";
import styles from "../stylesheets/milkMilkMilkStyles";

class testingTreeTraversal extends React.Component {
  constructor(props) {
    super(props);
    this.milkMilkMilkData = {
      questions: "Hey Joe, would you like to hear something really cool?",
      answers: ["Yes, please!", "Maybe later"],
      animations: null,
      nxtNode: [
        {
          key: "Yes, please!",
          question:
            'Great! You will love it! Could you say the word "milk" once?',
          answers: ["No", "Yeah"],
          animation: null,
          nxtNode: null,
        },
        { key: "Maybe later", nxtNode: null },
      ],
    };
    this.curNode = {
      question: "",
      answers: [],
      animation: null,
      nxtNode: null,
    };
  }
  _traverseTree(answer) {
    console.log(answer);
  }
  render() {
    return (
      <View style={styles.box}>
        <View style={styles.top}>
          <Text style={styles.question}>{this.milkMilkMilkData.question}</Text>
        </View>

        <View style={styles.bottom}>
          {this.milkMilkMilkData.answers.map((a, i) => {
            return (
              <TouchableOpacity
                key={i}
                style={styles.answer}
                onPress={() => {
                  this._traverseTree(a);
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
    );
  }
}

export default testingTreeTraversal;
