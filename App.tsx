import { SafeAreaView, Text, View, StatusBar, Platform, Image } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RFValue } from "react-native-responsive-fontsize";


import Home from "./src/screens/Home";
import Splash from "./src/screens/Splash";
import Balance from "./src/screens/Balance";
import Login from "./src/screens/Login";
import RedeemECOpoints from "./src/screens/RedeemECOpoints";
import SustainableActions from "./src/screens/SustainableActions";
import SignUp from "./src/screens/SignUp";
import Index from "./src/screens/Index";


const Tab = createBottomTabNavigator();
const barios = Platform.OS === "ios" ? 61 : 50;

function NavigationMenu() {
 
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          height: RFValue(barios),
          backgroundColor: "#2e882b",
          borderTopColor: "#2e882b",
          elevation: 0,
        },

        tabBarIcon: ({ focused }) => {
          let imagenes;
          if (route.name === "Balance") {
            imagenes = focused
              ? require("./assets/img/balanceActive.png")
              : require("./assets/img/balance.png");
          } else if (route.name === "SustainableActions") {
            imagenes = focused
              ? require("./assets/img/sustainableActionsActive.png")
              : require("./assets/img/sustainableActions.png");
          }else if (route.name === "RedeemECOpoints") {
            imagenes = focused
              ? require("./assets/img/redeemECOpointsActive.png")
              : require("./assets/img/redeemECOpoints.png");
          }else if (route.name === "Index") {
            imagenes = focused
              ? require("./assets/img/indexActive.png")
              : require("./assets/img/index.png");
          }
          return (
            <Image
              source={imagenes}
              style={{
                height: RFValue(34.4),
                width: RFValue(33.3),
                resizeMode: "contain",
              }}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Balance" component={Balance} />
      <Tab.Screen name="SustainableActions" component={SustainableActions} />
      <Tab.Screen name="RedeemECOpoints" component={RedeemECOpoints} />
      <Tab.Screen name="Index" component={Index} />
    </Tab.Navigator>
  );
}






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
          name="NavigationMenu"
          component={NavigationMenu}
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
        <Stack.Screen
          name="Index"
          component={Index}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
