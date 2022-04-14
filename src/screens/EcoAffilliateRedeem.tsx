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
  import IconMap from "react-native-vector-icons/Fontisto";

const sizeIcon = Platform.OS === "ios" ? 22 : 25;
const sizeIconMap = Platform.OS === "ios" ? 17 : 20;

const EcoAffilliateRedeem = ({ navigation, route }: { navigation: any; route: any }) => {
  const titleMsg = route.params?.msg;
  
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
              {titleMsg}
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
                stylesO.boxWidth__heightInfo,
                stylesM.radiusSixteen,
                stylesL.flexColumn,
              ]}
            >
              <View style={[stylesM.boxWidth_info, stylesL.JustifyAlign]}>
                <View>
                  <Image
                    style={[stylesM.boxWidth_info_img]}
                    source={require("./../../assets/img/redem.png")}
                  />
                </View>

                <View>
                  <Text
                    style={[
                      stylesM.textColorWhite,
                      stylesM.fontSizeTwentyTwo,
                      stylesM.textBold,
                    ]}
                  >
                    Información General.
                  </Text>
                </View>
              </View>

              <View style={[stylesM.boxWidth_info, stylesL.flexRow]}>
                <View
                  style={[stylesM.boxWidth_info_logo, stylesL.JustifyAlign]}
                >
                  <View
                    style={[
                      stylesM.backgroundYellowGreen,
                      stylesM.radiusSix,
                      stylesL.JustifyAlign,
                      stylesM.boxWidth_info_logo_img,
                    ]}
                  >
                    <Text
                      style={[
                        stylesM.textColorDarkGreen,
                        stylesM.textBold,
                        stylesM.fontSizeSixteen,
                      ]}
                    >
                      LOGO
                    </Text>
                  </View>
                </View>

                <View
                  style={[
                    stylesM.boxWidth_info_description,
                    stylesL.Justify,
                    stylesL.spaceBetween,
                  ]}
                >
                  <Text
                    style={[
                      stylesM.fontSizeSixteen,
                      stylesM.textColorYellowGreen,
                      stylesM.textMedium,
                    ]}
                  >
                    Nombre del establecimiento.
                  </Text>
                  <Text
                    style={[
                      stylesM.fontSizeSixteen,
                      stylesM.textColorYellowGreen,
                      stylesM.textMedium,
                    ]}
                  >
                    Dirección del establecimiento.
                  </Text>
                  <Text
                    style={[
                      stylesM.fontSizeSixteen,
                      stylesM.textColorYellowGreen,
                      stylesM.textMedium,
                    ]}
                  >
                    Categoría.
                  </Text>
                  <Text
                    style={[
                      stylesM.fontSizeSixteen,
                      stylesM.textColorYellowGreen,
                      stylesM.textMedium,
                    ]}
                  >
                    Contacto.
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={[
                stylesM.widthRectangle,
                stylesM.backgroundDarkGreen,
                stylesM.boxWidth,
                stylesO.boxWidth__heightMap,
                stylesM.radiusTwenty,
                stylesM.paddingHorizontalTwentySix,
              ]}
            >
              <View style={[stylesL.flexRow]}>
                <View style={[stylesM.boxMap, stylesL.Justify]}>
                  <IconMap
                    name="map-marker-alt"
                    size={sizeIconMap}
                    color="#ABCB59"
                  />
                </View>

                <View style={[stylesM.boxTxtMap, stylesL.Justify]}>
                  <Text
                    style={[stylesM.textColorWhite, stylesM.fontSizeEighteen]}
                  >
                    Mapa para redimir tus ecopuntos.
                  </Text>
                </View>
              </View>

              <View style={[stylesM.boxLocation]}>
                <Image
                  style={[stylesM.boxLocation_img, stylesM.radiusSixteen]}
                  source={require("./../../assets/img/map.png")}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

export default EcoAffilliateRedeem