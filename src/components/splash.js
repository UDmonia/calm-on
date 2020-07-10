import styles from '../stylesheets/splashStyles';
import Video from 'react-native-video';
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getUserFromJWT, RECEIVE_USER } from "../actions/session_actions";

import bg from "../../assets/image73.png";
import startBtn from "../../assets/start_btn.png";

    {/* COMMENT OUT LATER */}
        <Button
            title='Home'
            onPress={() =>
                props.navigation.navigate('Home')
            }
        />
    {/* COMMENT OUT LATER */}
                <TouchableOpacity onPress={() => props.navigation.navigate('loginSignup') }>
                    <Image style={styles.btn}
                        source={require('../../assets/start_btn.png')}
                    />
                </TouchableOpacity>
const Splash = ({ navigation: { navigate } }) => {
  const dispatch = useDispatch();
  const loggedIn = useSelector((store) => Boolean(store.session.user));

  useEffect(() => {
    dispatch(getUserFromJWT()).then((action) => {
      if (!action) return;
      if (action.type === RECEIVE_USER) navigate("Home");
    });
  }, []);

  return (
    <View style={styles.format}>
      <ImageBackground source={bg} style={styles.image}>
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
