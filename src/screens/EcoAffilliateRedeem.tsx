import {
    stylesB,
    stylesL,
    stylesM,
    stylesO,
    stylesS,
  } from "./../appTheme/styles/styles";
  import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, Platform } from "react-native";
  import BarStatus from "../components/BarStatus";
  import React from "react";
  import { LinearGradient } from "expo-linear-gradient";
  import Icon from "react-native-vector-icons/FontAwesome";

const sizeIcon = Platform.OS === "ios" ? 22 : 25;

const EcoAffilliateRedeem = ({ navigation }: { navigation: any }) => {
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
          <TouchableOpacity
            activeOpacity={0.5}
            style={[stylesL.JustifyAlign, stylesM.goBack, stylesO.goBack__top]}
            onPress={() => navigation.goBack()}
          >
            <Icon name="chevron-left" size={sizeIcon} color="#fff" />
          </TouchableOpacity>
          <View style={[stylesM.boxTitlePrincipal, stylesM.widthRectangle]}>
            <Text
              style={[
                stylesM.textColorWhite,
                stylesM.fontSizeTwentyTwo,
                stylesM.textBold,
              ]}
            >
              ECO Afiliado 1.
            </Text>
          </View>

          <View style={stylesM.boxSubTitlePrincipal}>
            <Text
              style={[
                stylesM.textColorWhite,
                stylesM.widthRectangle,
                stylesM.fontSizeSixteen,
              ]}
            >
              Información para redimir tus ECOpuntos
            </Text>
          </View>

          <ScrollView
            contentContainerStyle={{ marginTop: 10, bottom: 25 }}
            horizontal={false}
            showsVerticalScrollIndicator={false}
          >
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
}

export default EcoAffilliateRedeem