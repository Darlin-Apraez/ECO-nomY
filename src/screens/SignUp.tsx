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
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

const sizeIcon = Platform.OS === "ios" ? 22 : 25;
const sizeIconX = Platform.OS === "ios" ? 28 : 30;

const SignUp = ({ navigation }: { navigation: any }) => {
  const [textEmail, setTextEmail] = useState("");
  const [textPass, setTextPass] = useState("");
  const [textConfirmPass, setTextConfirmPass] = useState("");
  const [check, setCheck] = useState(false);

  async function SignUp() {

    const auth = getAuth();

    if (textPass == textConfirmPass) {

      await createUserWithEmailAndPassword(auth, textEmail, textPass)
      .then(navigation.navigate("Login"))
      .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      sendEmailVerification(user);
      console.log(user.uid);
      // ...
      })
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
      });
      
    } else {
      alert("Passwords do not match")
      
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
          contentContainerStyle={[stylesB.completo, stylesO.completo__flexGrow]}
          scrollEnabled
          enableOnAndroid={true}
        >
          <TouchableOpacity
            activeOpacity={0.5}
            style={[stylesL.JustifyAlign, stylesM.goBack]}
            onPress={() => navigation.navigate("Home")}
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
                  Registro.
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
                  Regístrate para empezar a redefinir la economía por medio de
                  la sostenibilidad.
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

            <View
              style={[
                stylesM.boxTitleInput,
                stylesM.widthRectangle,
                stylesO.boxTitleInput__top,
              ]}
            >
              <View
                style={[
                  stylesM.boxTitleInput_titleInput,
                  stylesO.boxTitleInput_titleInput__width,
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
                  Contraseña
                </Text>
              </View>
            </View>
            <View
              style={[
                stylesM.boxInput,
                stylesM.radiusFour,
                stylesM.widthRectangle,
                stylesO.boxInput__top,
                stylesL.flexRow,
              ]}
            >
              <View style={[stylesM.boxInput_txt]}>
                <TextInput
                  placeholder="Escriba aquí su contraseña."
                  placeholderTextColor="#5AA85D"
                  style={[
                    stylesM.inputTxt,
                    stylesM.textColorWhite,
                    stylesM.fontSizeEighteen,
                  ]}
                  value={textPass}
                  onChangeText={(value) => setTextPass(value)}
                ></TextInput>
              </View>

              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => setTextPass("")}
                style={[stylesM.boxInput_icon, stylesL.JustifyAlign]}
              >
                <IconX name="x-circle" size={sizeIconX} color="#fff" />
              </TouchableOpacity>
            </View>

            <View
              style={[
                stylesM.boxTitleInput,
                stylesM.widthRectangle,
                stylesO.boxTitleInput__top,
              ]}
            >
              <View
                style={[
                  stylesM.boxTitleInput_titleInput,
                  stylesO.boxTitleInput_titleInput__widthConfirm,
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
                  Confirmar contraseña
                </Text>
              </View>
            </View>
            <View
              style={[
                stylesM.boxInput,
                stylesM.radiusFour,
                stylesM.widthRectangle,
                stylesO.boxInput__top,
                stylesL.flexRow,
              ]}
            >
              <View style={[stylesM.boxInput_txt]}>
                <TextInput
                  placeholder="Escriba nuevamente su contraseña."
                  placeholderTextColor="#5AA85D"
                  style={[
                    stylesM.inputTxt,
                    stylesM.textColorWhite,
                    stylesM.fontSizeEighteen,
                  ]}
                  value={textConfirmPass}
                  onChangeText={(value) => setTextConfirmPass(value)}
                ></TextInput>
              </View>

              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => setTextConfirmPass("")}
                style={[stylesM.boxInput_icon, stylesL.JustifyAlign]}
              >
                <IconX name="x-circle" size={sizeIconX} color="#fff" />
              </TouchableOpacity>
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
                onPress={() => SignUp()}
              >
                <Text
                  style={[
                    stylesM.textColorDarkGreen,
                    stylesM.fontSizeTwentyEight,
                    stylesM.textBold,
                  ]}
                >
                  Registrar
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SignUp;
