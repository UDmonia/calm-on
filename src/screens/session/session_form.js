import React, { useState, useEffect } from "react";
import {
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../stylesheets/loginSignup.styles";
import {
  login as loginUser,
  register,
  RECEIVE_USER,
  addName,
} from "../../actions/session_actions";
import mail from "../../../assets/images/mail.png";
import lock from "../../../assets/images/password.png";
import pwConfirm from "../../../assets/images/passwordConfirmed.png";
import deviceStorage from "../../services/device_storage";

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

const validateEmail = (email) =>
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

const formatDate = (d) => {
  const iso = d.toISOString().split("-");
  iso[2] = iso[2].slice(0, 2);
  return iso.join("-");
};

const SessionForm = ({
  login,
  navigate,
  showUserDialog,
  setShowUserDialog,
  setShowFairyPicker,
}) => {
  const dispatch = useDispatch();
  const dbErrors = useSelector((store) => store.errors.session);
  const { error } = dbErrors;
  const [user, setUser] = useState(initialLogin);
  const [localErrors, setLocalErrors] = useState([]);
  const [showError, setError] = useState(false);
  const [show, setShow] = useState(false);
  const [showNameError, setNameError] = useState(false);
  const toggleInfo = (l) => setUser(l ? initialLogin : initialSignUp);

  useEffect(() => {
    toggleInfo(login);
    setLocalErrors([]);
    setError(false);
  }, [login]);

  useEffect(() => {
    if (error) setError(true);
  }, [error]);

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

    /**
     * TESTING ONLY!!!
     */
    const TEST_ONLY = err.filter((value, index, arr) => {
      if (value !== "birthday is required") {
        return value;
      }
    });
    /********************************** */

    // return !err.length;
    return !TEST_ONLY.length;
  };

  const handleSubmit = async () => {
    setLocalErrors([]);
    if (isValid()) {
      let action = null;
      if (login) {
        action = await dispatch(loginUser(user));
      } else {
        action = await dispatch(
          register({ ...user, birthday: new Date("0000", "00", "00") })
        );
      }

      if (action.type === RECEIVE_USER) {
        deviceStorage.save("score", "0");
        if (!login) {
          setShowUserDialog(true);
        } else {
          navigate("Home");
        }
      } else {
        setError(true);
      }
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

  const handleConfirm = (d) => {
    // toggleShow(); // TESTING ONLY
    handleChange("birthday")(formatDate(d));
  };
  const showOnlyDatePicker = () => {
    Keyboard.dismiss();
    setShow(!show);
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
        // navigate("DailyCheckIn");
        setShowFairyPicker(true);
      }
    });
  };

  return (
    <View>
      {!showUserDialog && (
        <View style={styles.form}>
          <View style={styles.label}>
            <Text style={styles.description}>Email</Text>
            {/*emailError && <Text style={styles.error}>{emailError}</Text>*/}
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
            <Text style={styles.bottomButtonText}>Log in</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.test}>
          <TouchableOpacity
            style={{ ...styles.bottomButton, width: 215 }}
            onPress={handleSubmit}
          >
            <Text style={styles.bottomButtonText}>Create Account</Text>
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
          <View style={{ paddingTop: "10%" }}>
            <TouchableOpacity
              onPress={handleAddName}
              style={styles.bottomButton}
            >
              <Text style={styles.bottomButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export { validateEmail, formatDate };
export default SessionForm;
