import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./home";
import Calendar from "./checkInStack";
import Achievement from "./Achievement";
import Profile from "./profile";
import React from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

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
                ? {
                    ...buttonStyle,
                    borderTopColor: "#4E80FF",
                    borderTopWidth: 5,
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
  backgroundColor: "#E2E8F8",
  height: "10%",
  paddingTop: "2%",
  justifyContent: "flex-start",
};

const buttonStyle = {
  height: 50,
  width: 80,
  paddingTop: "7%",
  paddingLeft: "22.5%",
  marginBottom: "4%",
};

export default HomeStack;
