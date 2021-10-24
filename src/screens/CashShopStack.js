import {createStackNavigator, HeaderbackButton} from '@react-navigation/stack';

import React from 'react'
// import hex from '../stylesheets/hexCodes';
import CashShop from './CashShop.js';

const Stack = createStackNavigator();

const CashShopStack =({navigation, route})=>{

    return(
        <Stack.Navigator screenOptions={allScreens} initialRouteName='CashShop' >
          <Stack.Screen name='CashShop' component={CashShop}/>
        </Stack.Navigator>
    )
};

export default CashShopStack;

