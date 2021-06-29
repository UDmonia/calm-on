import {createStackNavigator, HeaderbackButton} from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import React from 'react'
// import hex from '../stylesheets/hexCodes';
import CashShop from './CashShop.js';

const Stack = createStackNavigator();

const CashShopStack =({navigation, route})=>{

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
        <Stack.Navigator screenOptions={allScreens} initialRouteName='CashShop' >
          <Stack.Screen name='CashShop' component={CashShop}/>
        </Stack.Navigator>
    )
};

export default CashShopStack;

