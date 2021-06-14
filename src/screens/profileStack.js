import {createStackNavigator, HeaderbackButton} from '@react-navigation/stack';
import React from 'react'
// import hex from '../stylesheets/hexCodes';
import Profile from './profile.js';
import Setting from './setting.js';
import Verification from './verification.js';

const Stack = createStackNavigator()

export default profileStack =()=>{

    const profileMain= {
        headerLeft:null,
        // headerTitleStyle: {fontSize: 20,color:hex.grey.grey1},
        // headerStyle: {backgroundColor: hex.yellow.yellow1}
    }


    const allScreens = {
        headerTintColor: 'white',
        headerBackTitleVisible: false,
        headerShown: true,
        headerStyle: {backgroundColor: '#4E80FF'},
        headerTitleStyle: {
            fontSize: 20,
            color: 'white'
        }
    }


    return(
        <Stack.Navigator screenOptions={allScreens} initialRouteName='Profile' >
            <Stack.Screen options = {profileMain} name = 'Profile' component = {Profile} />
            <Stack.Screen  option = {({route})=>({title:route.params.title})} name = 'Setting' component = {Setting}/>
            <Stack.Screen  name ='Verification' component={Verification}/>
        </Stack.Navigator>
    )
};

