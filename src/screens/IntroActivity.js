import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity} from "react-native";
import styles from "../stylesheets/introActStyles";

/**
 * This is a componet used to provide activity information to the user
 * It reads its parameters from {route.params} passed from navigation
 *
 * @param { string } route.params.name - string value representing the avtivity title
 * @param { object } route.params.img - image object provied for the activity
 * @param { string } route.params.about - string value discription of activity
 * @param { string } route.params.helpful - string value discribing what the activity is helpful with
 * @param { string } route.params.actNav - string value used for navigation
 */
export default Intro = ({ route, navigation }) => {
  const { headerColor } = route.params;
  return (
    <View>
      <View style={styles.upper}>
        <Image style={styles.img} source={route.params.img} />
      </View>
      <View style={styles.lower}>
        {/* <Text style={styles.title}>{route.params.name}</Text> */}
        <View>
          <View style={styles.statsRow}>
            <View style= {styles.statData}>
              <Text style={styles.stats}>2</Text>
              <Text style={[styles.statType, { color: headerColor }]}>
                Time (mins)
              </Text>
            </View>

            <View style= {styles.statData}>
              <View
                style={styles.border}
              >
                <Text style={styles.stats}>1</Text>
                <Text style={[styles.statType, { color: headerColor }]}>
                  Time(s) Completed
                </Text>
              </View>
            </View>

            <View style= {styles.statData}>
              <TouchableOpacity>
                <Image
                  style={styles.fav}
                  source={require("../../assets/images/favorite.png")}
                />
              </TouchableOpacity>
              <Text style={[styles.statType, { color: headerColor }]}>
                Add to Favorite
              </Text>
            </View>
          </View>
          <Text style={[styles.sectionTitle, { color: headerColor }]}>About</Text>
          {/* This could be used if we want to include a duration estimate of activity */}
          {/* <Text style={styles.descriptions}></Text> */}
          <Text style={styles.descriptions}>{route.params.about}</Text>

          <Text style={[styles.sectionTitle, { color: headerColor }]}>Helpful when..</Text>
          <Text style={styles.descriptions}>{route.params.helpful}</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate(route.params.actNav)}
          style={[styles.start, { backgroundColor: headerColor }]}
        >
          <Text style={styles.startText}>Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
