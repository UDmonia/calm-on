// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from './home'
// import Calendar from './checkInStack'
// import Achievement from './Achievement'
// import Profile from './profile'
// import React from 'react'
// import {Image} from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import hex from '../stylesheets/hexCodes';

// const Tab = createBottomTabNavigator()

// const HomeStack =props=>{

//     const icons =
//     [
//         {name: 'Home',active: false,comp:Home, icon: require('../../assets/images/home.png')},
//         {name: 'Achievements', comp:Achievement,icon:require('../../assets/images/achievement.png')},
//         {name: 'Check-in',comp:Calendar, icon:require('../../assets/images/calendar.png')},
//         //{name: 'Newsfeed', comp:Newsfeed,icon:require('../../assets/images/newsfeed.png')},
//         {name: 'Profile',comp:Profile, icon:require('../../assets/images/account.png')},

//     ]

//     const style = {
//         backgroundColor: hex.blue.blue7,
//         height: 90,
//         paddingTop: '2%',
//     }

//     //const calendarStyle = {
//     //    marginBottom: 25
//     //}

//     const buttonStyle = {
//         height:50,
//         //height:110,
//         width:80,
//         marginTop: '0%',
//         //marginTop:'14%',
//         paddingTop: '7%',
//         //paddingTop:'30%',
//         paddingLeft: '22.5%',
//         marginBottom:'4%',
//     }



//     const screens = icons.map((icon,index)=>(
//         <Tab.Screen key = {index} name = {icon.name} component = {icon.comp}
//                     options = {
//                         ()=>({
//                         tabBarIcon: ({focused})=>
//                         <TouchableOpacity style = {focused?{...buttonStyle,borderTopColor:hex.blue.blue6,borderTopWidth: 5}:{...buttonStyle}}>
//                             <Image  source = {icon.icon}/>
//                         </TouchableOpacity>
//                         ,
//                     })} />
//     ))


//    return (
//     <Tab.Navigator tabBarOptions={{labelStyle:{fontSize:13,color:'black'},style:style}} intialRouteName = 'Home' >
//         {screens}
//     </Tab.Navigator>
//    )
// }

// export default HomeStack