import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "../../stylesheets/loginSignup.styles";

const LoginToggle = ({
  login,
  setLogin,
  showUserDialog,
  setShowUserDialog,
}) => (
  <View style={styles.buttonGroup}>
    <TouchableOpacity
      onPress={setLogin(showUserDialog ? false : true)}
      style={login ? { ...styles.topButtons, borderBottomWidth: 5 } : null}
    >
      <Text
        style={
          login
            ? { ...styles.topButtonText, fontFamily: "FontBold" }
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
            ? { ...styles.topButtonText, fontFamily: "FontBold" }
            : { ...styles.topButtonText }
        }
      >
        Sign Up
      </Text>
    </TouchableOpacity>
  </View>
);

export default LoginToggle;
