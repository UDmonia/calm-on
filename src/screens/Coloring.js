import React from "react";
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    ImageBackground,
    SafeAreaView,
    FlatList,
  } from "react-native";
import styles from "../stylesheets/coloringStyles";
import Exit from "../components/Exit";

const DATA = [
    {
        id: 1,
        title: "picture1"
    },
    {
        id: 2,
        title: "picture2",
    },
    {
        id: 3,
        title: "picture3",
    },
    {
        id: 4,
        title: "picture3",
    },
    {
        id: 5,
        title: "picture3",
    },
    {
        id: 6,
        title: "picture3",
    }
]


export default function Coloring({navigation: { navigate }}) {

    function ImageBox(data) {
        return(
            <TouchableOpacity 
                style={styles.imageBoxContainer}
                onPress={ () => navigate("ColoringPage")}>
                <Image 
                    source={require('../../assets/favicon.png')}
                    style={styles.img}/>
            </TouchableOpacity>
        );
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.exitContainer}>
                <Exit />
            </View>
            <View style={styles.main}>
                <FlatList 
                    data={DATA}
                    renderItem={item => ImageBox(item)}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    style={styles.imageList}/>
            </View>
            <View style={styles.bottom}>

            </View>
        </SafeAreaView>
    );
}