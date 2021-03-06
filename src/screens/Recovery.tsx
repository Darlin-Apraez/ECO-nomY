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
  Platform,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import BarStatus from "../components/BarStatus";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import IconX from "react-native-vector-icons/Foundation";
import IconCheck from "react-native-vector-icons/MaterialCommunityIcons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { getAuth,sendPasswordResetEmail } from "firebase/auth";


const sizeIcon = Platform.OS === "ios" ? 22 : 25;
const sizeIconX = Platform.OS === "ios" ? 28 : 30;

const Recovery = ({ navigation }: { navigation: any }) => {
const auth = getAuth();
const [textEmail, setTextEmail] = useState("");
const [msg,setMsg] = useState("");
const message = "Hemos envíado un enlace a tu correo electrónico para reestablecer tu contraseña."

  
  async function recoveryPass() {
    if (textEmail != "") {
        await sendPasswordResetEmail(auth,textEmail)
        .then(()=>{
          setMsg(message)
        })
        .catch((error)=>{
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          if (errorMessage == "Firebase: Error (auth/invalid-email).") {
            alert("Formato de correo inválido")
          }
          if (errorMessage == "Firebase: Error (auth/user-not-found).") {
            alert("Cuenta no registrada") 
          }
        })
      } 
      else {
        alert("Ingresa un correo electronico") 
        }
    
    }
  

  return (
    <LinearGradient
      colors={["#38AA35", "#1F5326"]}
      style={stylesB.linear}
      start={{ x: 0, y: 1.6 }}
      end={{ x: 0, y: 0 }}
    >
      <BarStatus />
      <SafeAreaView style={stylesB.body}>
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
            style={[stylesL.JustifyAlign, stylesM.goBack]}
            onPress={() => navigation.goBack()}
          >
            <Icon name="chevron-left" size={sizeIcon} color="#fff" />
          </TouchableOpacity>

          <View style={stylesM.boxLogoSmall}>
            <Image
              style={stylesO.logoeconomY__small}
              source={require("./../../assets/img/ecoSmall.png")}
            />
          </View>
          <ScrollView
            contentContainerStyle={{ flex: 2 }}
            horizontal={false}
            showsVerticalScrollIndicator={false}
          >
            <View style={[stylesM.boxTitle, stylesM.widthRectangle]}>
              <View style={[stylesM.boxTitle_title]}>
                <Text
                  style={[
                    stylesM.textBold,
                    stylesM.fontSizeTwentyTwo,
                    stylesM.textColorWhite,
                  ]}
                >
                  Reestablecer contraseña.
                </Text>
              </View>
              <View style={[stylesM.boxTitle_txt, stylesO.boxTitle_txt__top]}>
                <Text
                  style={[
                    stylesM.textLight,
                    stylesM.fontSizeEighteen,
                    stylesM.textColorWhite,
                  ]}
                >
                  Ingresa tu correo electrónico para reestablecer tu
                  contraseña.
                </Text>
              </View>
            </View>

            <View style={[stylesM.boxTitleInput, stylesM.widthRectangle]}>
              <View
                style={[
                  stylesM.boxTitleInput_titleInput,
                  stylesM.backgroundWhite,
                  stylesL.JustifyAlign,
                ]}
              >
                <Text
                  style={[
                    stylesM.boxTitleInput_titleInput_txt,
                    stylesM.fontSizeTwelve,
                    stylesM.textBold,
                    stylesM.textColorDarkGreen,
                  ]}
                >
                  Correo
                </Text>
              </View>
            </View>
            <View
              style={[
                stylesM.boxInput,
                stylesM.radiusFour,
                stylesM.widthRectangle,
                stylesL.flexRow,
              ]}
            >
              <View style={[stylesM.boxInput_txt]}>
                <TextInput
                  placeholder="Escriba aquí su correo electrónico."
                  placeholderTextColor="#5AA85D"
                  style={[
                    stylesM.inputTxt,
                    stylesM.textColorWhite,
                    stylesM.fontSizeEighteen,
                  ]}
                  value={textEmail}
                  onChangeText={(value) => setTextEmail(value)}
                ></TextInput>
              </View>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => setTextEmail("")}
                style={[stylesM.boxInput_icon, stylesL.JustifyAlign]}
              >
                <IconX name="x-circle" size={sizeIconX} color="#fff" />
              </TouchableOpacity>
            </View>

            <View style={[stylesM.boxTitle_txt, stylesO.boxTitle_txt__top]}>
              <Text
                style={[
                  stylesM.fontSizeSixteen,
                  stylesM.textColorWhiteMedium,
                ]}
              >
                {msg}
              </Text>
            </View>

            <View style={stylesM.boxButton}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={[
                  stylesM.botonGeneral,
                  stylesM.widthRectangle,
                  stylesM.backgroundYellowGreen,
                  stylesL.JustifyAlign,
                ]}
                  onPress={() => recoveryPass()}
                
              >
                <Text
                  style={[
                    stylesM.textColorDarkGreen,
                    stylesM.fontSizeTwentyEight,
                    stylesM.textBold,
                  ]}
                >
                  Enviar correo
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Recovery;


