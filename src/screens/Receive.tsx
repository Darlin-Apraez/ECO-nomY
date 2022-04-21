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
  Dimensions,
  Clipboard,
  ToastAndroid,
  Alert,
} from "react-native";
import BarStatus from "../components/BarStatus";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/Entypo";
import QRCode from "react-native-qrcode-svg";
import IconCopy from "react-native-vector-icons/Ionicons";

const sizeIcon = Platform.OS === "ios" ? 30 : 35;
const sizeCopy = Platform.OS === "ios" ? 19 : 22;
const windowWidth = Dimensions.get("screen").width;

const Receive = ({ navigation }: { navigation: any }) => {
  // Concatenate pkey.
  var str = "9zkw97JC6ENa4PuQJAJMjnj989R2XWbAxc9onLco3LZ3";
  var strFirstThree = str.substring(0, 5);
  var strLastThree = str.substring(str.length - 5, str.length);
  var concatenado = `${strFirstThree}...${strLastThree}`;


  const CopyWallet = () => {
    Clipboard.setString(concatenado);
    if (Platform.OS === "android") {
      ToastAndroid.show("Dirección copiada", ToastAndroid.SHORT);
    } else {
      Alert.alert("Dirección copiada");
    }
  };

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
          <View
            style={[
              stylesM.boxTitlePrincipal,
              stylesM.widthRectangle,
              stylesO.boxTitlePrincipal__bottom,
            ]}
          >
            <Text
              style={[
                stylesM.textColorWhite,
                stylesM.fontSizeTwentyTwo,
                stylesM.textBold,
              ]}
            >
              Recibir.
            </Text>
          </View>

          <View style={[stylesM.boxImagePrincipal]}></View>

          <View style={[stylesL.AlignItems]}>
            <View
              style={[
                stylesM.widthRectangle,
                stylesM.backgroundDarkGreen,
                stylesM.boxWidth,
                stylesM.radiusSixteen,
                stylesL.JustifyAlign,
                stylesO.boxWidth__qr,
              ]}
            >
              <QRCode
                size={windowWidth * 0.6}
                backgroundColor={"transparent"}
                color={"white"}
                value={str}
              />
            </View>
          </View>

          <View style={[stylesM.boxScanner, stylesL.JustifyAlign]}>
            <Text
              style={[
                stylesL.textAlignCenter,
                stylesM.textColorWhite,
                stylesM.fontSizeTwenty,
                stylesL.AlignItems,
              ]}
            >
              Escanear código QR para recibir ECOPuntos.
            </Text>
          </View>

          <View style={[stylesM.boxBotonButtom]}>
            <View style={[stylesM.boxBotonButtom_address, stylesL.JustifyAlign]}>
              <Text style={[stylesM.textColorWhite, stylesM.fontSizeSixteen]}>
                Dirección de la billetera
              </Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[
                stylesM.botonGeneral,
                stylesM.widthRectangle,
                stylesL.JustifyAlign,
                stylesO.botonGeneral__border,
                stylesL.flexRow,
              ]}
              onPress={() => CopyWallet()}
            >
              <View
                style={[
                  stylesM.widthPercentageSeven,
                  stylesM.botonGeneral_paddingLeft,
                  stylesL.alignItemsEnd,
                ]}
              >
                <Text
                  style={[
                    stylesM.textColorWhite,
                    stylesM.fontSizeTwentyEight,
                    stylesM.textBold,
                  ]}
                >
                  {concatenado}
                </Text>
              </View>
              <View
                style={[
                  stylesM.widthPercentageTree,
                  stylesM.botonGeneral_paddingLeft
                ]}
              >
                <IconCopy name="copy-outline" size={sizeCopy} color="#fff" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Receive;
