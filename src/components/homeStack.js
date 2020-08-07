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
        {name: 'Home',active: false,comp:Home, icon: require('../../assets/home.png')},
        {name: 'Achievement', comp:Achievement,icon:require('../../assets/achievement.png')},
        {name: 'Check-In',comp:Calendar, icon:require('../../assets/calendar.png')},
        //{name: 'Newsfeed', comp:Newsfeed,icon:require('../../assets/newsfeed.png')},
        {name: 'Profile',comp:Profile, icon:require('../../assets/account.png')},

    ]

    const style = {
        backgroundColor: '#E2E8F8',
        height: 90,
        paddingTop: 10
    }

    //const calendarStyle = {
    //    marginBottom: 25
    //}

    const buttonStyle = {
        height:50,
        wdith:55,
        paddingTop:8,
        marginBottom:4
    }



    const screens = icons.map((icon,index)=>(
        <Tab.Screen key = {index} name = {icon.name} component = {icon.comp} 
                    options = {()=>({
                        tabBarIcon: ({focused})=>
                        <TouchableOpacity style = {focused?{...buttonStyle,borderTopColor:'#4E80FF',borderTopWidth: 5}:{...buttonStyle}}>
                            <Image  source = {icon.icon}/>
                        </TouchableOpacity> 
                        ,
                    })} />
    ))


   return (
    <Tab.Navigator tabBarOptions={{labelStyle:{fontSize:13,color:'black'},style:style}} intialRouteName = 'Home' >
        {screens}
    </Tab.Navigator>
   )
}

export default HomeStack