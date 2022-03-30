import {
  StyleSheet,
  Platform,
  Dimensions,
  StatusBar,
  Appearance,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const fontSizeTwelveIos = Platform.OS === "ios" ? 8.5 : 10;

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
    fontSize: RFValue(fontSizeTwelveIos),
  },

  fontSizeFourteen: {
    fontSize: RFValue(12),
  },

  fontSizeSixteen: {
    fontSize: RFValue(13),
  },

  fontSizeEighteen:{
    fontSize:RFValue(15)
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
    top: RFValue(535),
  },
  logoeconomYTwo: {
    width: RFValue(292),
    height: RFValue(293),
    marginTop: RFValue(120),
    resizeMode: "contain",
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
    // bottom: RFValue(66.5),
    top: RFValue(593),
  },

   

  boxLogoSmall:{
    position: "absolute",
    top:RFValue(41), 
    right: RFValue(16.5),
  },

  goBack: {
    position: "absolute",
    marginTop:RFValue(37),
    left:RFValue(5),
    zIndex:3,
    width:RFValue(42),
    height:RFValue(42)
  },

  boxTitle:{
    width:RFValue(305),
    height:RFValue(77),
    marginTop:RFValue(88),
  },

  boxTitle_title:{
    height:RFValue(22),
    marginLeft:RFValue(21),
  },

  boxTitle_txt:{
    width:RFValue(263),
    marginTop:RFValue(2.5),
    marginLeft:RFValue(21),
  },

  boxTitleInput:{
    width:RFValue(305),
    height:RFValue(13),
    top:RFValue(49),
    zIndex:2,

  },

  boxTitleInput_titleInput:{
    width:RFValue(41),  
    marginLeft:RFValue(11),
    height:'100%'
  },



  // titleInput:{
  //   width:RFValue(41),
  //   height:RFValue(13),
  //   position: "absolute",
  //   top:RFValue(201),
  //   zIndex:2,
  //   left:RFValue(33),
  // },

  boxTitleInput_titleInput_txt:{

  },

  boxInput:{
    borderColor:'white',
    borderWidth:2,
    width: RFValue(305),
    height:RFValue(47),
    marginTop:RFValue(42),
    borderRadius:4,
    position: "relative",
  },

  boxInput_txt:{
    width:'85%'
  },

  inputTxt:{
    padding:RFValue(13),
  },

  boxInput_icon:{
    width:'15%',
  },

  validation:{
    maxWidth: RFValue(305),
    height:RFValue(17),
    marginTop:RFValue(12.5),
  },

  validation_Remember:{
    maxWidth: '50%',    

  },

  validation_forget:{
    width: '50%',
  }


  //Fin Login
});
