/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { ImageBackground, Image, View } from "react-native";
import styles from "../../stylesheets/loginSignup.styles";
import bg from "../../../assets/images/backgroundImage.png";
import logo from "../../../assets/images/logo.png";
import SessionForm from "./session_form";
import LoginToggle from "./login_toggle";

const LoginSignup = ({ route, navigation: { navigate } }) => {
  // state for switching between login and signup page
  const { userPrompt } = route.params;
  const { userLogin } = route.params;
  const [login, isLogin] = useState(() => userLogin);
  const [showUserDialog, setShowUserDialog] = useState(() => userPrompt);
  const setLogin = (bool) => () => isLogin(bool);

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
          <LoginToggle
            login={login}
            setLogin={setLogin}
            showUserDialog={showUserDialog}
            setShowUserDialog={setShowUserDialog}
          />
          <SessionForm
            login={login}
            navigate={navigate}
            showUserDialog={showUserDialog}
            setShowUserDialog={setShowUserDialog}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginSignup;
