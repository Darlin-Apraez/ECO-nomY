
import { SafeAreaView, Text, View, StatusBar } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import 'react-native-gesture-handler';

import BalanceWallet from "./src/screens/BalanceWallet";
import ConfirmPassword from "./src/screens/ConfirmPassword";
import EnterPassword from "./src/screens/EnterPassword";
import Home from "./src/screens/Home";
import ReceiveToken from "./src/screens/ReceiveToken";
import SendToken from "./src/screens/SendToken";
import Slider from "./src/screens/Slider";
import Splash from "./src/screens/Splash";
import VerifyMnemonic from "./src/screens/VerifyMnemonic";
import WriteMnemonic from "./src/screens/WriteMnemonic";

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
          name="Slider"
          component={Slider}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WriteMnemonic"
          component={WriteMnemonic}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VerifyMnemonic"
          component={VerifyMnemonic}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EnterPassword"
          component={EnterPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ConfirmPassword"
          component={ConfirmPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BalanceWallet"
          component={BalanceWallet}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ReceiveToken"
          component={ReceiveToken}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SendToken"
          component={SendToken}
          options={{ headerShown: false, gestureEnabled: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
