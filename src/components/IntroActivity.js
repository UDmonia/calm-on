import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import styles from "../stylesheets/boxBreathingStyles";

export default Intro = ({ route, navigation }) => {
  return (
    <View>
      <View style={styles.upper}>
          {/* <Image source={route.params.img}/> */}
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
                style={{ marginLeft: "32%" }}
                source={require("../../assets/favorite.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.sectionTitle}>About</Text>
        {/* <Text style={styles.descriptions}>2 minutes</Text> */}
        <Text style={styles.descriptions}>{route.params.about}</Text>

        <Text style={styles.sectionTitle}>Helpful when..</Text>
        <Text style={styles.descriptions}>{route.params.helpful}</Text>

        {/*<TouchableOpacity onPress = {()=>start(true)} style = {styles.start}>*/}
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
