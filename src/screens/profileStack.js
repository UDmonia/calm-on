import {createStackNavigator} from '@react-navigation/stack';
import React from 'react'
// import hex from '../stylesheets/hexCodes';
import Profile from './profile.js';

const Stack = createStackNavigator()

export default profileStack =()=>{

    const profileMain= {
        headerLeft:null,
        // headerTitleStyle: {fontSize: 20,color:hex.grey.grey1},
        // headerStyle: {backgroundColor: hex.yellow.yellow1}
    }

    const allScreens = {
        headerShown: true,
        headerStyle: {backgroundColor: '#4E80FF',},
        headerTitleStyle: {
            fontSize: 20,
            color: 'white'
        }
    }


    return(
        <Stack.Navigator screenOptions={allScreens} initialRouteName='Profile' >
            <Stack.Screen options = {profileMain} name = 'Profile' component = {Profile} />
            {/* <Stack.Screen options = {headerOption2} name = 'CheckinDetail' component = {DetailedView}/> */}
        </Stack.Navigator>
    )
};

