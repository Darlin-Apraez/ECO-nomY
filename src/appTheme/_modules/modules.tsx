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
  // UNITY VARIABLES
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

  fontSizeEighteen: {
    fontSize: RFValue(15),
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

  fontSizeSixtyFour:{
    fontSize: RFValue(53.5),
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

  backgroundGhostWhite:{
    backgroundColor: "#E5E6F2",
  },

  widthRectangle: {
    width: RFValue(305),
  },

  radiusFour: {
    borderRadius: 4,
  },

  radiusFive: {
    borderRadius: 5,
  },

  radiusSix: {
    borderRadius: 6,
  },

  radiusSeven: {
    borderRadius: 7,
  },

  radiusSixteen: {
    borderRadius: 16,
  },

  boxTitlePrincipal: {
    marginTop: RFValue(62),
  },

  boxSubTitlePrincipal: {
    marginTop: RFValue(38),
    marginBottom: RFValue(10)
  },

  boxWidth: {
    height: RFValue(135),
    marginTop: RFValue(15.5),
  },

  // =====================================================================
  // END UNITY VARIABLES.
  // =====================================================================

  //Splash
  logoeconomY: {
    height: RFValue(183),
    width: RFValue(250.6),
    marginTop: RFValue(190),
    resizeMode: "contain",
  },
  //End Splash

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
  //End Home

  //Login
  botonGeneral: {
    height: RFValue(45),
    borderRadius: 6,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0.2 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
  },

  boxButton: {
    position: "absolute",
    top: RFValue(593),
  },

  boxLogoSmall: {
    position: "absolute",
    top: RFValue(41),
    right: RFValue(16.5),
  },

  goBack: {
    position: "absolute",
    marginTop: RFValue(37),
    left: RFValue(5),
    zIndex: 3,
    width: RFValue(42),
    height: RFValue(42),
  },

  boxTitle: {
    height: RFValue(77),
    marginTop: RFValue(88),
  },

  boxTitle_title: {
    height: RFValue(22),
    marginLeft: RFValue(21),
  },

  boxTitle_txt: {
    width: RFValue(263),
    marginTop: RFValue(2.5),
    marginLeft: RFValue(21),
  },

  boxTitleInput: {
    height: RFValue(13),
    top: RFValue(49),
    zIndex: 2,
  },

  boxTitleInput_titleInput: {
    width: RFValue(41),
    marginLeft: RFValue(11),
    height: "100%",
  },

  boxTitleInput_titleInput_txt: {},

  boxInput: {
    borderColor: "white",
    borderWidth: 2,
    height: RFValue(47),
    marginTop: RFValue(42),
    position: "relative",
  },

  boxInput_txt: {
    width: "85%",
  },

  inputTxt: {
    padding: RFValue(13),
  },

  boxInput_icon: {
    width: "15%",
  },

  validation: {
    maxWidth: RFValue(305),
    height: RFValue(17),
    marginTop: RFValue(12.5),
  },

  validation_Remember: {
    maxWidth: "50%",
  },

  validation_forget: {
    width: "50%",
  },
  //End Login

  //Balance
  boxWelcome: {
    marginTop: RFValue(70),
  },
  boxInfo: {
    marginTop: RFValue(23.5),
    height: RFValue(111),
  },

  boxUser: {
    top: RFValue(4),
  },

  boxInfo_txt: {
    marginTop: RFValue(8),
  },

  boxCopy: {
    position: "absolute",
    paddingRight: RFValue(56),
    top: RFValue(60),
  },

  copyButton: {
    width: RFValue(21.8),
    height: RFValue(21.8),
  },

  boxEcoPoint: {
    height: RFValue(150.3),
    marginTop: RFValue(19.4),
  },

  boxEcoAffiliates: {
    height: RFValue(110.1),
    marginTop: RFValue(11),
    padding:RFValue(12)
  },

  boxEcoAffiliates_history:{
    justifyContent:'space-between'
  },

  balanceButtons: {
    marginTop: RFValue(15),
  },

  balanceButtons_icon: {
    width: "17%",
  },

  balanceButtons_icon_image: {
    height: RFValue(25),
    width: RFValue(25),
  },

  balanceButtons_txt: {
    width: "83%",
  },

  boxAmount:{
    height:'70%'
  },

  boxContributions:{
    height:'30%'
  },

  boxEcoPoint_currency_total:{
    width:'20%'
  },

  boxEcoPoint_amount:{
    width:'50%',
    paddingRight:15
  },

  boxEcoPoint_currency:{
    width:'50%',
  },

  boxEcoPoint_currency_img:{
    width:RFValue(93),
    height:RFValue(93),
    resizeMode:'contain',
  },

  boxEcoPoint_currency_contributions:{
    width:RFValue(28.5),
    height:RFValue(28.5),
    resizeMode:'contain',
  },

  boxEcoAffiliates_picture:{
    width:'18%',
    height:RFValue(52),
  },
  //End Balance

  //Lateral Menu
  chevronLeft: {
    top: RFValue(41),
    left: RFValue(16),
    width: RFValue(35),
  },

  userMenuLeft: {
    top: RFValue(80),
    left: RFValue(30),
    alignItems: "center",
    width: RFValue(215),
  },

  userMenuLeft_title: {
    width: "15%",
  },

  userMenuLeft_width: {
    width: "60%",
  },

  userMenuLeft_pencil: {
    width: "15%",
    left: RFValue(11),
  },

  userMenuLeft_pencil_image: {
    height: RFValue(45.9),
    width: RFValue(45.9),
    top: RFValue(2.6),
    resizeMode: "contain",
  },

  userMenuLeft_ecoLeft: {
    left: RFValue(11),
  },

  notiMenuLeft: {
    top: RFValue(92),
    left: RFValue(30),
    alignItems: "center",
    width: RFValue(215),
  },

  notiMenuLeft_width: {
    width: "17%",
  },

  notiMenuLeft_widthTwo: {
    width: "60%",
  },

  notiMenuLeft_icono: {
    height: RFValue(42),
    width: RFValue(42),
    left: RFValue(-5),
  },
  notiMenuLeft_text: {
    left: RFValue(8),
  },

  transactionMenuLeft: {
    top: RFValue(109),
    left: RFValue(30),
    width: RFValue(215),
  },

  transactionMenuLeft_width: {
    width: "17%",
  },

  transactionMenuLeft_icono: {
    height: RFValue(42),
    width: RFValue(42),
    left: RFValue(-5),
  },

  transactionMenuLeft_widthTwo: {
    width: "60%",
    justifyContent: "center",
  },

  transactionMenuLeft_text: {
    left: RFValue(8),
  },

  menulogoeconomY: {
    left: RFValue(30),
    bottom: RFValue(90),
    position: "absolute",
  },

  menulogoeconomY_logo: {
    height: RFValue(22),
    width: RFValue(63),
  },

  closeSesionMenu: {
    position: "absolute",
    bottom: RFValue(45),
    left: RFValue(30),
  },

  closeSesionMenu_width: {
    width: "17%",
  },

  closeSesionMenu_widthTwo: {
    width: "60%",
  },

  //End Lateral Menu

  //Sustainable Actions
  boxImagePrincipal: {
    top: RFValue(55),
    right: RFValue(38),
    position: "absolute",
  },

  boxImagePrincipal_image: {
    height: RFValue(81),
    width: RFValue(81),
    resizeMode: "contain",
  },

  boxSubTitle: {
    marginTop: 35,
  },

  //End Sustainable Actions

  //Redem
  boxImagePrincipal_imageBag: {
    height: RFValue(105),
    width: RFValue(105),
    resizeMode: "contain",
  },

  //End redem

  //Index
  boxTitlePersonal:{
    marginTop:RFValue(10),
  },

  boxBow:{
    marginTop:RFValue(5),
  },

  boxBow_image:{
    width: RFValue(136),
    height: RFValue(78),
    resizeMode: "contain",
  },

  boxCity:{
    width:RFValue(270),
    height:RFValue(185),
  },
  //End Index

  
});
