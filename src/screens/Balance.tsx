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
import IconUser from "react-native-vector-icons/FontAwesome";

const sizeIcon = Platform.OS === "ios" ? 22 : 25;

const Balance = ({ navigation }: { navigation: any }) => {
  // Concatenate pkey.
  var str = '9zkw97JC6ENa4PuQJAJMjnj989R2XWbAxc9onLco3LZ3';
  var strFirstThree = str.substring(0, 3);
  var strLastThree = str.substring(str.length - 3, str.length);
  var concatenado = `${strFirstThree}...${strLastThree}`;

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
          <View style={[stylesM.boxWelcome, stylesM.widthRectangle]}>
            <Text style={[stylesM.textColorWhite, stylesM.fontSizeTwentyFour, stylesM.textBold]}>
              Bienvenido ECO-amigo.
            </Text>
          </View>
          <View style={[stylesM.widthRectangle, stylesM.backgroundRed]}>
            <IconUser name="user-circle-o" size={sizeIcon} color="#fff" />
            <Text>ECO Friend 001</Text>
            <Text>email001@gmail.com</Text>
            <Text>Billetera: {concatenado}</Text>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Balance;
