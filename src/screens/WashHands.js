import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import styles from "../stylesheets/washHandsStyles";
import Exit from "../components/Exit";


export default function WashHands ({ navigation: {navigate }}) {
    return(
        <View style={styles.screen}>
            <ImageBackground
                source={require("../../assets/washHands/background.png")}
                style={styles.backgroundImage} >
                <View style={styles.container}>
                    <View style={styles.top}>
                        <Exit navTo={"Modal"} />
                    </View>
                    <View style={styles.image}>
                        <View style={styles.imageContainer}>
                            <Image 
                                source={require("../../assets/washHands/first.png")}
                                style={styles.img}/>
                        </View>
                    </View>
                    <View style={styles.arrows}>
                        <TouchableOpacity>
                            <Image 
                                source={require("../../assets/washHands/arrow-left.png")}
                                style={styles.arrow} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image 
                                source={require("../../assets/washHands/arrow-right.png")}
                                style={styles.arrow} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottom}>
                        <View style={styles.flynn}>
                            <Image 
                                source={require("../../assets/washHands/flynn.png")}
                                style={styles.flynnImg} />
                        </View>
                        <View style={styles.box}>
                            <View style={styles.textBox}>
                            
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}