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
  ScrollView,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import BarStatus from "../components/BarStatus";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import IconStart from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/Entypo";

const sizeIconStart = Platform.OS === "ios" ? 17 : 20;
const sizeIcon = Platform.OS === "ios" ? 30 : 35;

const Notifications = ({ navigation }: { navigation: any }) => {
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
              Notificaciones.
            </Text>
          </View>

          <View
            style={[stylesM.boxImagePrincipal, stylesO.boxImagePrincipal__top]}
          ></View>

          <View style={stylesM.boxSubTitlePrincipal}>
            <Text
              style={[
                stylesM.textColorWhite,
                stylesM.widthRectangle,
                stylesM.fontSizeSixteen,
              ]}
            ></Text>
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
                stylesO.boxWidth__heightExchange,
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
                <TouchableOpacity
                  activeOpacity={0.9}
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
                    <View
                      style={[
                        stylesO.boxHistory_logo__red,
                        stylesM.backgroundRed,
                        stylesM.radiusTen,
                      ]}
                    ></View>
                  </View>

                  <View style={[stylesM.boxHistory_txt, stylesL.Justify]}>
                    <Text
                      style={[
                        stylesM.textColorWhite,
                        stylesM.fontSizeEighteen,
                        stylesM.textMedium,
                      ]}
                    >
                      Notificación 1.
                    </Text>
                  </View>

                  <View
                    style={[stylesM.boxHistory_iconRight, stylesL.JustifyAlign]}
                  ></View>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.9}
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
                    <View
                      style={[
                        stylesO.boxHistory_logo__red,
                        stylesM.backgroundRed,
                        stylesM.radiusTen,
                      ]}
                    ></View>
                  </View>

                  <View style={[stylesM.boxHistory_txt, stylesL.Justify]}>
                    <Text
                      style={[
                        stylesM.textColorWhite,
                        stylesM.fontSizeEighteen,
                        stylesM.textMedium,
                      ]}
                    >
                      Notificación 2.
                    </Text>
                  </View>

                  <View
                    style={[stylesM.boxHistory_iconRight, stylesL.JustifyAlign]}
                  ></View>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.9}
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
                    <View
                      style={[
                        stylesO.boxHistory_logo__red,
                        stylesM.backgroundRed,
                        stylesM.radiusTen,
                      ]}
                    ></View>
                  </View>

                  <View style={[stylesM.boxHistory_txt, stylesL.Justify]}>
                    <Text
                      style={[
                        stylesM.textColorWhite,
                        stylesM.fontSizeEighteen,
                        stylesM.textMedium,
                      ]}
                    >
                      Notificación 3.
                    </Text>
                  </View>

                  <View
                    style={[stylesM.boxHistory_iconRight, stylesL.JustifyAlign]}
                  ></View>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.9}
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
                    <View
                      style={[
                        stylesO.boxHistory_logo__red,
                        stylesM.backgroundRed,
                        stylesM.radiusTen,
                      ]}
                    ></View>
                  </View>

                  <View style={[stylesM.boxHistory_txt, stylesL.Justify]}>
                    <Text
                      style={[
                        stylesM.textColorWhite,
                        stylesM.fontSizeEighteen,
                        stylesM.textMedium,
                      ]}
                    >
                      Notificación 4.
                    </Text>
                  </View>

                  <View
                    style={[stylesM.boxHistory_iconRight, stylesL.JustifyAlign]}
                  ></View>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.9}
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
                    <View
                      style={[
                        stylesO.boxHistory_logo__red,
                        stylesM.backgroundRed,
                        stylesM.radiusTen,
                      ]}
                    ></View>
                  </View>

                  <View style={[stylesM.boxHistory_txt, stylesL.Justify]}>
                    <Text
                      style={[
                        stylesM.textColorWhite,
                        stylesM.fontSizeEighteen,
                        stylesM.textMedium,
                      ]}
                    >
                      Notificación 5.
                    </Text>
                  </View>

                  <View
                    style={[stylesM.boxHistory_iconRight, stylesL.JustifyAlign]}
                  ></View>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.9}
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
                    <View
                      style={[
                        stylesO.boxHistory_logo__red,
                        stylesM.backgroundRed,
                        stylesM.radiusTen,
                      ]}
                    ></View>
                  </View>

                  <View style={[stylesM.boxHistory_txt, stylesL.Justify]}>
                    <Text
                      style={[
                        stylesM.textColorWhite,
                        stylesM.fontSizeEighteen,
                        stylesM.textMedium,
                      ]}
                    >
                      Notificación 6.
                    </Text>
                  </View>

                  <View
                    style={[stylesM.boxHistory_iconRight, stylesL.JustifyAlign]}
                  ></View>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.9}
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
                    <View
                      style={[
                        stylesO.boxHistory_logo__red,
                        stylesM.backgroundRed,
                        stylesM.radiusTen,
                      ]}
                    ></View>
                  </View>

                  <View style={[stylesM.boxHistory_txt, stylesL.Justify]}>
                    <Text
                      style={[
                        stylesM.textColorWhite,
                        stylesM.fontSizeEighteen,
                        stylesM.textMedium,
                      ]}
                    >
                      Notificación 7.
                    </Text>
                  </View>

                  <View
                    style={[stylesM.boxHistory_iconRight, stylesL.JustifyAlign]}
                  ></View>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.9}
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
                    <View
                      style={[
                        stylesO.boxHistory_logo__red,
                        stylesM.backgroundRed,
                        stylesM.radiusTen,
                      ]}
                    ></View>
                  </View>

                  <View style={[stylesM.boxHistory_txt, stylesL.Justify]}>
                    <Text
                      style={[
                        stylesM.textColorWhite,
                        stylesM.fontSizeEighteen,
                        stylesM.textMedium,
                      ]}
                    >
                      Notificación 8.
                    </Text>
                  </View>

                  <View
                    style={[stylesM.boxHistory_iconRight, stylesL.JustifyAlign]}
                  ></View>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.9}
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
                    <View
                      style={[
                        stylesO.boxHistory_logo__red,
                        stylesM.backgroundRed,
                        stylesM.radiusTen,
                      ]}
                    ></View>
                  </View>

                  <View style={[stylesM.boxHistory_txt, stylesL.Justify]}>
                    <Text
                      style={[
                        stylesM.textColorWhite,
                        stylesM.fontSizeEighteen,
                        stylesM.textMedium,
                      ]}
                    >
                      Notificación 9.
                    </Text>
                  </View>

                  <View
                    style={[stylesM.boxHistory_iconRight, stylesL.JustifyAlign]}
                  ></View>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.9}
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
                    <View
                      style={[
                        stylesO.boxHistory_logo__red,
                        stylesM.backgroundRed,
                        stylesM.radiusTen,
                      ]}
                    ></View>
                  </View>

                  <View style={[stylesM.boxHistory_txt, stylesL.Justify]}>
                    <Text
                      style={[
                        stylesM.textColorWhite,
                        stylesM.fontSizeEighteen,
                        stylesM.textMedium,
                      ]}
                    >
                      Notificación 10.
                    </Text>
                  </View>

                  <View
                    style={[stylesM.boxHistory_iconRight, stylesL.JustifyAlign]}
                  ></View>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Notifications;
