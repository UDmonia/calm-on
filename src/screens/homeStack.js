import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./home";
import Calendar from "../components/checkInStack";
import Achievement from "./Achievement";
import Profile from "./profileStack.js";
import React from "react";
import { Image } from "react-native";
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
  // what units are these?

  const getTabBarVisibility = (route) => {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : '';

    console.log(routeName)

    if (routeName === 'Shop') {
      return false;
    }

    return true;
  }

  const screens = icons.map((icon, index) => (
    <Tab.Screen
      key={index}
      name={icon.name}
      component={icon.comp}
      options={({route}) => ({
        tabBarVisible: getTabBarVisibility(route),
        tabBarIcon: ({ focused }) => (
          <TouchableOpacity
            style={
              focused
                ? {
                    ...buttonStyle,
                    borderTopColor: "#4E80FF",
                    borderTopWidth: 5,
                    alignSelf: "flex-start",
                  }
                : { ...buttonStyle }
            }
          >
            <Image source={icon.icon} />
          </TouchableOpacity>
        ),
      })}
    />
  ));

  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { fontSize: 13, color: "black" },
        style: styles,
      }}
      intialRouteName="Home"
    >
      {screens}
    </Tab.Navigator>
  );
};

const styles = {
  flexDirection: windowWidth > screenWidthThreshold ? "row" : "column",
  backgroundColor: "#E2E8F8",
  height: windowWidth > screenWidthThreshold ? "5%" : "11%",
  paddingTop: "1.75%",

  alignItems: "flex-start",
};

const buttonStyle = {
  height: 42,
  width: 80,
  paddingTop: "4%",
  paddingLeft: "22.5%",
};

export default HomeStack;
