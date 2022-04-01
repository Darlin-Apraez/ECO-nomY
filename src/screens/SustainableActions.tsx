import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";
import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import BarStatus from "../components/BarStatus";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const SustainableActions = () => {
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
          <ScrollView
            contentContainerStyle={{ flex: 2, bottom: 25 }}
            horizontal={false}
            showsVerticalScrollIndicator={false}
          >
            <View style={[stylesM.boxTitlePrincipal, stylesM.widthRectangle]}>
              <Text
                style={[
                  stylesM.textColorWhite,
                  stylesM.fontSizeTwentyTwo,
                  stylesM.textBold,
                ]}
              >
                Tus contribuciones.
              </Text>
            </View>

            <View style={[stylesM.boxImagePrincipal]}>
              <Image
                style={stylesM.boxImagePrincipal_image}
                source={require("./../../assets/img/sustainableAction.png")}
              />
            </View>

            <View style={stylesM.boxSubTitlePrincipal}>
              <Text style={[stylesM.textColorWhite, stylesM.fontSizeSixteen]}>
                Tus Acciones sostenibles.
              </Text>
            </View>

            <View
              style={[
                stylesM.widthRectangle,
                stylesM.backgroundDarkGreen,
                stylesM.boxWidth,
                stylesM.radiusSixteen,
              ]}
            ></View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SustainableActions;
