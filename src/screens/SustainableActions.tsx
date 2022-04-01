import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
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
            contentContainerStyle={{ bottom: 25 }}
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
          </ScrollView>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SustainableActions;
