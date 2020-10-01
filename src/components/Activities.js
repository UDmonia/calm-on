import React, { useState, useEffect } from "react";
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
        title: "milkMilkMilk",
        img: require("../../assets/activities/feelings.png"),
        tag: 'Fear',
    },
    {
        id: 2,
        title: 'boxBreathing',
        img: require("../../assets/activities/why.png"),
        tag: 'Anger',

    },
    {
        id: 3,
        title: 'Mindfulness',
        img: require("../../assets/activities/feelings.png"),
        tag: 'Excitement',
    },
    {
        id: 4,
        title: 'milkMilkMilk',
        img: require("../../assets/activities/why.png"),
        tag: 'Happy',
    },
    {
        id: 5,
        title: 'boxBreathing',
        img: require("../../assets/activities/feelings.png"),
        tag: 'Worry',
    },
];

const uncomfortableFeelings = [
    {
        id: 6,
        title: 'milkMilkMilk',
        img: require("../../assets/activities/feelings.png"),
        tag: 'Fear',

    },
    {
        id: 7,
        title: 'boxBreathing',
        img: require("../../assets/activities/why.png"),
        tag: 'Fear',
    },
    {
        id: 8,
        title: 'Mindfulness',
        img: require("../../assets/activities/feelings.png"),
        tag: 'Anger',
    },
    {
        id: 9,
        title: 'milkMilkMilk',
        img: require("../../assets/activities/why.png"),
        tag: 'Anger',
    },
    {
        id: 10,
        title: 'boxBreathing',
        img: require("../../assets/activities/feelings.png"),
        tag: 'Worry',
    },
];

function actCategory(act, navigate, filter) {
    if (filter === act.tag || filter === 'All Activities'){
    return(
        <View key={act.id} style={styles.activity}>
            <TouchableOpacity
                onPress = {() => {console.log('activitiy pressed ' + filter); navigate(act.title)}}
        >
                <Image 
                    source={act.img}/>
            </TouchableOpacity>
            <Text style={styles.label}>
                {act.title}
            </Text>
        </View>);
    }
    return null;
}

function buttons(button, setFilter){
    return(
        <TouchableOpacity
            key={button.id} 
            style={button.state ? styles.btnPressed : styles.btnDefult}
            onPress = {() => {
                button.fun(button.stateSet, button.state);
                console.log(button.title);
                setFilter(button.title);
                }}
        >
            <Text 
                style={button.state ? styles.txtPressed : styles.txtDefult}
            >
                {button.title}
            </Text>
        </TouchableOpacity>
    );
}

export default Activities =({ navigation: { navigate } })=>{
    const [all, setAll] = useState(false);
    const [fear, setFear] = useState(false);
    const [anger, setAnger] = useState(false);
    const [excitement, setExcitement] = useState(false);
    const [happy, setHappy] = useState(false);
    const [worry, setWorry] = useState(false);
    const [basic, setBasic] = useState(false);
    const [novice, setNovice] = useState(false);
    const [apprentice, setApp] = useState(false);
    const [master, setMaster] = useState(false);
    const [filter, setFilter] = useState('All Activities');

    const toggleState = (setState, state) => {toggleAll(); setState(true);}
    const toggleState2 = (setState, state) => {toggleAll2(); setState(true);}
    const toggleAll = () => {
                            setAll(false); 
                            setFear(false);
                            setAnger(false);
                            setExcitement(false);
                            setHappy(false);
                            setWorry(false);}
    const toggleAll2 = () => {
                                setBasic(false);
                                setNovice(false);
                                setApp(false);
                                setMaster(false);    
    }

    useEffect(() => {    
        // This gets called after every render, by default  
        // (the first one, and every one after that)    
        console.log('///////////UseEffect///// ' +  filter);  
    })

    const emos = [
        {
            id: 1,
            title: 'All Activities',
            state: all,
            stateSet: setAll,
            fun: toggleState,
        },
        {
            id: 2,
            title: 'Fear',
            state: fear,
            stateSet: setFear,
            fun: toggleState,
        },
        {
            id: 3,
            title: 'Anger',
            state: anger,
            stateSet: setAnger,
            fun: toggleState,
        },
        {
            id: 4,
            title: 'Excitement',
            state: excitement,
            stateSet: setExcitement,
            fun: toggleState,
        },
        {
            id: 5,
            title: 'Happy',
            state: happy,
            stateSet: setHappy,
            fun: toggleState,
        },
        {
            id: 6,
            title: 'Worry',
            state: worry,
            stateSet: setWorry,
            fun: toggleState,
        }
    ];
    const skills = [
        {
            id: 1,
            title: 'Basic Skills',
            state: basic,
            stateSet: setBasic,
            fun: toggleState2,
        },
        {
            id: 2,
            title: 'Novice',
            state: novice,
            stateSet: setNovice,
            fun: toggleState2,
        },
        {
            id: 3,
            title: 'Apprentice',
            state: apprentice,
            stateSet: setApp,
            fun: toggleState2,
        },
        {
            id: 4,
            title: 'Master',
            state: master,
            stateSet: setMaster,
            fun: toggleState2,
        }
    ];
    
    return (
        <View style={styles.container}>
            <ScrollView 
                style={styles.btnContainer}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {emos.map((button) => {return buttons(button, setFilter);})}
            </ScrollView>
            <ScrollView 
                style={styles.btnContainer}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {skills.map((button) => {return buttons(button, setFilter);})}
            </ScrollView>
            <View style={styles.headerView}>
                <Text style={styles.headerTxt}>Learning about our feelings</Text>
                <ScrollView 
                    style={styles.scrollView}
                    horizontal={true}
                    showsHorizontalScrollIndicator= {false}
                >
                    {learningFeelings.map((act) => {
                        return actCategory(act, navigate, filter);
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
                        return actCategory(act, navigate, filter);
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
                        return actCategory(act, navigate, filter);
                    })}
                </ScrollView>  
            </View>
        </View>
    )
}