import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

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
  return (
    <View>
      <View style={styles.upper}>
        <Image style={styles.img} source={route.params.img} />
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{route.params.name}</Text>
        <View style={styles.statsRow}>
          <View>
            <Text style={styles.statType}>Time (mins)</Text>
            <Text style={styles.stats}>2</Text>
          </View>

          <View>
            <Text style={styles.statType}>Time(s) Completed</Text>
            <View
              style={{
                borderLeftWidth: 2,
                borderRightWidth: 2,
                width: 130,
                borderColor: "#C4C4C4",
              }}
            >
              <Text style={styles.stats}>1</Text>
            </View>
          </View>

          <View>
            <Text style={styles.statType}>Add to Favorite</Text>
            <TouchableOpacity>
              <Image
                style={styles.fav}
                source={require("../../assets/images/favorite.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.sectionTitle}>About</Text>
        {/* This could be used if we want to include a duration estimate of activity */}
        {/* <Text style={styles.descriptions}></Text> */}
        <Text style={styles.descriptions}>{route.params.about}</Text>

        <Text style={styles.sectionTitle}>Helpful when..</Text>
        <Text style={styles.descriptions}>{route.params.helpful}</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate(route.params.actNav)}
          style={styles.start}
        >
          <Text style={styles.startText}>{"Start " + route.params.name}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

//Styles for componet
const styles = StyleSheet.create({
  upper: {
    height: "40%",
  },
  lower: {
    backgroundColor: "white",
    height: "60%",
    width: "100%",
    paddingLeft: "5%",
    paddingTop: "8%",
  },
  statsRow: {
    marginTop: "5%",
    flexDirection: "row",
    marginLeft: "-2%",
  },
  statType: {
    textAlign: "center",
    color: "#4F7947",
    width: 125,
    marginBottom: "5%",
    fontFamily: "FontReg",
  },
  sectionTitle: {
    fontSize: 20,
    paddingTop: "5%",
    fontFamily: "FontReg",
  },
  descriptions: {
    color: "#7B7B7B",
    paddingTop: "2%",
    fontFamily: "FontReg",
  },
  start: {
    display: "flex",
    height: 50,
    width: 250,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2E7D32",
    marginTop: "10%",
    marginLeft: "15%",
  },
  fav: {
    marginLeft: "32%",
  },
  startText: {
    textAlign: "center",
    fontSize: 18,
    color: "white",
    fontFamily: "FontReg",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "FontReg",
  },
  stats: {
    fontSize: 20,
    textAlign: "center",
    marginTop: "2%",
    fontFamily: "FontReg",
  },
  img: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
});
