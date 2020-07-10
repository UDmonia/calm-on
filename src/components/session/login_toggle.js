/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import styles from "../../stylesheets/loginSignup.styles";

const LoginToggle = ({ login, setLogin }) => (
  <View style={styles.buttonGroup}>
    <TouchableOpacity
      onPress={setLogin(true)}
      style={login ? { ...styles.topButtons, borderBottomWidth: 5 } : null}
    >
      <Text
        style={
          login
            ? { ...styles.topButtonText, fontWeight: "bold" }
            : { ...styles.topButtonText }
        }
      >
        Login
      </Text>
    </TouchableOpacity>

    {/* Signup page button */}

    <TouchableOpacity
      onPress={setLogin(false)}
      style={
        !login
          ? {
              ...styles.topButtons,
              marginLeft: 50,
              borderBottomWidth: 5,
            }
          : { marginLeft: 50 }
      }
    >
      <Text
        style={
          !login
            ? { ...styles.topButtonText, fontWeight: "bold" }
            : { ...styles.topButtonText }
        }
      >
        Sign Up
      </Text>
    </TouchableOpacity>
  </View>
);

export default LoginToggle;
