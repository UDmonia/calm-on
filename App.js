import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './src/components/splash.js';
import LoginSignup from './src/components/session/loginSignup.js';
import IntroVideo from './src/components/video.js';
import Storytime from './src/components/storytime.js';
import MilkMilkMilk from './src/components/milkMilkMilk';
import Profile from './src/components/profile.js';
import Mindfulness from './src/components/mindfulnessStack';
import spriteChat from './src/components/spriteChat';
/* eslint-disable react/jsx-filename-extension */
import { Provider } from "react-redux";
import configureStore from "./src/store/store";
import Home from './src/components/homeStack'

const Stack = createStackNavigator();
const store = configureStore();

export default function App() {
  
  console.disableYellowBox = true; 

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator screenOptions={{headerShown:false, animationEnabled:false}}>
          <Stack.Screen name='IntroVideo' component={IntroVideo} />
          <Stack.Screen name='Splash' component={Splash} />
          <Stack.Screen name='loginSignup' component={LoginSignup} />
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Storytime' component={Storytime} options={{headerShown: true}}/>
          <Stack.Screen name='milkMilkMilk' component={MilkMilkMilk} />
          <Stack.Screen name='Profile' component={Profile} />
          <Stack.Screen name= 'Mindfulness' component = {Mindfulness}/>
          <Stack.Screen name = 'spriteChat' component = {spriteChat} options = {{
            headerShown:true, 
            headerTitle: 'Sprite',
            headerTitleStyle: {fontSize: 24},
            }}/>
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
