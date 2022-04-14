import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";
import { View, Text, SafeAreaView, ScrollView, Image, Platform, TouchableOpacity } from "react-native";
import BarStatus from "../components/BarStatus";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import IconEco from "react-native-vector-icons/MaterialIcons";
import IconCheck from "react-native-vector-icons/Entypo";
import IconMap from "react-native-vector-icons/Fontisto";

const sizeIconMap = Platform.OS === "ios" ? 17 : 20;
const sizeIconEco = Platform.OS === "ios" ? 27 : 30;
const sizeIconCheck = Platform.OS === "ios" ? 27 : 23;

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
            <Text
              style={[
                stylesM.textColorWhite,
                stylesM.widthRectangle,
                stylesM.fontSizeSixteen,
              ]}
            >
              Tus Acciones sostenibles.
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
                stylesM.backgroundYellowGreen,
                stylesM.boxWidth,
                stylesO.boxWidth__heightHistory,
                stylesM.radiusFive,
                stylesM.paddingHorizontalTwentySix,
                stylesL.flexColumn,
              ]}
            >
              <ScrollView
                nestedScrollEnabled={true}
                horizontal={false}
                showsVerticalScrollIndicator={true}
              >
                <View
                  style={[
                    stylesM.boxHistory,
                    stylesM.backgroundDarkGreen,
                    stylesM.radiusSeven,
                    stylesL.flexRow,
                  ]}
                >
                  <View
                    style={[stylesM.boxHistory_iconLeft, stylesL.JustifyAlign]}
                  >
                    <IconEco name="eco" size={sizeIconEco} color="#ABCB59" />
                  </View>

                  <View style={[stylesM.boxHistory_txt, stylesL.Justify]}>
                    <Text
                      style={[
                        stylesM.textColorWhite,
                        stylesM.fontSizeEighteen,
                        stylesM.textMedium,
                      ]}
                    >
                      ECO Bike - 30 Min
                    </Text>
                  </View>

                  <View
                    style={[stylesM.boxHistory_iconRight, stylesL.JustifyAlign]}
                  >
                    <IconCheck
                      name="check"
                      size={sizeIconCheck}
                      color="#ABCB59"
                    />
                  </View>
                </View>

                <View
                  style={[
                    stylesM.boxHistory,
                    stylesM.backgroundDarkGreen,
                    stylesM.radiusSeven,
                    stylesL.flexRow,
                  ]}
                >
                  <View
                    style={[stylesM.boxHistory_iconLeft, stylesL.JustifyAlign]}
                  >
                    <IconEco name="eco" size={sizeIconEco} color="#ABCB59" />
                  </View>

                  <View style={[stylesM.boxHistory_txt, stylesL.Justify]}>
                    <Text
                      style={[
                        stylesM.textColorWhite,
                        stylesM.fontSizeEighteen,
                        stylesM.textMedium,
                      ]}
                    >
                      ECO Bike - 30 Min
                    </Text>
                  </View>

                  <View
                    style={[stylesM.boxHistory_iconRight, stylesL.JustifyAlign]}
                  >
                    <IconCheck
                      name="check"
                      size={sizeIconCheck}
                      color="#ABCB59"
                    />
                  </View>
                </View>

                <View
                  style={[
                    stylesM.boxHistory,
                    stylesM.backgroundDarkGreen,
                    stylesM.radiusSeven,
                    stylesL.flexRow,
                  ]}
                >
                  <View
                    style={[stylesM.boxHistory_iconLeft, stylesL.JustifyAlign]}
                  >
                    <IconMap
                      name="map-marker-alt"
                      size={sizeIconMap}
                      color="#ABCB59"
                    />
                  </View>

                  <View style={[stylesM.boxHistory_txt, stylesL.Justify]}>
                    <Text
                      style={[
                        stylesM.textColorWhite,
                        stylesM.fontSizeEighteen,
                        stylesM.textMedium,
                      ]}
                    >
                      Reforestación - 3 Arboles
                    </Text>
                  </View>

                  <View
                    style={[stylesM.boxHistory_iconRight, stylesL.JustifyAlign]}
                  >
                    <IconCheck
                      name="check"
                      size={sizeIconCheck}
                      color="#ABCB59"
                    />
                  </View>
                </View>

                <View
                  style={[
                    stylesM.boxHistory,
                    stylesM.backgroundDarkGreen,
                    stylesM.radiusSeven,
                    stylesL.flexRow,
                  ]}
                >
                  <View
                    style={[stylesM.boxHistory_iconLeft, stylesL.JustifyAlign]}
                  >
                    <IconMap
                      name="map-marker-alt"
                      size={sizeIconMap}
                      color="#ABCB59"
                    />
                  </View>

                  <View style={[stylesM.boxHistory_txt, stylesL.Justify]}>
                    <Text
                      style={[
                        stylesM.textColorWhite,
                        stylesM.fontSizeEighteen,
                        stylesM.textMedium,
                      ]}
                    >
                      Jornada de limpieza a reservanatural
                    </Text>
                  </View>

                  <View
                    style={[stylesM.boxHistory_iconRight, stylesL.JustifyAlign]}
                  >
                    <IconCheck
                      name="check"
                      size={sizeIconCheck}
                      color="#ABCB59"
                    />
                  </View>
                </View>

                <View
                  style={[
                    stylesM.boxHistory,
                    stylesM.backgroundDarkGreen,
                    stylesM.radiusSeven,
                    stylesL.flexRow,
                  ]}
                >
                  <View
                    style={[stylesM.boxHistory_iconLeft, stylesL.JustifyAlign]}
                  >
                    <IconMap
                      name="map-marker-alt"
                      size={sizeIconMap}
                      color="#ABCB59"
                    />
                  </View>

                  <View style={[stylesM.boxHistory_txt, stylesL.Justify]}>
                    <Text
                      style={[
                        stylesM.textColorWhite,
                        stylesM.fontSizeEighteen,
                        stylesM.textMedium,
                      ]}
                    >
                      Reforestación - 2 Arboles
                    </Text>
                  </View>

                  <View
                    style={[stylesM.boxHistory_iconRight, stylesL.JustifyAlign]}
                  >
                    <IconCheck
                      name="check"
                      size={sizeIconCheck}
                      color="#ABCB59"
                    />
                  </View>
                </View>

                <View
                  style={[
                    stylesM.boxHistory,
                    stylesM.backgroundDarkGreen,
                    stylesM.radiusSeven,
                    stylesL.flexRow,
                  ]}
                >
                  <View
                    style={[stylesM.boxHistory_iconLeft, stylesL.JustifyAlign]}
                  >
                    <IconEco name="eco" size={sizeIconEco} color="#ABCB59" />
                  </View>

                  <View style={[stylesM.boxHistory_txt, stylesL.Justify]}>
                    <Text
                      style={[
                        stylesM.textColorWhite,
                        stylesM.fontSizeEighteen,
                        stylesM.textMedium,
                      ]}
                    >
                      ECO Bike - 30 Min
                    </Text>
                  </View>

                  <View
                    style={[stylesM.boxHistory_iconRight, stylesL.JustifyAlign]}
                  >
                    <IconCheck
                      name="check"
                      size={sizeIconCheck}
                      color="#ABCB59"
                    />
                  </View>
                </View>
              </ScrollView>
            </View>

            <View style={stylesM.boxAddition}>
              <Text
                style={[
                  stylesM.fontSizeEighteen,
                  stylesM.textBold,
                  stylesM.textColorWhite,
                ]}
              >
                Convocatorias - suma ECOpuntos.
              </Text>
            </View>

            <View
              style={[
                stylesM.widthRectangle,
                stylesM.backgroundDarkGreen,
                stylesM.boxWidth,
                stylesO.boxWidth__heightCall,
                stylesM.radiusSeven,
                stylesM.paddingHorizontalTwentySix,
                stylesL.flexColumn,
              ]}
            >
              <ScrollView nestedScrollEnabled={true} horizontal={false}>
                <View style={[stylesM.boxWidth_working]}>
                  <View>
                    <Text
                      style={[stylesM.textColorWhite, stylesM.fontSizeTwelve]}
                    >
                      Jornada de reforestación
                    </Text>
                  </View>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    style={[stylesM.boxWidth_working_img]}
                  >
                    <Image
                      style={[stylesM.boxLocation_img, stylesM.radiusSixteen]}
                      source={require("./../../assets/img/reforestation.png")}
                    />
                  </TouchableOpacity>
                </View>

                <View style={[stylesM.boxWidth_working]}>
                  <View>
                    <Text
                      style={[stylesM.textColorWhite, stylesM.fontSizeTwelve]}
                    >
                      Jornada de limpieza a reserva natural
                    </Text>
                  </View>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    style={[stylesM.boxWidth_working_img]}
                  >
                    <Image
                      style={[stylesM.boxLocation_img, stylesM.radiusSixteen]}
                      source={require("./../../assets/img/reserve.png")}
                    />
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SustainableActions;
