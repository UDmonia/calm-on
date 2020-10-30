import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import styles from "../stylesheets/activitiesStyles";
import feelings from "../../assets/activities/feelings.png";
import why from "../../assets/activities/why.png";
import nums from "../../assets/activities/54321.png";
import counting from "../../assets/activities/counting.png";
import painter from "../../assets/activities/painter.png";

//Activity data
const learningFeelings = [
  {
    id: 1,
    title: "Counting",
    img: require("../../assets/activities/counting.png"),
    tag: "Fear",
    level: "Basic Skills",
  },
  {
    id: 2,
    title: "boxBreathing",
    img: require("../../assets/activities/why.png"),
    tag: "Anger",
    level: "Novice",
  },
  {
    id: 3,
    title: "Mindfulness",
    img: require("../../assets/activities/feelings.png"),
    tag: "Excitement",
    level: "Basic Skills",
  },
  {
    id: 4,
    title: "milkMilkMilk",
    img: require("../../assets/activities/why.png"),
    tag: "Happy",
    level: "Novice",
  },
  {
    id: 5,
    title: "boxBreathing",
    img: require("../../assets/activities/feelings.png"),
    tag: "Worry",
    level: "Basic Skills",
  },
];

const uncomfortableFeelings = [
  {
    id: 6,
    title: "milkMilkMilk",
    img: require("../../assets/activities/feelings.png"),
    tag: "Fear",
    level: "Basic Skills",
  },
  {
    id: 7,
    title: "boxBreathing",
    img: require("../../assets/activities/why.png"),
    tag: "Fear",
    level: "Novice",
  },
  {
    id: 8,
    title: "Mindfulness",
    img: require("../../assets/activities/feelings.png"),
    tag: "Anger",
    level: "Novice",
  },
  {
    id: 9,
    title: "milkMilkMilk",
    img: require("../../assets/activities/why.png"),
    tag: "Anger",
    level: "Basic Skills",
  },
  {
    id: 10,
    title: "boxBreathing",
    img: require("../../assets/activities/feelings.png"),
    tag: "Worry",
    level: "Basic Skills",
  },
];

/*
 * @param act - activity object containig activity data
 *    (see objects in learningFeelings)
 * @param navigate - navigation function pointer
 * @param filter - filter state used for filter activities
 * @param level - level state used for setting difficulty
 * Function returns a View container for passed activity object data.
 */
function actCategory(act, navigate, filter, level) {
  if (
    (filter === act.tag || filter === "All Activities") &&
    (level === act.level || level === "Basic Skills")
  ) {
    return (
      <View key={act.id} style={styles.activity}>
        <TouchableOpacity
          onPress={() => {
            navigate(act.title);
          }}
        >
          <Image source={act.img} />
        </TouchableOpacity>
        <Text style={styles.label}>{act.title}</Text>
      </View>
    );
  }
  return null;
}

/*
 * @param button - button object containig button data (see objects in emos)
 * The following function takes the data found in the passed parameter object
 * and returns a TouchableOpacity object.
 */
function buttons(button) {
  return (
    <TouchableOpacity
      key={button.id}
      style={button.state ? styles.btnPressed : styles.btnDefult}
      onPress={() => {
        button.fun(button.stateSet, button.state);
        button.bunType(button.title);
      }}
    >
      <Text style={button.state ? styles.txtPressed : styles.txtDefult}>
        {button.title}
      </Text>
    </TouchableOpacity>
  );
}

export default Activities = ({ navigation: { navigate } }) => {
  const [all, setAll] = useState(true);
  const [fear, setFear] = useState(false);
  const [anger, setAnger] = useState(false);
  const [excitement, setExcitement] = useState(false);
  const [happy, setHappy] = useState(false);
  const [worry, setWorry] = useState(false);
  const [basic, setBasic] = useState(true);
  const [novice, setNovice] = useState(false);
  const [apprentice, setApp] = useState(false);
  const [master, setMaster] = useState(false);
  const [filter, setFilter] = useState("All Activities");
  const [level, setlevel] = useState("Basic Skills");
  const [header, setHeader] = useState(true);

  const toggleState = (setState, state) => {
    toggleAll();
    setState(true);
  };
  const toggleState2 = (setState, state) => {
    toggleAll2();
    setState(true);
  };
  const toggleAll = () => {
    setAll(false);
    setFear(false);
    setAnger(false);
    setExcitement(false);
    setHappy(false);
    setWorry(false);
  };
  const toggleAll2 = () => {
    setBasic(false);
    setNovice(false);
    setApp(false);
    setMaster(false);
  };
  //Button data
  const emos = [
    {
      id: 1,
      title: "All Activities",
      state: all,
      stateSet: setAll,
      fun: toggleState,
      bunType: setFilter,
    },
    {
      id: 2,
      title: "Fear",
      state: fear,
      stateSet: setFear,
      fun: toggleState,
      bunType: setFilter,
    },
    {
      id: 3,
      title: "Anger",
      state: anger,
      stateSet: setAnger,
      fun: toggleState,
      bunType: setFilter,
    },
    {
      id: 4,
      title: "Excitement",
      state: excitement,
      stateSet: setExcitement,
      fun: toggleState,
      bunType: setFilter,
    },
    {
      id: 5,
      title: "Happy",
      state: happy,
      stateSet: setHappy,
      fun: toggleState,
      bunType: setFilter,
    },
    {
      id: 6,
      title: "Worry",
      state: worry,
      stateSet: setWorry,
      fun: toggleState,
      bunType: setFilter,
    },
  ];
  const skills = [
    {
      id: 1,
      title: "Basic Skills",
      state: basic,
      stateSet: setBasic,
      fun: toggleState2,
      bunType: setlevel,
    },
    {
      id: 2,
      title: "Novice",
      state: novice,
      stateSet: setNovice,
      fun: toggleState2,
      bunType: setlevel,
    },
    {
      id: 3,
      title: "Apprentice",
      state: apprentice,
      stateSet: setApp,
      fun: toggleState2,
      bunType: setlevel,
    },
    {
      id: 4,
      title: "Master",
      state: master,
      stateSet: setMaster,
      fun: toggleState2,
      bunType: setlevel,
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.btnContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {emos.map((button) => {
          return buttons(button);
        })}
      </ScrollView>
      <ScrollView
        style={styles.btnContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {skills.map((button) => {
          return buttons(button);
        })}
      </ScrollView>
      <View style={styles.headerView}>
        {header ? (
          <Text style={styles.headerTxt}>Learning about our feelings</Text>
        ) : null}
        <ScrollView
          style={styles.scrollView}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {learningFeelings.map((act) => {
            return actCategory(act, navigate, filter, level);
          })}
        </ScrollView>
      </View>
      <View style={styles.headerView}>
        <Text style={styles.headerTxt}>Tackling uncomfortable feelings</Text>
        <ScrollView
          style={styles.scrollView}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {uncomfortableFeelings.map((act) => {
            return actCategory(act, navigate, filter, level);
          })}
        </ScrollView>
      </View>
      <View style={styles.headerView}>
        <Text style={styles.headerTxt}>Tackling uncomfortable feelings</Text>
        <ScrollView
          style={styles.scrollView}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {uncomfortableFeelings.map((act) => {
            return actCategory(act, navigate, filter, level);
          })}
        </ScrollView>
      </View>
    </View>
  );
};
