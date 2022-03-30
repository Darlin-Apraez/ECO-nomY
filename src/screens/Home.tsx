import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  BackHandler,
} from "react-native";
import BarStatus from "../components/BarStatus";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";

const Home = ({ navigation }: { navigation: any }) => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => true
    );
    return () => backHandler.remove();
  }, []);

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
          <Image
            style={stylesM.logoeconomYTwo}
            source={require("./../../assets/img/economY.png")}
          />
          <View style={stylesM.boxButtonIn}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={[
                stylesM.botonGeneral,
                stylesM.backgroundYellowGreen,
                stylesL.JustifyAlign,
              ]}
              onPress={() => navigation.navigate("Login")}
            >
              <Text
                style={[
                  stylesM.textColorDarkGreen,
                  stylesM.fontSizeTwentyEight,
                  stylesM.textBold,
                ]}
              >
                Iniciar sesión
              </Text>
            </TouchableOpacity>
          </View>
          <View style={stylesM.boxButton}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={[stylesM.botonGeneral,stylesO.botonGeneral__WithoutShadow, stylesL.JustifyAlign]}
              onPress={() => navigation.navigate("SignUp")}
            >
              <Text
                style={[
                  stylesM.textColorWhite,
                  stylesM.fontSizeTwentyTwo,
                  stylesM.textBold,
                ]}
              >
                Registrar nueva cuenta
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Home;
