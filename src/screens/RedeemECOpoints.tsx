import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from "react-native";
import BarStatus from "../components/BarStatus";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const RedeemECOpoints = ({ navigation }: { navigation: any }) => {
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
          <View style={[stylesM.boxTitlePrincipal, stylesM.widthRectangle]}>
            <Text
              style={[
                stylesM.textColorWhite,
                stylesM.fontSizeTwentyTwo,
                stylesM.textBold,
              ]}
            >
              Redimir ECOpuntos.
            </Text>
          </View>

          <View
            style={[stylesM.boxImagePrincipal, stylesO.boxImagePrincipal__top]}
          >
            <Image
              style={stylesM.boxImagePrincipal_imageBag}
              source={require("./../../assets/img/redem.png")}
            />
          </View>

          <View style={stylesM.boxSubTitlePrincipal}>
            <Text
              style={[
                stylesM.textColorWhite,
                stylesM.widthRectangle,
                stylesM.fontSizeSixteen,
              ]}
            >
              Canjea tus ECOPuntos.
            </Text>
          </View>

          <ScrollView
            contentContainerStyle={{ marginTop: 10, bottom: 25 }}
            horizontal={false}
            showsVerticalScrollIndicator={false}
          >
            <TouchableOpacity
              activeOpacity={0.5}
              style={[
                stylesM.widthRectangle,
                stylesM.backgroundYellowGreen,
                stylesM.boxWidth,
                stylesO.boxWidth__heightExchange,
                stylesM.radiusFive,
              ]}
              onPress={() => navigation.navigate("EcoAffilliateRedeem")}
            ></TouchableOpacity>
          </ScrollView>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default RedeemECOpoints;
