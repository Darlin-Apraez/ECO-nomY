import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";
import { View, Text, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import BarStatus from "../components/BarStatus";

const Splash = () => {
  return (
    <LinearGradient
      colors={["rgba(175, 209, 41, 0.46)", "#308C30"]}
      style={stylesB.linear}
      start={{ x: 0, y: 1.6 }}
      end={{ x: 0, y: 0 }}
    >
      <SafeAreaView style={stylesB.body}>
        <StatusBar backgroundColor={"#308C30"} barStyle={"light-content"} />
        <View style={stylesB.completo}>
          <Text style={[stylesM.textColorWhite, stylesM.fontSizeSixteen]}>
            Splash
          </Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Splash;
