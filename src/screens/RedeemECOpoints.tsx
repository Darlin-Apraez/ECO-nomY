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
import IconStart from "react-native-vector-icons/AntDesign";

const sizeIconStart = Platform.OS === "ios" ? 17 : 20;

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
                  onPress={() =>
                    navigation.navigate("EcoAffilliateRedeem", {
                      msg: "ECO Afiliado 1.",
                    })
                  }
                >
                  <View
                    style={[stylesM.boxHistory_iconLeft, stylesL.JustifyAlign]}
                  >
                    <View
                      style={[
                        stylesM.boxHistory_logo,
                        stylesM.backgroundYellowGreen,
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
                      ECO Afiliado 1.
                    </Text>
                  </View>

                  <View
                    style={[stylesM.boxHistory_iconRight, stylesL.JustifyAlign]}
                  >
                    <IconStart
                      name="staro"
                      size={sizeIconStart}
                      color="#ABCB59"
                    />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.9}
                  style={[
                    stylesM.boxHistory,
                    stylesM.backgroundDarkGreen,
                    stylesM.radiusSeven,
                    stylesL.flexRow,
                  ]}
                  onPress={() =>
                    navigation.navigate("EcoAffilliateRedeem", {
                      msg: "ECO Afiliado 2.",
                    })
                  }
                >
                  <View
                    style={[stylesM.boxHistory_iconLeft, stylesL.JustifyAlign]}
                  >
                    <View
                      style={[
                        stylesM.boxHistory_logo,
                        stylesM.backgroundYellowGreen,
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
                      ECO Afiliado 2.
                    </Text>
                  </View>

                  <View
                    style={[stylesM.boxHistory_iconRight, stylesL.JustifyAlign]}
                  >
                    <IconStart
                      name="staro"
                      size={sizeIconStart}
                      color="#ABCB59"
                    />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.9}
                  style={[
                    stylesM.boxHistory,
                    stylesM.backgroundDarkGreen,
                    stylesM.radiusSeven,
                    stylesL.flexRow,
                  ]}
                  onPress={() =>
                    navigation.navigate("EcoAffilliateRedeem", {
                      msg: "ECO Afiliado 3.",
                    })
                  }
                >
                  <View
                    style={[stylesM.boxHistory_iconLeft, stylesL.JustifyAlign]}
                  >
                    <View
                      style={[
                        stylesM.boxHistory_logo,
                        stylesM.backgroundYellowGreen,
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
                      ECO Afiliado 3.
                    </Text>
                  </View>

                  <View
                    style={[stylesM.boxHistory_iconRight, stylesL.JustifyAlign]}
                  >
                    <IconStart
                      name="staro"
                      size={sizeIconStart}
                      color="#ABCB59"
                    />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.9}
                  style={[
                    stylesM.boxHistory,
                    stylesM.backgroundDarkGreen,
                    stylesM.radiusSeven,
                    stylesL.flexRow,
                  ]}
                  onPress={() =>
                    navigation.navigate("EcoAffilliateRedeem", {
                      msg: "ECO Afiliado 4.",
                    })
                  }
                >
                  <View
                    style={[stylesM.boxHistory_iconLeft, stylesL.JustifyAlign]}
                  >
                    <View
                      style={[
                        stylesM.boxHistory_logo,
                        stylesM.backgroundYellowGreen,
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
                      ECO Afiliado 4.
                    </Text>
                  </View>

                  <View
                    style={[stylesM.boxHistory_iconRight, stylesL.JustifyAlign]}
                  >
                    <IconStart
                      name="staro"
                      size={sizeIconStart}
                      color="#ABCB59"
                    />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.9}
                  style={[
                    stylesM.boxHistory,
                    stylesM.backgroundDarkGreen,
                    stylesM.radiusSeven,
                    stylesL.flexRow,
                  ]}
                  onPress={() =>
                    navigation.navigate("EcoAffilliateRedeem", {
                      msg: "ECO Afiliado 5.",
                    })
                  }
                >
                  <View
                    style={[stylesM.boxHistory_iconLeft, stylesL.JustifyAlign]}
                  >
                    <View
                      style={[
                        stylesM.boxHistory_logo,
                        stylesM.backgroundYellowGreen,
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
                      ECO Afiliado 5.
                    </Text>
                  </View>

                  <View
                    style={[stylesM.boxHistory_iconRight, stylesL.JustifyAlign]}
                  >
                    <IconStart
                      name="staro"
                      size={sizeIconStart}
                      color="#ABCB59"
                    />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.9}
                  style={[
                    stylesM.boxHistory,
                    stylesM.backgroundDarkGreen,
                    stylesM.radiusSeven,
                    stylesL.flexRow,
                  ]}
                  onPress={() =>
                    navigation.navigate("EcoAffilliateRedeem", {
                      msg: "ECO Afiliado 6.",
                    })
                  }
                >
                  <View
                    style={[stylesM.boxHistory_iconLeft, stylesL.JustifyAlign]}
                  >
                    <View
                      style={[
                        stylesM.boxHistory_logo,
                        stylesM.backgroundYellowGreen,
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
                      ECO Afiliado 6.
                    </Text>
                  </View>

                  <View
                    style={[stylesM.boxHistory_iconRight, stylesL.JustifyAlign]}
                  >
                    <IconStart
                      name="staro"
                      size={sizeIconStart}
                      color="#ABCB59"
                    />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.9}
                  style={[
                    stylesM.boxHistory,
                    stylesM.backgroundDarkGreen,
                    stylesM.radiusSeven,
                    stylesL.flexRow,
                  ]}
                  onPress={() =>
                    navigation.navigate("EcoAffilliateRedeem", {
                      msg: "ECO Afiliado 7.",
                    })
                  }
                >
                  <View
                    style={[stylesM.boxHistory_iconLeft, stylesL.JustifyAlign]}
                  >
                    <View
                      style={[
                        stylesM.boxHistory_logo,
                        stylesM.backgroundYellowGreen,
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
                      ECO Afiliado 7.
                    </Text>
                  </View>

                  <View
                    style={[stylesM.boxHistory_iconRight, stylesL.JustifyAlign]}
                  >
                    <IconStart
                      name="staro"
                      size={sizeIconStart}
                      color="#ABCB59"
                    />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.9}
                  style={[
                    stylesM.boxHistory,
                    stylesM.backgroundDarkGreen,
                    stylesM.radiusSeven,
                    stylesL.flexRow,
                  ]}
                  onPress={() =>
                    navigation.navigate("EcoAffilliateRedeem", {
                      msg: "ECO Afiliado 8.",
                    })
                  }
                >
                  <View
                    style={[stylesM.boxHistory_iconLeft, stylesL.JustifyAlign]}
                  >
                    <View
                      style={[
                        stylesM.boxHistory_logo,
                        stylesM.backgroundYellowGreen,
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
                      ECO Afiliado 8.
                    </Text>
                  </View>

                  <View
                    style={[stylesM.boxHistory_iconRight, stylesL.JustifyAlign]}
                  >
                    <IconStart
                      name="staro"
                      size={sizeIconStart}
                      color="#ABCB59"
                    />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.9}
                  style={[
                    stylesM.boxHistory,
                    stylesM.backgroundDarkGreen,
                    stylesM.radiusSeven,
                    stylesL.flexRow,
                  ]}
                  onPress={() =>
                    navigation.navigate("EcoAffilliateRedeem", {
                      msg: "ECO Afiliado 9.",
                    })
                  }
                >
                  <View
                    style={[stylesM.boxHistory_iconLeft, stylesL.JustifyAlign]}
                  >
                    <View
                      style={[
                        stylesM.boxHistory_logo,
                        stylesM.backgroundYellowGreen,
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
                      ECO Afiliado 9.
                    </Text>
                  </View>

                  <View
                    style={[stylesM.boxHistory_iconRight, stylesL.JustifyAlign]}
                  >
                    <IconStart
                      name="staro"
                      size={sizeIconStart}
                      color="#ABCB59"
                    />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.9}
                  style={[
                    stylesM.boxHistory,
                    stylesM.backgroundDarkGreen,
                    stylesM.radiusSeven,
                    stylesL.flexRow,
                  ]}
                  onPress={() =>
                    navigation.navigate("EcoAffilliateRedeem", {
                      msg: "ECO Afiliado 10.",
                    })
                  }
                >
                  <View
                    style={[stylesM.boxHistory_iconLeft, stylesL.JustifyAlign]}
                  >
                    <View
                      style={[
                        stylesM.boxHistory_logo,
                        stylesM.backgroundYellowGreen,
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
                      ECO Afiliado 10.
                    </Text>
                  </View>

                  <View
                    style={[stylesM.boxHistory_iconRight, stylesL.JustifyAlign]}
                  >
                    <IconStart
                      name="staro"
                      size={sizeIconStart}
                      color="#ABCB59"
                    />
                  </View>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default RedeemECOpoints;
