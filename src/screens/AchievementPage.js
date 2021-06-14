import React from 'react';
import { 
    View,
    Text,
    ScrollView,
} from 'react-native';
import { Dimensions } from "react-native";
import styles from '../stylesheets/achievementStyles.js';

// function handleScroll(e) {
//     xOffset = e.nativeEvent.contentOffset.x;
//     updateSpirit(xOffset);
//   }

const weeklyMission = [
    {name:'Daily  Check-in', img: require('../../assets/achievement/checkIn.png')},
    {name:'TRI-umphant!', img: require('../../assets/achievement/checkIn.png')},
    {name:'Stop and Think!', img: require('../../assets/achievement/stopAndThink.png')},
];

export default AchievementPage =()=>{
    return(
    <View style ={styles.container}>
        <Text style={styles.header}> Weekly Missions</Text>
        
        <View style={styles.scroll}>
          <ScrollView
            // snapToInterval={Dimensions.get("window").width}
            decelerationRate="fast"
            horizontal
            pagingEnabled="true"
            showsHorizontalScrollIndicator={false}
            // npm
            scrollEventThrottle={100}
          >
            Hi
          </ScrollView>
        </View>

    </View>
    )
}