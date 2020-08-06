import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './home'
import Calendar from './Calendar'
import Achievement from './Achievement'
import Newsfeed from './Newsfeed'
import Profile from './profile'
import React from 'react'
import {Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator()

const HomeStack =props=>{

    const icons = 
    [
        {name: 'Home',comp:Home, icon: require('../../assets/home.png')},
        {name: 'Achievement', comp:Achievement,icon:require('../../assets/achievement.png')},
        {name: 'Calendar',comp:Calendar, icon:require('../../assets/calendar.png')},
        {name: 'Newsfeed', comp:Newsfeed,icon:require('../../assets/newsfeed.png')},
        {name: 'Profile',comp:Profile, icon:require('../../assets/account.png')},

    ]

    const style = {
        backgroundColor: '#E2E8F8',
        height: 90,
        paddingTop: 25,
        paddingBottom: 50
    }

    const calendarStyle = {
        marginBottom: 25
    }



    const screens = icons.map((icon,index)=>(
        <Tab.Screen key = {index} name = {icon.name} component = {icon.comp} 
                    options = {()=>({
                        tabBarIcon: ()=>
                        <TouchableOpacity>
                        <Image style = {icon.name === 'Calendar'&& calendarStyle} source = {icon.icon}/>
                        </TouchableOpacity>
                        ,
                    })} />
    ))


   return (
    <Tab.Navigator  tabBarOptions={{style:style, showLabel: false}} intialRouteName = 'Home' >
        {screens}
    </Tab.Navigator>
   )
}

export default HomeStack