import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './src/components/splash.js';
import LoginSignup from './src/components/loginSignup.js';
import Homescreen from './src/components/homescreen.js';
import Mindfulness from './src/components/mindfulnessStack.js';
//import Mindfulness from './src/components/mindfulness.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Splash' component={Splash} />
        <Stack.Screen name='loginSignup' component={LoginSignup} />
        <Stack.Screen name='homescreen' component={Homescreen} />
        <Stack.Screen name = 'mindfulness' component = {Mindfulness}/>
        {/* keep ^ for now */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: '#fff',
//    alignItems: 'center',
//    justifyContent: 'center',
//  },
//});
