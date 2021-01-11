import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import styles from "../stylesheets/washHandsStyles";
import Exit from "../components/Exit";
import { washHandsCards } from "../data/washHandsData";

export default function WashHands ({ navigation: {navigate }}) {

    const [place, setPlace] = useState(0);

    function updatePlace(direction) {
        if(direction === "next") {
            setPlace(place + 1);
        } else {
            setPlace(place - 1);
        }
    }

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
                                source={washHandsCards[place].img}
                                style={styles.img}/>
                        </View>
                    </View>
                    <View style={styles.arrows}>
                        {
                            (place == 0)
                            ? <Image 
                                source={require("../../assets/washHands/arrow-left-dim.png")}
                                style={styles.arrow} />
                            : <TouchableOpacity
                                onPress={ () => updatePlace("prev") }>
                                <Image 
                                    source={require("../../assets/washHands/arrow-left.png")}
                                    style={styles.arrow} />
                                </TouchableOpacity>
                        }
                        {
                            (place == washHandsCards.length - 1)
                            ? <Image 
                                source={require("../../assets/washHands/arrow-right-dim.png")}
                                style={styles.arrow} />
                            : <TouchableOpacity
                                onPress={ () => updatePlace("next") }>
                                <Image 
                                    source={require("../../assets/washHands/arrow-right.png")}
                                    style={styles.arrow} />
                                </TouchableOpacity>
                        }
                    </View>
                    <View style={styles.bottom}>
                        <View style={styles.flynn}>
                            <Image 
                                source={require("../../assets/washHands/flynn.png")}
                                style={styles.flynnImg} />
                        </View>
                        <View style={styles.box}>
                            <View style={styles.textBox}>
                                <Text style={styles.text}>
                                    {washHandsCards[place].msg}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}