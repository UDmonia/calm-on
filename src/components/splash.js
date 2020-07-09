/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from "react";
import {
  View,
  Button,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { getUserFromJWT, RECEIVE_USER } from "../actions/session_actions";

import styles from "../stylesheets/splashStyles";
import bg from "../../assets/image73.png";
import startBtn from "../../assets/start_btn.png";

const Splash = ({ navigation: { navigate } }) => {
  const dispatch = useDispatch();
  const loggedIn = useSelector((store) => Boolean(store.session.user));

  useEffect(() => {
    dispatch(getUserFromJWT()).then((action) => {
      if (!action) return;
      if (action.type === RECEIVE_USER) navigate("homescreen");
    });
  }, []);

  return (
    <View style={styles.format}>
      <ImageBackground source={bg} style={styles.image}>
        {/* COMMENT OUT LATER */}
        {/* <Button title="Homescreen" onPress={() => navigate("homescreen")} /> */}
        {/* COMMENT OUT LATER */}
        {!loggedIn && (
          <TouchableOpacity onPress={() => navigate("loginSignup")}>
            <Image style={styles.btn} source={startBtn} />
          </TouchableOpacity>
        )}
      </ImageBackground>
    </View>
  );
};

export default Splash;
