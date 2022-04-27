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
    TextInput
} from "react-native";
import BarStatus from "../components/BarStatus";
import React, {useState} from "react";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/Entypo";
import IconUser from "react-native-vector-icons/FontAwesome";
import IconDown from "react-native-vector-icons/SimpleLineIcons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


const sizeIcon = Platform.OS === "ios" ? 30 : 35;
const sizeIconUser = Platform.OS === "ios" ? 22 : 25;
  
  const EditProfile = ({ navigation }: { navigation: any }) => {
    

    //active textinput style
    const [stateUser,setStateUser]= useState({isFocused: false})
    const handleFocusUser = () => setStateUser({isFocused: true})
    const handleBlurUser = () => setStateUser({isFocused: false})

    const [stateEmail,setStateEmail]= useState({isFocused: false})
    const handleFocusEmail = () => setStateEmail({isFocused: true})
    const handleBlurEmail = () => setStateEmail({isFocused: false})

    const [statePass,setStatePass]= useState({isFocused: false})
    const handleFocusPass = () => setStatePass({isFocused: true})
    const handleBlurPass = () => setStatePass({isFocused: false})
    
    return (
      <LinearGradient
        colors={["#38AA35", "#1F5326"]}
        style={stylesB.linear}
        start={{ x: 0, y: 1.6 }}
        end={{ x: 0, y: 0 }}
      >
        <SafeAreaView style={stylesB.body}>
          <BarStatus />
          <KeyboardAwareScrollView
            resetScrollToCoords={{ x: 0, y: 0 }}
            contentContainerStyle={[
              stylesB.completo,
              stylesO.completo__flexGrow,
            ]}
            scrollEnabled
            enableOnAndroid={true}
          >
            <TouchableOpacity
              activeOpacity={0.5}
              style={[
                stylesL.JustifyAlign,
                stylesM.goBack,
                stylesO.goBack__top,
              ]}
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
                Editar perfil.
              </Text>
            </View>

            <View
              style={[
                stylesM.boxSubTitlePrincipal,
                stylesO.boxSubTitlePrincipal__top,
              ]}
            >
              <Image
                style={[stylesM.boxSubTitlePrincipal_img]}
                source={require("./../../assets/img/economY.png")}
              />
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
                  stylesO.boxWidth__height,
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
                      style={[
                        stylesM.boxHistory_iconLeft,
                        stylesL.JustifyAlign,
                      ]}
                    >
                      <IconUser
                        name="user-circle-o"
                        size={sizeIconUser}
                        color="#fff"
                      />
                    </View>

                    <View style={[stylesM.boxHistory_txt, stylesL.Justify]}>
                      <TextInput
                        style={[
                          stylesM.textColorWhite,
                          stylesM.fontSizeEighteen,
                          stylesM.textMedium,
                          {
                            borderBottomColor: stateUser.isFocused
                              ? "white"
                              : "#1F5326",
                            borderBottomWidth: 1,
                            padding: 0,
                          },
                        ]}
                        onFocus={handleFocusUser}
                        onBlur={handleBlurUser}
                      >
                        Eco Friend 001
                      </TextInput>
                    </View>

                    <TouchableOpacity
                      activeOpacity={0.5}
                      style={[
                        stylesM.boxHistory_iconRight,
                        stylesL.JustifyAlign,
                      ]}
                    >
                      <Image
                        source={require("./../../assets/img/pencil.png")}
                        style={stylesM.userMenuLeft_pencil_image}
                      />
                    </TouchableOpacity>
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
                      style={[
                        stylesO.boxHistory_txt__width,
                        stylesL.Justify,
                        stylesM.inputTxtPadding,
                      ]}
                    >
                      <TextInput
                        style={[
                          stylesM.textColorWhite,
                          stylesM.fontSizeEighteen,
                          stylesM.textMedium,
                          {
                            borderBottomColor: stateEmail.isFocused
                              ? "white"
                              : "#1F5326",
                            borderBottomWidth: 1,
                            padding: 0,
                          },
                        ]}
                        onFocus={handleFocusEmail}
                        onBlur={handleBlurEmail}
                      >
                        ecofriend001@gmail.com
                      </TextInput>
                    </View>

                    <TouchableOpacity
                      activeOpacity={0.5}
                      style={[
                        stylesM.boxHistory_iconRight,
                        stylesL.JustifyAlign,
                      ]}
                    >
                      <Image
                        source={require("./../../assets/img/pencil.png")}
                        style={stylesM.userMenuLeft_pencil_image}
                      />
                    </TouchableOpacity>
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
                      style={[
                        stylesO.boxHistory_txt__width,
                        stylesL.Justify,
                        stylesM.inputTxtPadding,
                        stylesL.flexColumn
                      ]}
                    > 
                      <Text
                        style={[
                          stylesM.textColorWhite,
                          stylesM.fontSizeEighteen,
                          stylesM.textMedium,
                          {
                            fontSize: statePass.isFocused
                              ? 15
                              : 18,
                          }
                        ]}
                      >
                        Cambiar contraseña
                      </Text>
                      <TextInput
                        style={[
                          stylesM.textColorWhite,
                          stylesM.fontSizeEighteen,
                          stylesM.textMedium,
                          {
                            fontSize: statePass.isFocused
                              ? 25
                              : 17,
                            borderBottomColor: statePass.isFocused
                              ? "white"
                              : "transparent",

                            borderBottomWidth: 1,
                            padding: 0,
                          },
                        ]}
                        onFocus={handleFocusPass}
                        onBlur={handleBlurPass}
                      >
                        ********
                      </TextInput>
                    </View>

                    <TouchableOpacity
                      activeOpacity={0.5}
                      style={[
                        stylesM.boxHistory_iconRight,
                        stylesL.JustifyAlign,
                      ]}
                    >
                      <Image
                        source={require("./../../assets/img/pencil.png")}
                        style={stylesM.userMenuLeft_pencil_image}
                      />
                    </TouchableOpacity>
                  </View>

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
                      style={[
                        stylesO.boxHistory_txt__width,
                        stylesL.Justify,
                        stylesM.inputTxtPadding,
                      ]}
                    >
                      <Text
                        style={[
                          stylesM.textColorWhite,
                          stylesM.fontSizeEighteen,
                          stylesM.textMedium,
                        ]}
                      >
                        Exportar llave privada
                      </Text>
                    </View>

                    <View
                      style={[
                        stylesM.boxHistory_iconRight,
                        stylesL.JustifyAlign,
                      ]}
                    >
                      <IconDown
                        name="arrow-down-circle"
                        size={sizeIconUser}
                        color="white"
                      />
                    </View>
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </ScrollView>

            <View style={stylesM.boxButton}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={[
                  stylesM.botonGeneral,
                  stylesM.widthRectangle,
                  stylesM.backgroundYellowGreen,
                  stylesL.JustifyAlign,
                ]}
                //   onPress={() => recoveryPass()}
              >
                <Text
                  style={[
                    stylesM.textColorDarkGreen,
                    stylesM.fontSizeTwentyEight,
                    stylesM.textBold,
                  ]}
                >
                  Guardar
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
        </SafeAreaView>
      </LinearGradient>
    );
  };
  
  export default EditProfile;
  