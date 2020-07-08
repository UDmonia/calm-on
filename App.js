/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Provider } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "./src/components/splash.js";
import LoginSignup from "./src/components/loginSignup.js";
import Homescreen from "./src/components/homescreen.js";

import configureStore from "./src/store/store";

const Stack = createStackNavigator();
const store = configureStore();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="loginSignup" component={LoginSignup} />
          <Stack.Screen name="homescreen" component={Homescreen} />
          {/* keep ^ for now */}
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
    //{" "}
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

// export default async function App() {
// const store = await configureStore();
// debugger;
// return (

//   );
// }
