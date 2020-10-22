import styles from "../stylesheets/splashStyles";
import React, { useEffect } from "react";
import { View, ImageBackground, TouchableOpacity, Image, BackHandler } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getUserFromJWT, RECEIVE_USER } from "../actions/session_actions";
import bg from "../../assets/image73.png";
import startBtn from "../../assets/start_btn.png";

const Splash = ({ navigation: { navigate } }) => {
  const dispatch = useDispatch();
  const loggedIn = useSelector((store) => Boolean(store.session.user));
  //Handle Android hardware back button
  const backAction = () => {
    return true;
  };

  useEffect(() => {
    dispatch(getUserFromJWT()).then((action) => {
      if (!action) return;
      if (action.type === RECEIVE_USER) {
        navigate("Home");
      }
    });
    //Effect Hook for back button
    BackHandler.addEventListener("hardwareBackPress", backAction);
  }, []);

  return (
    <View style={styles.format}>
      <ImageBackground source={bg} style={styles.image}>
        {!loggedIn && (
          <TouchableOpacity
            onPress={() => {
              // console.log(
              //   "Splash -> loginSignup: userPrompt=false userlogin=true"
              // );
              //removing back button handler for next page
              BackHandler.removeEventListener("hardwareBackPress", backAction);
              navigate("loginSignup", { userPrompt: false, userLogin: true });
            }}
          >
            <Image style={styles.btn} source={startBtn} />
          </TouchableOpacity>
        )}
      </ImageBackground>
    </View>
  );
};

export default Splash;
