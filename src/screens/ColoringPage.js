import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    ImageBackground,
  } from "react-native";
import styles from "../stylesheets/coloringPageStyles";
import Exit from "../components/Exit";

export default function ColoringPage() {
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <View style={styles.exitContainer}>
                    <Exit/>
                </View>
                <View style={styles.mainImageContainer}>

                </View>
                <View style={styles.colorSelectionContainer}>

                </View>
            </View>
        </View>
    );
}