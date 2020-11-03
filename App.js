/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { TouchableOpacity, Image } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "./src/components/splash.js";
import LoginSignup from "./src/components/session/loginSignup.js";
import IntroVideo from "./src/components/video.js";
import Storytime from "./src/components/storytime.js";
import MilkMilkMilk from "./src/components/milkMilkMilk";
import Profile from "./src/components/profile.js";
import Mindfulness from "./src/components/mindfulnessStack";
import Counting from "./src/components/Counting";
import { Provider } from "react-redux";
import configureStore from "./src/store/store";
import Home from "./src/components/homeStack";
import DailyCheckIn from "./src/components/DailyCheckIn";
import CheckInExplain from "./src/components/CheckInExplain";
import Activities from "./src/components/Activities";
import BoxBreathing from "./src/components/boxBreathing";
import ChatPlaceholder from "./src/components/chatPlaceholder";
import FeelingDictionary from "./src/components/FeelingDictionary";
import kpi from "./src/components/kpi";
import { navigationRef } from "./src/components/RootNavigation";
import * as RootNavigation from "./src/components/RootNavigation";
import FiveFourThreeTwoOne from "./src/components/FiveFourThreeTwoOne.js";
import FiveFourThreeTwoOneTech from "./src/components/FiveFourThreeTwoOneTech.js";
import CountingPrompt from "./src/components/CountingPrompt.js";
import CountingSelection from "./src/components/CountingSelection.js";
import Adventure from "./src/components/Adventure.js";
import Picnic from "./src/components/Picnic.js";
import PicnicSeeAll from "./src/components/PicnicSeeAll.js";


const Stack = createStackNavigator();
const store = configureStore();

export default function App() {
  console.disableYellowBox = true;

  return (
    <NavigationContainer ref={navigationRef}>
      <Provider store={store}>
        <Stack.Navigator
          screenOptions={{ headerShown: false, animationEnabled: false }}
        >
          <Stack.Screen name="IntroVideo" component={IntroVideo} />
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="loginSignup" component={LoginSignup} />
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
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="Storytime"
            component={Storytime}
            options={{ headerShown: true }}
          />
          <Stack.Screen name="milkMilkMilk" component={MilkMilkMilk} />
          <Stack.Screen
            name="kpi"
            component={kpi}
            options={{
              headerShown: true,
              headerTitle: "Placehoder KPI",
              headerTitleStyle: { fontSize: 20, color: "#424242" },
              headerStyle: { backgroundColor: "#FFC10E" },
              headerTintColor: "#424242",
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => {
                    RootNavigation.navigate("chatPlaceholder");
                  }}
                  style={{ height: 21, width: 12, marginHorizontal: 15 }}
                >
                  <Image
                    source={require("./assets/kpi/chevronLeft.png")}
                    style={{ height: 21, width: 12 }}
                  />
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Mindfulness" component={Mindfulness} />
          <Stack.Screen
            name="FiveFourThreeTwoOne"
            component={FiveFourThreeTwoOne}
            options={{
              headerShown: true,
              headerBackTitleVisible: false,
              headerTitle: "5-4-3-2-1",
              headerTitleStyle: { fontSize: 24, color: "white" },
              headerStyle: { backgroundColor: "#2E7D32" },
            }}
          />
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
            name="chatPlaceholder"
            options={{ headerShown: true }}
            component={ChatPlaceholder}
          />
          <Stack.Screen
            name="boxBreathing"
            options={{ headerShown: true, headerTitle: "Box Breathing" }}
            component={BoxBreathing}
          />
          <Stack.Screen
            name="Adventure"
            component={Adventure}
            options={{
              headerShown: true,
              headerBackTitleVisible: false,
              headerTintColor: "white",
              headerTitle: "Going on an Adventure",
              headerTitleStyle: { fontSize: 24, color: "white" },
              headerStyle: { backgroundColor: "#2E7D32" },
            }}
          />
          <Stack.Screen name="Picnic" component={Picnic} />
          <Stack.Screen name="PicnicSeeAll" component={PicnicSeeAll} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
