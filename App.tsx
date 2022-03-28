import { SafeAreaView, Text, View, StatusBar } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import "react-native-gesture-handler";

import Home from "./src/screens/Home";
import Splash from "./src/screens/Splash";
import Balance from "./src/screens/Balance";
import Login from "./src/screens/Login";
import RedeemECOpoints from "./src/screens/RedeemECOpoints";
import SustainableActions from "./src/screens/SustainableActions";
import SignUp from "./src/screens/SignUp";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
        }}
      >
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Balance"
          component={Balance}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SustainableActions"
          component={SustainableActions}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RedeemECOpoints"
          component={RedeemECOpoints}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
