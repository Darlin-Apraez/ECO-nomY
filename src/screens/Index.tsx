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

const Index = () => {
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
              Indicadores.
            </Text>
          </View>

          <View style={[stylesM.boxImagePrincipal]}></View>

          <View style={stylesM.boxSubTitlePrincipal}>
            <Text
              style={[
                stylesM.textColorWhite,
                stylesM.widthRectangle,
                stylesM.fontSizeSixteen,
              ]}
            >
              Sus indicadores.
            </Text>
          </View>

          <ScrollView
            contentContainerStyle={{ marginTop:10, bottom: 25 }}
            horizontal={false}
            showsVerticalScrollIndicator={false}
          >
            <View
              style={[
                stylesM.widthRectangle,
                stylesM.backgroundDarkGreen,
                stylesM.boxWidth,
                stylesM.radiusSixteen,
                stylesL.JustifyAlign,
              ]}
            >
              <View style={[stylesL.JustifyAlign, stylesM.boxTitlePersonal]}>
                <Text
                  style={[
                    stylesM.textColorWhite,
                    stylesM.fontSizeSixteen,
                    stylesM.textBold,
                  ]}
                >
                  Indice sostenibilidad personal.
                </Text>
              </View>

              <View style={[stylesM.boxBow, stylesL.JustifyAlign]}>
                <Image
                  style={stylesM.boxBow_image}
                  source={require("./../../assets/img/bow.png")}
                />
              </View>
            </View>

            <View
              style={[
                stylesM.widthRectangle,
                stylesM.backgroundDarkGreen,
                stylesM.boxWidth,
                stylesM.radiusSixteen,
                stylesL.JustifyAlign,
              ]}
            >
              <View style={[stylesL.JustifyAlign, stylesM.boxTitlePersonal]}>
                <Text
                  style={[
                    stylesM.textColorWhite,
                    stylesM.fontSizeSixteen,
                    stylesM.textBold,
                  ]}
                >
                  Indice sostenibilidad mundial.
                </Text>
              </View>

              <View style={[stylesM.boxBow, stylesL.JustifyAlign]}>
                <Image
                  style={stylesM.boxBow_image}
                  source={require("./../../assets/img/bow.png")}
                />
              </View>
            </View>

            <View
              style={[
                stylesM.widthRectangle,
                stylesM.backgroundDarkGreen,
                stylesM.boxWidth,
                stylesO.boxWidth__height,
                stylesM.radiusSixteen,
                stylesL.JustifyAlign,
              ]}
            >
              <View style={[stylesL.JustifyAlign, stylesM.boxCity, stylesM.backgroundGhostWhite, stylesM.radiusSixteen]}>
                <Text
                  style={[
                    stylesM.textColorDarkGreen,
                    stylesM.fontSizeSixteen,
                    stylesM.textBold,
                  ]}
                >
                  Indice de tu ciudad.
                </Text>
              </View>
            </View>            
          </ScrollView>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Index;
