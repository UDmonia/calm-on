import {createStackNavigator} from '@react-navigation/stack';
import Calendar from './Calendar'
import React from 'react'
import hex from '../stylesheets/hexCodes';
import DetailedView from './checkinDetails'
import MonthlyView from './monthlyPreview'

const Stack = createStackNavigator()

export default checkinStack =()=>{

    const headerOption = {
        headerLeft:null,
        headerTitleStyle: {fontSize: 20,color:hex.grey.grey1},
        headerStyle: {backgroundColor: hex.yellow.yellow1}
    }

    const headerOption2 ={
        headerBackTitleVisible:false,
        headerBackTitleStyle:{color:hex.grey.grey1},
        headerTitle: 'Daily Check-In',
        headerTitleStyle: {fontSize: 20,color:hex.grey.grey1},
        headerStyle: {backgroundColor: hex.yellow.yellow1},
        headerTintColor: hex.grey.grey1
    }

    return(
        <Stack.Navigator>
            <Stack.Screen options = {headerOption} name = 'Daily Check-In'component = {Calendar} />
            <Stack.Screen options = {headerOption} name = 'MonthlyView' component = {MonthlyView}/>
            <Stack.Screen options = {headerOption2} name = 'CheckinDetail' component = {DetailedView}/>
        </Stack.Navigator>
    )
}