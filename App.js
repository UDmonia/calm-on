import React from 'react';
import { Image} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './src/components/splash.js';
import LoginSignup from './src/components/session/loginSignup.js';
import Home from './src/components/home.js';
import IntroVideo from './src/components/video.js';
import Sprite from './src/components/tempSpriteChatbox.js';
import Storytime from './src/components/storytime.js';
import MilkMilkMilk from './src/components/milkMilkMilk';
import Profile from './src/components/profile.js';
import mindfulnessStack from './src/components/mindfulnessStack';
import spiritChat from './src/components/spiritChat'
/* eslint-disable react/jsx-filename-extension */
import { Provider } from "react-redux";
import configureStore from "./src/store/store";
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();
const store = configureStore();

export default function App(props) {

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator screenOptions={{headerShown:false, animationEnabled:false}}>
          <Stack.Screen name='IntroVideo' component={IntroVideo} />
          <Stack.Screen name='Splash' component={Splash} />
          <Stack.Screen name='loginSignup' component={LoginSignup} />
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Stories' component={Sprite} options={{headerShown: true}} />
          <Stack.Screen name='Storytime' component={Storytime} options={{headerShown: true}}/>
          <Stack.Screen name='milkMilkMilk' component={MilkMilkMilk} />
          <Stack.Screen name='Profile' component={Profile} />
          <Stack.Screen name= 'mindfulnessStack' component = {mindfulnessStack}/>
          <Stack.Screen name = 'spiritChat' component = {spiritChat} options = {{
            headerShown:true, 
            headerTitle: 'Spirit',
            headerTitleStyle: {fontSize: 24},
            }}/>
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
