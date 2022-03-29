import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";
import { View, Text, SafeAreaView, StatusBar, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import BarStatus from "../components/BarStatus";

const Splash = ({ navigation }: { navigation: any }) => {
  function navegar() {
    navigation.navigate("Home");
  }

  setTimeout(() => {
    navegar();
  }, 2500);

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
          <Animatable.View
            animation="pulse"
            easing="ease-out"
            iterationCount="infinite"
          >
            <Image
              style={stylesM.logoeconomY}
              source={require("./../../assets/img/economY.png")}
            />
          </Animatable.View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Splash;
