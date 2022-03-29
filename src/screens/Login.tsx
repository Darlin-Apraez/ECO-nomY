import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";
import { View, Text, SafeAreaView,Platform } from "react-native";
import BarStatus from "../components/BarStatus";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome5";

const altura = Platform.OS === "ios" ? 22 : 25;
const Login = () => {
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
          <View style={stylesM.boxButton}>
          <Icon name="arrow-left" size={altura} color="#440577" />
            <TouchableOpacity activeOpacity={0.5} style={[stylesM.botonGeneral, stylesM.backgroundYellowGreen, stylesL.JustifyAlign]}>
              <Text style={[stylesM.textColorDarkGreen, stylesM.fontSizeTwentyEight, stylesM.textBold]}>Iniciar sesión</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Login;
