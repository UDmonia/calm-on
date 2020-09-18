import React, { useState } from "react";
import { View,Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from "../stylesheets/activitiesStyles";
import feelings from "../../assets/activities/feelings.png";
import why from "../../assets/activities/why.png";
import nums from "../../assets/activities/54321.png";
import counting from "../../assets/activities/counting.png";
import painter from "../../assets/activities/painter.png"

const learningFeelings = [
    {
        id: 1,
        title: 'Feeling Faces',
        img: require("../../assets/activities/feelings.png"),

    },
    {
        id: 2,
        title: 'Why we get sad?',
        img: require("../../assets/activities/why.png"),
    },
    {
        id: 3,
        title: 'what is anger',
        img: require("../../assets/activities/feelings.png"),
    },
    {
        id: 4,
        title: 'Place holder',
        img: require("../../assets/activities/why.png"),
    },
    {
        id: 5,
        title: 'Place holder 2',
        img: require("../../assets/activities/feelings.png"),
    },
];

const uncomfortableFeelings = [
    {
        id: 1,
        title: 'Feeling Faces',
        img: require("../../assets/activities/feelings.png"),

    },
    {
        id: 2,
        title: 'Why we get sad?',
        img: require("../../assets/activities/why.png"),
    },
    {
        id: 3,
        title: 'what is anger',
        img: require("../../assets/activities/feelings.png"),
    },
    {
        id: 4,
        title: 'Place holder',
        img: require("../../assets/activities/why.png"),
    },
    {
        id: 5,
        title: 'Place holder 2',
        img: require("../../assets/activities/feelings.png"),
    },
];

function actCategory(act) {
    return(
        <View style={styles.activity}>
            <TouchableOpacity 
            onPress = {() => {console.log(act.title);}}
        >
                <Image 
                    key={act.id}
                    source={act.img}/>
            </TouchableOpacity>
            <Text style={styles.label}>
                {act.title}
            </Text>
        </View>);
}


export default Activities =()=>{
    const [all, setAll] = useState(false);
    const [fear, setFear] = useState(false);
    const [anger, setAnger] = useState(false);
    const [excitement, setExcitement] = useState(false);
    const [happy, SetHappy] = useState(false);
    const [worry, SetWorry] = useState(false);
    const toggleState = (setState, state) => {setState(!state);}
    
    return (
        <View style={styles.container}>
            <ScrollView 
                style={styles.btnContainer}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <TouchableOpacity 
                    style={all ? styles.btnPressed : styles.btnDefult}
                    onPress = {() => 
                        {toggleState(setAll, all);
                        console.log('All');
                        }}
                >
                    <Text 
                        style={all ? styles.txtPressed : styles.txtDefult}
                    >
                        All Activities
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={fear ? styles.btnPressed : styles.btnDefult}
                    onPress = {() => {
                        toggleState(setFear, fear);
                        console.log('Fear');}}
                >
                    <Text 
                        style={fear ? styles.txtPressed : styles.txtDefult}
                    >
                        Fear
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={anger ? styles.btnPressed : styles.btnDefult}
                    onPress = {() => {toggleState(setAnger, anger); console.log('Anger');}}
                >
                    <Text 
                        style={anger ? styles.txtPressed : styles.txtDefult}
                    >
                        Anger
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={excitement ? styles.btnPressed : styles.btnDefult}
                    onPress = {() => {toggleState(setExcitement, excitement); console.log('Excitement');}}
                >
                    <Text 
                        style={excitement ? styles.txtPressed : styles.txtDefult}
                    >
                        Excitement
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={happy ? styles.btnPressed : styles.btnDefult}
                    onPress = {() => {toggleState(SetHappy, happy); console.log('Happiness');}}
                >
                    <Text 
                        style={happy ? styles.txtPressed : styles.txtDefult}
                    >
                        Happiness
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={worry ? styles.btnPressed : styles.btnDefult}
                    onPress = {() => {toggleState(SetWorry, worry); console.log('Worry');}}
                >
                    <Text 
                        style={worry ? styles.txtPressed : styles.txtDefult}
                    >
                        Worry
                    </Text>
                </TouchableOpacity>

            </ScrollView>
            <View style={styles.headerView}>
                <Text style={styles.headerTxt}>Learning about our feelings</Text>
                <ScrollView 
                    style={styles.scrollView}
                    horizontal={true}
                    showsHorizontalScrollIndicator= {false}
                >
                    {learningFeelings.map((act) => {
                        return actCategory(act);
                    })}
                </ScrollView>
            </View>
            <View style={styles.headerView}>
                <Text style={styles.headerTxt}>Tackling uncomfortable feelings</Text>
                <ScrollView 
                    style={styles.scrollView}
                    horizontal={true}
                    showsHorizontalScrollIndicator= {false}
                >
                    {uncomfortableFeelings.map((act) => {
                        return actCategory(act);
                    })}
                </ScrollView>  
            </View>
            <View style={styles.headerView}>
                <Text style={styles.headerTxt}>Tackling uncomfortable feelings</Text>
                <ScrollView 
                    style={styles.scrollView}
                    horizontal={true}
                    showsHorizontalScrollIndicator= {false}
                >
                    {uncomfortableFeelings.map((act) => {
                        return actCategory(act);
                    })}
                </ScrollView>  
            </View>
        </View>
    )
}