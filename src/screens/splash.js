import styles from "../stylesheets/splashStyles";
import React, { useEffect } from "react";
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  BackHandler,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getUserFromJWT, RECEIVE_USER } from "../actions/session_actions";
import { newCheckIn,  getDailyCheckIns} from "../actions/activitiesAPI_actions";
import bg from "../../assets/images/image73.png";
import startBtn from "../../assets/images/start_btn.png";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";

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
        // dispatch(newCheckIn());
        // dispatch(getDailyCheckIns());
      //   axios
      // .get(
      //   "http://dev-1020237653.us-west-1.elb.amazonaws.com/api/activities/events/daily?startTimestamp=1636070844081&eventType=CheckIn"
      // )
      // .then((res) => {
      //   console.log(res.data);
      // })
      // .catch((e) => {
      //   console.log(e);
      // });
        navigate("Home");
      }
    });
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      BackHandler.addEventListener("hardwareBackPress", backAction);
      return () => {
        BackHandler.removeEventListener("hardwareBackPress", backAction);
      };
    }, [])
  );


  // async function doTheThing() {
  //   const { data } = await axios.post(
  //     "http://dev-1020237653.us-west-1.elb.amazonaws.com/api/activities/events",
  //     {
  //       eventType: "CheckIn",
  //       mood: "sad",
  //     }
  //   );
  //   console.log(data);
  // }

  return (
    <View style={styles.format}>
      <ImageBackground source={bg} style={styles.image}>
        {!loggedIn && (
          <View style={styles.btnContainer}>
            <TouchableOpacity
              onPress={() => {
                navigate("loginSignup", { userPrompt: false, userLogin: true });
              }}
              style={styles.btn}
            >
              <Text style={styles.text}>Start</Text>
            </TouchableOpacity>
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

export default Splash;
