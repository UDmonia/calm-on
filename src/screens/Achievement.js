import React, {useEffect, useState} from 'react';
import { View,Text} from 'react-native';
import styles from '../stylesheets/achievementStyles.js'
import {createStackNavigator} from '@react-navigation/stack';
import { StackActions } from '@react-navigation/routers';
import AchievementPage from './AchievementPage.js';
import CashShop from './CashShop.js';
import { useDispatch } from "react-redux";
import { getCoins } from '../actions/cashShop_actions.js';
import {Image} from 'react-native';

const Stack = createStackNavigator();

const routesWithNoTabNavigator = ['CashShop'];

export default Achievement =()=>{
    const dispatch = useDispatch();
    const [coins, setCoins] = useState(0);

    useEffect(()=>{
        // uncomment this when the backend routes are established

        // dispatch(getCoins())
        //     .then(coins=>setCoins(coins))
        //     .catch(err=>{throw err})
    }, [])

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

    const cashShop = {
        headerRight: ()=>(
            <View style={{display:'flex', flexDirection: 'row', width: 80,justifyContent: 'space-evenly'}}>
                <Image source={require('../../assets/cashShop/coin_big.png')}/>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>{coins}</Text>
            </View>
        ),
        headerShown: true
    }



    return (
        <Stack.Navigator screenOptions = {allScreens} initialRoute = 'Achievements'>
            <Stack.Screen options = {profileMain} name = 'Achievements' component = {AchievementPage} />
            <Stack.Screen options={cashShop} name = 'Shop' component = {CashShop}/>
        </Stack.Navigator>
    )
}