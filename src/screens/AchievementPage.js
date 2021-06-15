import React from 'react';
import { 
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    FlatList,
    Image,
    requireNativeComponent,
} from 'react-native';
import { Dimensions } from "react-native";
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';
import styles from '../stylesheets/achievementStyles.js';



const weeklyMission = [
    {name:'Daily  Check-in', img: require('../../assets/achievement/checkIn.png')},
    {name:'TRI-umphant!', img: require('../../assets/achievement/checkIn.png')},
    {name:'Stop and Think!', img: require('../../assets/achievement/stopAndThink.png')},
];




export default AchievementPage =()=>{
    return(
    <View style ={styles.container}>
        
        <Text style={styles.header}> Weekly Missions</Text>
       
        <ScrollView
          style={styles.btnContainer}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          
          <TouchableOpacity style ={styles.tabContainer}>
            
            <Image source={require("../../assets/achievement/checkIn.png")}/>
            
            <Text>Daily</Text>
            <Text>Check-In</Text>
            <Text>0/5</Text>
         
         </TouchableOpacity>
         

          <TouchableOpacity style ={styles.tabContainer}>
              
              <Image source={require("../../assets/achievement/checkIn.png")}/>
              
              <Text>TRI-</Text>
              <Text>umphant!</Text>
              <Text>0/3</Text>
          
          </TouchableOpacity>

          <TouchableOpacity style ={styles.tabContainer}>
              
              <Image source={require("../../assets/achievement/stopAndThink.png")}/>
              <Text>Stop! and</Text>
              <Text>Think!</Text>
              <Text>0/5</Text>
          
          </TouchableOpacity>
          
        
        </ScrollView>

        <TouchableOpacity style={styles.cashContainer}>
          <Image source={require("../../assets/achievement/cashShop.png")}/>
          <Text>Cash Shop</Text>
          <Text>Check out the new outfits!</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cashContainer}>
          <Image source={require("../../assets/achievement/trophy.png")}/>
          <Text>Achievements</Text>
          <Text>Coming Soon!</Text>
        </TouchableOpacity>
        


    </View>
    )
}