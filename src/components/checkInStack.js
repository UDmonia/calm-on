import {createStackNavigator} from '@react-navigation/stack';
import Calendar from './Calendar'
import React from 'react'
import DetailedView from './checkinDetails'
import MonthlyView from './monthlyPreview'

const Stack = createStackNavigator()

export default checkinStack =props=>{

    const headerOption = {
        headerLeft:null,
        headerTitleStyle: {fontSize: 20,color:'#424242'},
        headerStyle: {backgroundColor: '#FFC10E'}
    }

    const headerOption2 ={
        headerBackTitleVisible:false,
        headerBackTitleStyle:{color:'#424242'},
        headerTitle: 'Daily Check-In',
        headerTitleStyle: {fontSize: 20,color:'#424242'},
        headerStyle: {backgroundColor: '#FFC10E'},
        headerTintColor: '#424242'
    }

    return(
        <Stack.Navigator>
            <Stack.Screen options = {headerOption} name = 'Daily Check-In'component = {Calendar} />
            <Stack.Screen options = {headerOption} name = 'MonthlyView' component = {MonthlyView}/>
            <Stack.Screen options = {headerOption2} name = 'CheckinDetail' component = {DetailedView}/>
        </Stack.Navigator>
    )
}