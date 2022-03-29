import {
  StyleSheet,
  Platform,
  Dimensions,
  StatusBar,
  Appearance,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const stylesM = StyleSheet.create({
  // =====================================================================
  // VARIABLES UNITARIAS
  // =====================================================================
  textColorWhite: {
    color: "white",
  },

  textColorDarkGreen: {
    color: "#1F5326",
  },

  textColorLimeGreen: {
    color: "#5AA85D",
  },

  textColorBrown: {
    color: "#4F2D17",
  },

  textBold: {
    fontWeight: "bold",
  },

  textLight: {
    fontWeight: "normal",
  },

  fontSizeTwelve: {
    fontSize: RFValue(10),
  },

  fontSizeFourteen: {
    fontSize: RFValue(12),
  },

  fontSizeSixteen: {
    fontSize: RFValue(13),
  },

  fontSizeTwenty: {
    fontSize: RFValue(17),
  },

  fontSizeTwentyTwo: {
    fontSize: RFValue(18),
  },

  fontSizeTwentyFour: {
    fontSize: RFValue(20),
  },

  fontSizeTwentyEight: {
    fontSize: RFValue(23),
  },

  fontSizeFortyEight: {
    fontSize: RFValue(40),
  },

  backgroundRed: {
    backgroundColor: "red",
  },

  backgroundWhite: {
    backgroundColor: "white",
  },

  backgroundYellowGreen: {
    backgroundColor: "#ABCB59",
  },

  backgroundDarkGreen: {
    backgroundColor: "#1F5326",
  },

  // =====================================================================
  // FIN VARIABLES UNITARIAS
  // =====================================================================

  //Splash
  logoeconomY: {
    height: RFValue(183),
    width: RFValue(250.6),
    marginTop: RFValue(190),
    resizeMode: "contain",
  },
  //Fin Splash
  //Home
  boxButtonIn: {
    position: "absolute",
    bottom: RFValue(127),
  },
  //FinHome

  //Login
  botonGeneral: {
    width: RFValue(305),
    height: RFValue(45),
    borderRadius: 6,
  },

  boxButton: {
    position: "absolute",
    bottom: RFValue(66.5),
  },

  logoeconomYTwo: {
    height: RFValue(183),
    width: RFValue(250.6),
    marginTop: RFValue(130),
    resizeMode: "contain",
  },
  //Fin Login
});
