import styles from "../stylesheets/splashStyles";
import React, { useEffect } from "react";
import { View, ImageBackground, TouchableOpacity, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getUserFromJWT, RECEIVE_USER } from "../actions/session_actions";
import bg from "../../assets/image73.png";
import startBtn from "../../assets/start_btn.png";

const Splash = ({ navigation: { navigate } }) => {
  const dispatch = useDispatch();
  const loggedIn = useSelector((store) => Boolean(store.session.user));

  useEffect(() => {
    dispatch(getUserFromJWT()).then((action) => {
      if (!action) return;
      if (action.type === RECEIVE_USER) {
        navigate("Home");
      }
    });
  }, []);

  return (
    <View style={styles.format}>
      <ImageBackground source={bg} style={styles.image}>
        {!loggedIn && (
          <TouchableOpacity
            onPress={() => navigate("loginSignup", { userPrompt: false })}
          >
            <Image style={styles.btn} source={startBtn} />
          </TouchableOpacity>
        )}
      </ImageBackground>
    </View>
  );
};

export default Splash;
