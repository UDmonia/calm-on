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
import milkTreeData from "../data/milkTreeData";
import styles from "../stylesheets/milkMilkMilkStyles";

class testingTreeTraversal extends React.Component {
  constructor(props) {
    super(props);
    this.milkMilkMilkData = milkTreeData;

    this.state = {
      question: this.milkMilkMilkData.question,
      answers: this.milkMilkMilkData.answers,
      animation: null,
      nxtNode: this.milkMilkMilkData.nxtNode,
    };

    this._traverseTree = this._traverseTree.bind(this);
  }

  _findNode(answer) {
    return this.state.nxtNode.find((node) => node.key === answer);
  }

  _traverseTree(answer) {
    const newNode = this._findNode(answer);
    if (newNode !== undefined) {
      this.setState((prevState) => {
        const updatedState = {
          ...prevState,
          question: newNode.question,
          answers: newNode.answers,
          animation: newNode.animation,
          nxtNode: newNode.nxtNode,
        };
        return updatedState;
      });
    } else {
      console.log("done with the activity.");
    }
  }

  render() {
    return (
      <View style={styles.box}>
        <View style={styles.top}>
          <Text style={styles.question}>{this.state.question}</Text>
        </View>

        <View style={styles.bottom}>
          {this.state.answers.map((a, i) => {
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
