import React, { useState, useEffect } from "react";
import { Image, Text, View, TextInput, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import styles from "../../stylesheets/loginSignup.styles";
import {
  login as loginUser,
  register,
  RECEIVE_USER,
  addName,
} from "../../actions/session_actions";
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

const SessionForm = ({
  login,
  navigate,
  showUserDialog,
  setShowUserDialog,
}) => {
  const dispatch = useDispatch();
  const dbErrors = useSelector((store) => store.errors.session);
  const { error } = dbErrors;
  const [user, setUser] = useState(initialLogin);
  const [localErrors, setLocalErrors] = useState([]);
  const [showError, setError] = useState(false);
  const [show, setShow] = useState(false);
  const [showNameError, setNameError] = useState(false);
  const toggleShow = () => setShow(!show);
  const toggleInfo = (l) => setUser(l ? initialLogin : initialSignUp);

  useEffect(() => {
    toggleInfo(login);
    setLocalErrors([]);
    setError(false);
  }, [login]);

  useEffect(() => {
    if (error) setError(true);
  }, [error]);

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
    if (!validateEmail(user.email)) err.push("please enter a valid email");
    if (user.password.trim().length < 7) err.push("password is too short");
    if (!login && user.password !== user.confirmPassword)
      err.push("does not match");
    setLocalErrors(err);
    return !err.length;
  };

  const handleSubmit = () => {
    setLocalErrors([]);
    if (isValid()) {
      return (login
        ? dispatch(loginUser(user))
        : dispatch(register({ ...user, birthday: new Date(user.birthday) }))
      ).then((action) => {
        if (action.type === RECEIVE_USER) {
          !login ? setShowUserDialog(true) : navigate("Home");
        } else {
          setError(true);
        }
      });
    }
  };

  const handleChange = (field) => (text) => setUser({ ...user, [field]: text });
  const { email, password, confirmPassword, birthday, name } = user;
  const emailError =
    localErrors.find((e) => e.match(/email/)) || dbErrors.email;
  const passwordError =
    localErrors.find((e) => e.match(/password [^c]/)) || dbErrors.password;
  const confirmPasswordError = localErrors.find((e) => e.match(/match/));
  const birthdayError =
    localErrors.find((e) => e.match(/birthday/)) || dbErrors.birthday;
  const formatDate = (d) => {
    const iso = d.toISOString().split("-");
    iso[2] = iso[2].slice(0, 2);
    return iso.join("-");
  };

  const handleConfirm = (d) => {
    handleChange("birthday")(formatDate(d));
    toggleShow();
  };

  const handleAddName = () => {
    var Filter = require("bad-words");
    var filter = new Filter();
    return dispatch(
      addName({
        name:
          user.name && !filter.isProfane(user.name)
            ? user.name
            : setNameError(true),
      })
    ).then((action) => {
      if (user.name && !filter.isProfane(user.name)) {
        navigate("DailyCheckIn");
      }
    });
  };

  return (
    <View>
      {!showUserDialog && (
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

          {showError && (
            <View style={{ alignSelf: "center" }}>
              <Text style={styles.error}>{error}</Text>
            </View>
          )}

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

              <View style={styles.label}>
                <Text style={styles.description}>Birthday</Text>
                {birthdayError && (
                  <Text style={styles.error}>{birthdayError}</Text>
                )}
              </View>
              <View style={styles.inputAndIcon}>
                <Image styles={styles.icon} source={date} />

                <TextInput
                  value={birthday}
                  placeholder="Select Date..."
                  style={styles.input}
                  onFocus={toggleShow}
                />

                <DateTimePickerModal
                  date={new Date()}
                  isVisible={show}
                  mode="date"
                  onCancel={toggleShow}
                  onConfirm={handleConfirm}
                />
              </View>
            </View>
          )}
        </View>
      )}

      {showUserDialog ? null : login ? (
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

      {showUserDialog && (
        <View style={styles.userNameDialog}>
          <View style={styles.userNameCard}>
            <Text style={styles.titleText}>Welcome!</Text>
            <Text style={styles.userNameBodyText}>
              It’s so nice to finally meet you!{"\n"} What should we call you?
            </Text>
            {showNameError && (
              <Text style={styles.error}>username is required</Text>
            )}
            <TextInput
              style={styles.userNameInput}
              placeholder={""}
              onChangeText={handleChange("name")}
              clearButtonMode="while-editing"
              value={name}
            />
          </View>
          <TouchableOpacity
            onPress={() => handleAddName()}
            style={styles.nextButton}
          >
            <Image source={require("../../../assets/next_button.png")} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default SessionForm;
