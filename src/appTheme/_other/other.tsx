import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const stylesO = StyleSheet.create({
  completo__flexGrow: {
    flexGrow: 1,
    flex: 0,
  },

  logoeconomY__small: {
    width: RFValue(75),
    height: RFValue(30),
    resizeMode: "contain",
  },

  boxTitleInput__top: {
    top: RFValue(28),
  },

  boxTitleInput_titleInput__width: {
    width: RFValue(60),
  },

  boxTitleInput_titleInput__widthConfirm: {
    width: RFValue(95),
  },

  boxInput__top: {
    marginTop: RFValue(21),
  },

  validation_Remember__icon: {
    width: "15%",
  },

  validation_Remember__txt: {
    width: "85%",
  },

  botonGeneral__WithoutShadow: {
    elevation: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
  },

  boxTitle_txt__top: {
    marginTop: RFValue(30),
    height:RFValue(75),
  },

  boxCopy__top: {
    top: RFValue(82),
  },

  boxImagePrincipal__top: {
    top: RFValue(35),
    right: RFValue(22),
  },

  boxWidth__height: {
    height: RFValue(235),
  },

  boxWidth__heightInfo: {
    height: RFValue(215),
    padding: RFValue(8),
  },

  boxWidth__heightMap: {
    height: RFValue(272.5),
  },

  goBack__top: {
    marginTop: RFValue(0),
  },

  boxWidth__heightHistory: {
    height: RFValue(252),
  },

  boxWidth__heightCall: {
    height: RFValue(210),
  },

  boxWidth__heightExchange: {
    height: RFValue(465),
  },

  boxHistory_logo__red: {
    width: RFValue(15),
    height: RFValue(15),
  },

  boxTitlePrincipal__bottom: {
    marginBottom: RFValue(32),
    
  },

  boxWidth__qr: {
    width: RFValue(285),
    height: RFValue(280),
  },

  botonGeneral__border: {
    borderColor: "white",
    borderWidth: 2,
    elevation: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
  },

  boxBottomQr_txt__width:{
    width:RFValue(120)
  }
});
