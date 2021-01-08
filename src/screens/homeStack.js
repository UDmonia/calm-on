import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./home";
import Calendar from "../components/checkInStack";
import Achievement from "./Achievement";
import Profile from "./profile";
import React from "react";
import { Image, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { windowWidth } from "../util/windowDimensions";
import { screenWidthThreshold } from "../util/thresholds";

const icons = [
  {
    name: "Home",
    active: false,
    comp: Home,
    icon: require("../../assets/images/home.png"),
  },
  {
    name: "Achievements",
    comp: Achievement,
    icon: require("../../assets/images/achievement.png"),
  },
  {
    name: "Check-in",
    comp: Calendar,
    icon: require("../../assets/images/calendar.png"),
  },
  {
    name: "Profile",
    comp: Profile,
    icon: require("../../assets/images/account.png"),
  },
];

const HomeStack = (props) => {
  const Tab = createBottomTabNavigator();

  const screens = icons.map((icon, index) => (
    <Tab.Screen
      key={index}
      name={icon.name}
      component={icon.comp}
      options={() => ({
        tabBarIcon: ({ focused }) => (
          <TouchableOpacity
            style={
              focused
                ? [styles.buttonStyle, styles.buttonFocused]
                : styles.buttonStyle
            }
          >
            <Image source={icon.icon} style={styles.iconImg} />
          </TouchableOpacity>
        ),
      })}
    />
  ));

  return (
    <Tab.Navigator tabBarOptions={styles.tabBar} intialRouteName="Home">
      {screens}
    </Tab.Navigator>
  );
};

const styles = {
  tabContainer: {
    // height: 100,
    backgroundColor: "red",
  },
  tabBar: {
    flexDirection: windowWidth > screenWidthThreshold ? "row" : "column",
    // backgroundColor: "#E2E8F8",
    height: windowWidth > screenWidthThreshold ? "5%" : "10%",
    alignItems: "space-around",
    tabBarOptions: {
      backgroundColor: "yellow",
      labelStyle: { fontSize: 13, color: "black" },
    },
  },
  buttonStyle: {
    backgroundColor: "blue",

    height: 50,
    width: 80,
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonFocused: {
    backgroundColor: "pink",

    borderTopColor: "#4E80FF",
    borderTopWidth: 5,
    alignSelf: "flex-start",
  },
  iconImg: {
    // height: 100,
  },
};

export default HomeStack;
