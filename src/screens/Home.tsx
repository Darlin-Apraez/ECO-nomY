import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";
import { View, Text, SafeAreaView } from "react-native";
import BarStatus from "../components/BarStatus";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

const Home = () => {
  return (
    <LinearGradient
      colors={["#38AA35", "#1F5326"]}
      style={stylesB.linear}
      start={{ x: 0, y: 1.6 }}
      end={{ x: 0, y: 0 }}
    >
      <SafeAreaView style={stylesB.body}>
        <BarStatus />
        <View style={stylesB.completo}>
          <Text style={[stylesM.textColorWhite, stylesM.fontSizeSixteen]}>
            Home
          </Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Home;
