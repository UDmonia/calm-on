import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/components/splash.js';
import LoginSignup from './src/components/loginSignup.js';
import Homescreen from './src/components/homescreen.js';
import IntroVideo from './src/components/video.js';
import Sprite from './src/components/tempSpriteChatbox.js';
import Storytime from './src/components/storytime.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false, animationEnabled:false}}>
        <Stack.Screen name='IntroVideo' component={IntroVideo} />
        <Stack.Screen name='Splash' component={Splash} />
        <Stack.Screen name='loginSignup' component={LoginSignup} />
        <Stack.Screen name='homescreen' component={Homescreen} />
        <Stack.Screen name='Sprite' component={Sprite} />
        <Stack.Screen name='Storytime' component={Storytime} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}