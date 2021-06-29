import React from 'react';
import { View,Text} from 'react-native';
import styles from '../stylesheets/achievementStyles.js'
import {createStackNavigator} from '@react-navigation/stack';
import { StackActions } from '@react-navigation/routers';
import AchievementPage from './AchievementPage.js';
import CashShop from './CashShop.js';

const Stack = createStackNavigator();

const routesWithNoTabNavigator = ['CashShop'];

export default Achievement =()=>{

    Stack.navigationOptions = ({ navigation }) => {
        let tabBarVisible = true;
        const currentRoute = navigation.state.routes[navigation.state.routes.length -1].routeName;
        console.log('current route',currentRoute)
        if(routesWithNoTabNavigator.includes(currentRoute)) {
            tabBarVisible = false;
        }

        return {
         tabBarVisible,
        };
      };

    const allScreens = {
    headerTintColor: 'white',
    headerBackTitleVisible: false,
    headerShown: true,
    headerStyle: {backgroundColor: '#A5DFF0'},
    headerTitleStyle: {
        fontSize: 20,
        color: '#414141'
    }}

    const profileMain= {
        headerLeft:null,
        // headerTitleStyle: {fontSize: 20,color:hex.grey.grey1},
        // headerStyle: {backgroundColor: hex.yellow.yellow1}
    }



    return (
        <Stack.Navigator screenOptions = {allScreens} initialRoute = 'Achievements'>
            <Stack.Screen options = {profileMain} name = 'Achievements' component = {AchievementPage} />
            <Stack.Screen options={{tabBarVisible: false}} name = 'Shop' component = {CashShop}/>
        </Stack.Navigator>
    )
}