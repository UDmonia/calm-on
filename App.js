/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { TouchableOpacity, Image } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "./src/screens/splash.js";
import LoginSignup from "./src/screens/session/loginSignup.js";
import IntroVideo from "./src/screens/video.js";
import Storytime from "./src/screens/storytime.js";
import MilkMilkMilk from "./src/screens/milkMilkMilk";
import Profile from "./src/screens/profile.js";
import Mindfulness from "./src/screens/mindfulnessStack";
import Counting from "./src/screens/Counting";
import { Provider } from "react-redux";
import configureStore from "./src/store/store";
import Home from "./src/screens/homeStack";
import DailyCheckIn from "./src/screens/DailyCheckIn";
import CheckInExplain from "./src/screens/CheckInExplain";
import Activities from "./src/screens/Activities";
import BoxBreathing from "./src/screens/boxBreathing";
import CharacterChat from "./src/screens/CharacterChat";
import FeelingDictionary from "./src/screens/FeelingDictionary";
import kpi from "./src/screens/kpi";
import { navigationRef } from "./src/components/RootNavigation";
import * as RootNavigation from "./src/components/RootNavigation";
import FiveFourThreeTwoOneTech from "./src/screens/FiveFourThreeTwoOneTech.js";
import CountingPrompt from "./src/screens/CountingPrompt.js";
import CountingSelection from "./src/screens/CountingSelection.js";
import { useFonts } from "expo-font";
import Adventure from "./src/screens/Adventure.js";
import AdventureLocation from "./src/screens/AdventureLocation.js";
import AdventureLocationSeeAll from "./src/screens/AdventureLocationSeeAll.js";
import FlatActivities from "./src/screens/FlatActivities.js";
import IntroActivity from "./src/screens/IntroActivity.js";
import Modal from "./src/components/Modal";
import { ModalOptions } from "./src/components/Modal";

const Stack = createStackNavigator();
const store = configureStore();

