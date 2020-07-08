/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from "react";
import {
  // DatePickerIOS,
  ImageBackground,
  Image,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import DatePicker from "react-native-datepicker";
import { useDispatch, useSelector } from "react-redux";

// import { LinearGradient } from 'expo-linear-gradient'
import styles from "../stylesheets/loginSignup.styles";
import { login as loginUser, register } from "../actions/session_actions";

import bg from "./images/backgroundImage.png";
import logo from "./images/logo.png";
import mail from "./images/mail.png";
import lock from "./images/password.png";
import loginBtn from "./images/logIn.png";
import pwConfirm from "./images/passwordConfirmed.png";
import date from "./images/date.png";
import registerBtn from "./images/createAcc.png";

const initialLogin = {
  email: "",
  password: "",
};

const initialSignUp = {
  email: "",
  password: "",
  confirmPassword: "",
  birthday: "",
  name: "",
};

export default LoginSignup = () => {
  const dispatch = useDispatch();
  const dbErrors = useSelector((store) => store.errors.session);

  //state for switching between login and signup page
  const [login, isLogin] = useState(true);
  const [user, setUser] = useState(initialLogin);
  const [localErrors, setLocalErrors] = useState([]);

  const toggleInfo = (l) => setUser(l ? initialLogin : initialSignUp);
  useEffect(() => {
    toggleInfo(login);
  }, [login]);

  // const [signup,setSignup] = useState({
  //   email:'',
  //   password: '',
  //   confirmPassword: '',
  //   birthday: '',
  //   name: ''
  // })

  // const [signin,setSignin] = useState({
  //   email:'',
  //   password: '',
  // })

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

    setLocalErrors(err);
    return !err.length;
  };

  const handleSubmit = () => {
    if (isValid()) {
      dispatch(login ? loginUser(user) : register(user));
    }
  };

  const handleChange = (field) => (text) => setUser({ ...user, [field]: text });

  // const handleSignup = () => {
  //   //send user info to backend

  //   //input validation:

  // }

  // const handleLogin = ()=> {
  //   //get user from backend and go to user homepage
  // }

  return (
    // Outer most container

    <View style={styles.container}>
      {/* background image */}

      <ImageBackground style={styles.background} source={bg}>
        {/* inner container for adjusting the background image rgb */}

        <View style={styles.innerContainer}>
          {/* logo */}

          <View style={styles.logo}>
            <Image style={styles.image} source={logo} />
          </View>

          {/* Login page button */}

          <View style={styles.buttonGroup}>
            <TouchableOpacity
              onPress={() => isLogin(true)}
              style={
                login ? { ...styles.topButtons, borderBottomWidth: 5 } : null
              }
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
              onPress={() => isLogin(false)}
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

          {/* // **************************************Login Form*********************************** */}
          <View>
            <View style={styles.form}>
              <Text style={styles.description}>Email*</Text>
              <View style={styles.inputAndIcon}>
                <Image styles={styles.icon} source={mail} />
                <TextInput
                  onChangeText={handleChange("email")}
                  clearButtonMode="while-editing"
                  autoCapitalize="none"
                  placeholder="Email..."
                  style={styles.input}
                />
              </View>

              <Text style={styles.description}>Password*</Text>
              <View style={styles.inputAndIcon}>
                <Image style={styles.icon} source={lock} />
                <TextInput
                  onChangeText={handleChange("password")}
                  autoCapitalize="none"
                  secureTextEntry={true}
                  clearButtonMode="while-editing"
                  placeholder="Password..."
                  style={styles.input}
                />
              </View>

              {!login && (
                <View>
                  <Text style={styles.description}>Confirm Password*</Text>
                  <View style={styles.inputAndIcon}>
                    <Image styles={styles.icon} source={pwConfirm} />
                    <TextInput
                      onChangeText={handleChange("confirmPassword")}
                      secureTextEntry={true}
                      clearButtonMode="while-editing"
                      placeholder="Confirm Password..."
                      style={styles.input}
                    />
                  </View>

                  <Text style={styles.description}>Birthday</Text>
                  <View style={styles.inputAndIcon}>
                    <Image styles={styles.icon} source={date} />

                    <DatePicker
                      style={styles.input}
                      date={user.birthday} // initial date from state
                      mode="date" // The enum of date, datetime and time
                      placeholder="Select Date..."
                      format="DD-MM-YYYY"
                      customStyles={{
                        dateInput: {
                          borderWidth: 0,
                          marginBottom: "7%",
                          marginRight: "65%",
                        },
                        placeholderText: {
                          fontSize: 18,
                        },
                        dateText: {
                          fontSize: 18,
                        },
                        btnTextConfirm: {
                          color: "blue",
                        },
                        btnTextCancel: {
                          color: "blue",
                        },
                      }}
                      confirmBtnText="Confirm"
                      cancelBtnText="Cancel"
                      showIcon={false}
                      onDateChange={handleChange("birthday")}
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
        </View>
      </ImageBackground>
    </View>
  );
};
