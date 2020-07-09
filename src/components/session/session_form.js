/* eslint-disable react/jsx-filename-extension */

import React, { useState, useEffect } from "react";
import {Image, Text, View, TextInput, TouchableOpacity, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
//import moment from 'moment'

import styles from "../../stylesheets/loginSignup.styles";

import { login as loginUser, register } from "../../actions/session_actions";

// assets
import mail from "../images/mail.png";
import lock from "../images/password.png";
import loginBtn from "../images/logIn.png";
import pwConfirm from "../images/passwordConfirmed.png";
import date from "../images/date.png";
import registerBtn from "../images/createAcc.png";

const initialLogin = {
  email: "",
  password: "",
};

const initialSignUp = {
  email: "",
  password: "",
  confirmPassword: "",
  birthday: "",
};

const SessionForm = ({ login }) => {
  const dispatch = useDispatch();
  const dbErrors = useSelector((store) => store.errors.session);

  const [user, setUser] = useState(initialLogin);
  const [localErrors, setLocalErrors] = useState([]);
  const [show, setShow] = useState(false);
  const [bday,setDate] = useState('')
  const toggleInfo = (l) => setUser(l ? initialLogin : initialSignUp);

  useEffect(() => {
    toggleInfo(login);
    setLocalErrors([]);
  }, [login]);

  const validateEmail = (email) =>
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

  const isValid = () => {
    const keys = Object.keys(user);
    const err = [];

    keys.forEach((key) => {
      const msg =
        key === "confirmPassword"
          ? "password confirmation is required"
          : `${key} is required`;
      if (!user[key].trim().length) err.push(msg);
    });
    if (!validateEmail(user.email)) err.push("Please enter a valid email");
    if (!login && user.password !== user.confirmPassword)
      err.push("does not match");
    setLocalErrors(err);
    return !err.length;
  };

  const handleSubmit = () => {
    if (isValid()) {
      dispatch(login ? loginUser(user) : register(user));
    }
  };

  const handleChange = (field) => (text) => setUser({ ...user, [field]: text });

  const { email, password, confirmPassword, birthday } = user;

  const emailError =
    localErrors.find((e) => e.match(/email/)) || dbErrors.email;
  const passwordError =
    localErrors.find((e) => e.match(/password [^c]/)) || dbErrors.password;
  const confirmPasswordError = localErrors.find((e) => e.match(/match/));

  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate || birthday;
  //   setShow(false);
  //   handleChange("birthday")(currentDate);
  // };


  return (
    <View>
      <View style={styles.form}>
        <View style={styles.label}>
          <Text style={styles.description}>Email</Text>
          {emailError && <Text style={styles.error}>{emailError}</Text>}
        </View>
        <View style={styles.inputAndIcon}>
          <Image styles={styles.icon} source={mail} />
          <TextInput
            onChangeText={handleChange("email")}
            clearButtonMode="while-editing"
            autoCapitalize="none"
            placeholder="Email..."
            style={styles.input}
            value={email}
          />
        </View>

        <View style={styles.label}>
          <Text style={styles.description}>Password</Text>
          {passwordError && <Text style={styles.error}>{passwordError}</Text>}
        </View>
        <View style={styles.inputAndIcon}>
          <Image style={styles.icon} source={lock} />
          <TextInput
            onChangeText={handleChange("password")}
            autoCapitalize="none"
            secureTextEntry
            clearButtonMode="while-editing"
            placeholder="Password..."
            style={styles.input}
            value={password}
          />
        </View>

        {!login && (
          <View>
            <View style={styles.label}>
              <Text style={styles.description}>Confirm Password</Text>
              {confirmPasswordError && (
                <Text style={styles.error}>{confirmPasswordError}</Text>
              )}
            </View>
            <View style={styles.inputAndIcon}>
              <Image styles={styles.icon} source={pwConfirm} />
              <TextInput
                onChangeText={handleChange("confirmPassword")}
                secureTextEntry
                clearButtonMode="while-editing"
                placeholder="Confirm Password..."
                style={styles.input}
                value={confirmPassword}
              />
            </View>

            <Text style={styles.description}>Birthday</Text>
            <View style={styles.inputAndIcon}>
              <Image styles={styles.icon} source={date} />

              <TextInput value = {bday.toString().slice(4,13)} placeholder = 'Select Date...' style = {styles.input} onFocus = {()=>setShow(!show)}></TextInput>

             <DateTimePickerModal
              date = {new Date()}
              isVisible = {show}
              mode = 'date'
              onCancel = {()=>setShow(false)}
              onConfirm = {date=>{setDate(date),setShow(false)}}
             />
            </View>
          </View>
        )}
      </View>

      {login ? (
        <View>
          <TouchableOpacity
            title="Log in"
            style={styles.bottomButton}
            onPress={handleSubmit}
          >
            <Image
              style={{ width: 80, height: 40, borderRadius: 5 }}
              source={loginBtn}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <TouchableOpacity
            style={{ ...styles.bottomButton, width: 155 }}
            onPress={handleSubmit}
          >
            <Image
              style={{ width: 150, height: 40, borderRadius: 5 }}
              source={registerBtn}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default SessionForm;