export default function App() {
  console.disableYellowBox = true;
  // Importing the font here
  // NunitoReg is the Regular font
  // NunitoBold is used for Bold font
  const [loaded] = useFonts({
    FontReg: require("./assets/fonts/Nunito-Regular.ttf"),
    FontBold: require("./assets/fonts/Nunito-Bold.ttf"),
  });
  // If font is not loaded in handler
  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Provider store={store}>
        <Stack.Navigator
          screenOptions={{ headerShown: false, animationEnabled: false }}
        >
          <Stack.Screen name="IntroVideo" component={IntroVideo} />
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="loginSignup" component={LoginSignup} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="Counting"
            component={Counting}
            options={{
              headerShown: false,
              headerBackTitleVisible: false,
              headerTitle: "Counting",
              headerTitleStyle: { fontSize: 20, color: "#FFFFFF" },
              headerStyle: { backgroundColor: "#2E7D32" },
              headerTintColor: "#FFFFFF",
            }}
          />
          {/* screen componet used for activity discription */}
          <Stack.Screen
            name="IntroActivity"
            component={IntroActivity}
            options={({ route }) => ({
              headerShown: true,
              headerBackTitleVisible: false,
              headerTitle: route.params.name, // Header is passed upon navigation through the route
              headerTitleStyle: { fontSize: 20, color: "#FFFFFF" },
              headerStyle: { backgroundColor: route.params.headerColor },
              headerTintColor: "#FFFFFF",
            })}
          />
          <Stack.Screen
            name="CountingPrompt"
            component={CountingPrompt}
            options={{
              headerShown: false,
              headerBackTitleVisible: false,
              headerTitle: "Counting",
              headerTitleStyle: { fontSize: 20, color: "#FFFFFF" },
              headerStyle: { backgroundColor: "#2E7D32" },
              headerTintColor: "#FFFFFF",
            }}
          />
          <Stack.Screen
            name="CountingSelection"
            component={CountingSelection}
            options={{
              headerShown: false,
              headerBackTitleVisible: false,
              headerTitle: "Counting",
              headerTitleStyle: { fontSize: 20, color: "#FFFFFF" },
              headerStyle: { backgroundColor: "#2E7D32" },
              headerTintColor: "#FFFFFF",
            }}
          />
          <Stack.Screen
            name="DailyCheckIn"
            component={DailyCheckIn}
            options={{
              headerShown: true,
              headerBackTitleVisible: false,
              headerLeft: null, // removes the back button
              headerTitle: "Daily Check-In",
              headerTitleStyle: { fontSize: 20, color: "#424242" },
              headerStyle: { backgroundColor: "#FFC10E" },
              headerTintColor: "#424242",
            }}
          />
          <Stack.Screen
            name="CheckInExplain"
            component={CheckInExplain}
            options={{
              headerShown: true,
              headerBackTitleVisible: false,
              headerTitle: "Daily Check-In",
              headerTitleStyle: { fontSize: 20, color: "#424242" },
              headerStyle: { backgroundColor: "#FFC10E" },
              headerTintColor: "#424242",
            }}
          />
          <Stack.Screen
            name="FeelingDictionary"
            component={FeelingDictionary}
            options={{
              headerShown: true,
              headerBackTitleVisible: false,
              headerTitle: "Daily Check-In",
              headerTitleStyle: { fontSize: 20, color: "#424242" },
              headerStyle: { backgroundColor: "#FFC10E" },
              headerTintColor: "#424242",
            }}
          />
          <Stack.Screen
            name="FlatActivities"
            component={FlatActivities}
            options={({ route }) => ({
              headerShown: true,
              headerStyle: { backgroundColor: route.params.headerColor },
              title: "Activities",
              headerTitleAlign: "center",
              headerTitleStyle: { color: "#F2F2F2", fontFamily: "FontReg" },
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => {
                    RootNavigation.navigate("Home");
                  }}
                  style={{ height: 21, width: 12, marginHorizontal: 15 }}
                >
                  <Image
                    source={require("./assets/kpi/chevronLeft.png")}
                    style={{ height: 21, width: 12 }}
                  />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="Storytime"
            component={Storytime}
            options={{ headerShown: true }}
          />
          <Stack.Screen name="milkMilkMilk" component={MilkMilkMilk} />
          <Stack.Screen
            name="kpi"
            component={kpi}
            screenOptions={{ headerShown: false }}
          />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Mindfulness" component={Mindfulness} />
          <Stack.Screen
            name="Activities"
            component={Activities}
            options={{
              headerShown: true,
              headerBackTitleVisible: false,
              headerTitle: "Activities",
              headerTitleStyle: { fontSize: 20, color: "#FFFFFF" },
              headerStyle: { backgroundColor: "#2E7D32" },
              headerTintColor: "#FFFFFF",
            }}
          />
          <Stack.Screen
            name="FiveFourThreeTwoOneTech"
            component={FiveFourThreeTwoOneTech}
            options={{
              headerShown: true,
              headerBackTitleVisible: false,
              headerTitle: "5-4-3-2-1 Technique",
              headerTitleStyle: { fontSize: 24, color: "white" },
              headerStyle: { backgroundColor: "#2E7D32" },
            }}
          />
          <Stack.Screen
            name="CharacterChat"
            options={({ route }) => ({
              headerShown: true,
              headerBackTitleVisible: false,
              headerTitle: route.params.name, // Header is passed upon navigation through the route
              headerTitleStyle: { fontSize: 20, color: "#FFFFFF" },
              headerStyle: { backgroundColor: route.params.headerColor },
              headerTintColor: "#FFFFFF",
            })}
            component={CharacterChat}
          />
          <Stack.Screen
            name="boxBreathing"
            options={{ headerShown: false }}
            component={BoxBreathing}
          />
          <Stack.Screen
            name="Adventure"
            component={Adventure}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="AdventureLocation"
            component={AdventureLocation}
          />
          <Stack.Screen
            name="AdventureLocationSeeAll"
            component={AdventureLocationSeeAll}
          />
        <Stack.Screen name="Modal" component={Modal} options={ModalOptions} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
