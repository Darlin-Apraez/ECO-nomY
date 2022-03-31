import { View, Text, TouchableOpacity, Platform, Image } from "react-native";
import React from "react";

import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";
import Icon from "react-native-vector-icons/Entypo";
import IconUser from "react-native-vector-icons/FontAwesome";
import IconX from "react-native-vector-icons/Foundation";

const sizeIconMenu = Platform.OS === "ios" ? 30 : 35;
const sizeIcon = Platform.OS === "ios" ? 30 : 35;
const sizeIconX = Platform.OS === "ios" ? 28 : 30;

function CustomDrawer({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ top: 20 }}>
        <TouchableOpacity style={stylesM.chevronLeft}>
          <Icon
            name="chevron-left"
            size={sizeIconMenu}
            color="#fff"
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
      </View>
      <View style={[stylesL.flexRow, stylesM.userMenuLeft]}>
        <View style={stylesM.userMenuLeft_title}>
          <IconUser name="user-circle-o" size={sizeIcon} color="#fff" />
        </View>
        <View style={stylesM.userMenuLeft_width}>
          <TouchableOpacity>
            <Text
              style={[
                stylesM.textColorWhite,
                stylesM.textBold,
                stylesM.fontSizeTwenty,
                stylesM.userMenuLeft_ecoLeft,
              ]}
            >
              ECOfriend001.
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[stylesM.userMenuLeft_pencil, stylesL.JustifyAlign]}
          activeOpacity={0.5}
        >
          <Image
            source={require("./../../assets/img/pencil.png")}
            style={stylesM.userMenuLeft_pencil_image}
          />
        </TouchableOpacity>
      </View>

      <View style={[stylesL.flexRow, stylesM.notiMenuLeft]}>
        <View style={stylesM.notiMenuLeft_width}>
          <Image
            style={stylesM.notiMenuLeft_icono}
            source={require("./../../assets/img/notificaciones.png")}
          />
        </View>
        <View style={stylesM.notiMenuLeft_widthTwo}>
          <TouchableOpacity>
            <Text
              style={[
                stylesM.textColorWhite,
                stylesM.textBold,
                stylesM.fontSizeTwenty,
                stylesM.notiMenuLeft_text,
              ]}
            >
              Notificaciones.
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={[stylesL.flexRow, stylesM.transactionMenuLeft]}>
        <View style={stylesM.transactionMenuLeft_width}>
          <Image
            style={stylesM.transactionMenuLeft_icono}
            source={require("./../../assets/img/ticket.png")}
          />
        </View>
        <View style={stylesM.transactionMenuLeft_widthTwo}>
          <TouchableOpacity>
            <Text
              style={[
                stylesM.textColorWhite,
                stylesM.textBold,
                stylesM.fontSizeTwenty,
                stylesM.transactionMenuLeft_text,
              ]}
            >
              Transacciones.
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={stylesM.menulogoeconomY}>
        <Image
          style={stylesM.menulogoeconomY_logo}
          source={require("./../../assets/img/ECOnomYWhite.png")}
        />
      </View>
      <TouchableOpacity
        style={[stylesL.flexRow, stylesM.closeSesionMenu]}
        activeOpacity={0.5}
      >
        <View style={[stylesM.closeSesionMenu_width, stylesL.JustifyAlign]}>
          <IconX name="x-circle" size={sizeIconX} color="#fff" />
        </View>
        <View style={[stylesM.closeSesionMenu_widthTwo, stylesL.JustifyAlign]}>
          <Text
            style={[
              stylesM.textColorWhite,
              stylesM.textBold,
              stylesM.fontSizeTwenty,
            ]}
          >
            Cerrar sesión.
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default CustomDrawer;
