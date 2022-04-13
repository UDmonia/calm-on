import React, { useState, useLayoutEffect, useEffect } from "react";
import { View, Image, TouchableOpacity, TextInput, Text } from "react-native";
import { logout, editProfile } from "../actions/session_actions.js";
import { useDispatch } from "react-redux";
import styles from "../stylesheets/profileStyles.js";

const coaches = [
  { name: "Aurora", img: require("../../assets/profile/auora.png") },
  { name: "Flynn", img: require("../../assets/profile/flynn.png") },
  { name: "Sprite", img: require("../../assets/profile/sprite.png") },
];

const Setting = ({ route, navigation: { navigate, setOptions } }) => {
  const { description, header, data, email, currentCoachIndex } = route.params;
  const [coachIndex, setIndex] = useState(currentCoachIndex);
  const [message, setMessage] = useState("");
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    setOptions({
      title: header,
    });
  }, [header]);

  useEffect(() => {
    // count down 2 seconds and message disappears
    if (message.length !== 0) {
      setTimeout(() => {
        setMessage("");
      }, 2000);
    }
  }, [message]);

  const cycleCoach = (next) => {
    if (next) {
      setIndex((coachIndex) => coachIndex + 1);
    } else {
      setIndex((coachIndex) => coachIndex - 1);
    }
  };

  const validateEmail = (email) =>
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

  const handleUpdate = (header) => {
    const successMessage = (info) => `${info} changed sucessfully!`;
    const errMessage = (info) => `Could not update ${info}!`;

    // message depends on if dispatched action returns a resolved promise or rejected promise

    if (header === "Email") {
      if (validateEmail(value)) {
        dispatch(editProfile({ email: value }))
          .then(() => setMessage(successMessage("Email")))
          // error message might change
          .catch(() => setMessage(errMessage("Email")));
      } else {
        // front end email format validation
        setMessage('Email format must be: "example@email.com"');
      }
    }
    // email
    if (header === "Name") {
      dispatch(editProfile({ name: value }))
        .then(() => setMessage(successMessage("Name")))
        .catch(() => setMessage(errMessage("Name")));
    }
    // coach
    if (header === "Coach") {
      dispatch(editProfile({ coach: coaches[coachIndex].name }))
        .then(() => setMessage(successMessage("Coach")))
        .catch(() => setMessage(errMessage("Coach")));
    }
    // password
    if (header === "Password") {
      // api call
      // successful return: navigate to verification page
      dispatch(editProfile({ password: value }))
        .then(() => setMessage(successMessage("Password")))
        .catch(() => setMessage(errMessage("Password")));
      // ( we will not do this for now since we dont have backend setup)
      // navigate("Verification", { email });
    }

    // some kind of successful message
    // some kind of error message
  };

  useEffect(() => {
    if (coachIndex > coaches.length - 1) {
      setIndex(0);
    }
    if (coachIndex < 0) {
      setIndex(coaches.length - 1);
    }
  }, [coachIndex]);

  return (
    <View style={styles.container}>
      <View style={[styles.main, { marginTop: "20%" }]}>
        {header !== "Coach" ? (
          // display any other settings but Coach
          <View>
            <Text style={styles.header}>
              {description ? description : header}
            </Text>
            <TextInput
              onChangeText={(value) => setValue(value)}
              secureTextEntry={header === "Password"}
              style={styles.input}
              defaultValue={data}
              clearButtonMode="while-editing"
            />
          </View>
        ) : (
          // display current coach and can cycle through all coaches
          <View style={styles.coachContainer}>
            <TouchableOpacity onPress={() => cycleCoach(false)}>
              <Image
                style={styles.chevron}
                source={require("../../assets/profile/chevronLeft_Med.png")}
              />
            </TouchableOpacity>
            <Image
              style={styles.chevron}
              source={coaches[coachIndex] && coaches[coachIndex].img}
            />
            <TouchableOpacity onPress={() => cycleCoach(true)}>
              <Image
                style={styles.chevron}
                source={require("../../assets/profile/chevronRight_Med.png")}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => handleUpdate(header)}
          style={[styles.button, { backgroundColor: "#8AABFF" }]}
        >
          <Text style={[styles.buttonText, { color: "white" }]}>
            Update {header}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.messageContainer}>
        <Text style={styles.message}>{message}</Text>
      </View>
    </View>
  );
};

export default Setting;
