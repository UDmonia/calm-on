import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "../stylesheets/components/buttonStyles";

export default function Button(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.start, props.styles]}
    >
      <Text style={styles.startText}>{props.text}</Text>
    </TouchableOpacity>
  );
}
