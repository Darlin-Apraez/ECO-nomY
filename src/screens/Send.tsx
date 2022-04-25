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
    TextInput,
    Animated
  } from "react-native";
  import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
  import BarStatus from "../components/BarStatus";
  import React, {useState} from "react";
  import { LinearGradient } from "expo-linear-gradient";
  import Icon from "react-native-vector-icons/Entypo";
  import QRCode from "react-native-qrcode-svg";
  import IconCopy from "react-native-vector-icons/Ionicons";
  import IconPaste from "react-native-vector-icons/FontAwesome5";
import { onChange } from "react-native-reanimated";
import { sendSPL } from "../../controller";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";
  
  const sizeIcon = Platform.OS === "ios" ? 30 : 35;
  const sizeCopy = Platform.OS === "ios" ? 19 : 22;
  const windowWidth = Dimensions.get("screen").width;

const Send = ({ navigation }: { navigation: any }) => {
  const [bloqueoText , setBloqueoText] = useState (true)
  const [copiedText, setCopiedText] = useState("");
  const [toPublic, setToPublic] = useState("");
  const [amount, setAmount] = useState("");
  const [secretKey, setSecretkey] = useState("");

  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
    setCopiedText(text);
    setToPublic(text);
    setBloqueoText(false)
  };

  const userEmail = getAuth().currentUser?.email
  const idUser = getAuth().currentUser?.uid
  const dbRef = ref(getDatabase());
  get(child(dbRef, `users/${idUser}`)).then((snapshot) => {
    if (snapshot.exists()) {
       const key = snapshot.val().secret_key;
       setSecretkey(key)
    } else {
      console.log("No data available");
    }
    }).catch((error) => {
    console.error(error);
    });

async function sendEcopoint() {
  
  const transaccion = await sendSPL(
    secretKey, 
    toPublic, 
    Number(amount), 
    'ECQkERLRgPGW34P5jjLvEGy449qGjq75BinqynBNyCqp'
  );

}

  
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
          contentContainerStyle={[stylesB.completo, stylesO.completo__flexGrow]}
          scrollEnabled
          enableOnAndroid={true}
        >
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
              Enviar.
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
                stylesO.boxWidth__heightHistory,
                stylesL.flexColumn,
                stylesM.paddingHorizontalTwentySix,
              ]}
            >
              <View style={[stylesM.boxWidth_txtAmount, stylesL.JustifyAlign]}>
                <Text
                  style={[stylesM.textColorWhite, stylesM.fontSizeEighteen]}
                >
                  Cantidad
                </Text>
              </View>

              <View
                style={[
                  stylesM.boxWidth_input,
                  stylesL.JustifyAlign,
                ]}
              >
                <TextInput
                  keyboardType='numeric'
                  style={[stylesM.textColorWhite, stylesM.fontSizeOneHundredTwenty]}
                  onChangeText={(val) => setAmount(val)}
                  placeholder='0'
                  placeholderTextColor="rgba(255, 255, 255, 0.62)"
                ></TextInput>
              </View>

              <View
                style={[
                  stylesM.boxWidth_ecoPoint,
                  stylesL.JustifyAlign,
                  stylesL.flexRow,
                ]}
              >
                <View>
                  <Image
                    style={stylesM.boxEcoPoint_currency_imgSend}
                    source={require("./../../assets/img/currency.png")}
                  />
                </View>
                <View>
                  <Text
                    style={[
                      stylesM.textColorWhite,
                      stylesM.fontSizeTwentyEight,
                      stylesM.textBold,
                    ]}
                  >
                    ECOPoint
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={[stylesM.boxInputAndress]}>
            <View
              style={[
                stylesM.botonGeneral,
                stylesM.widthRectangle,
                stylesL.JustifyAlign,
                stylesO.botonGeneral__border,
                stylesL.flexRow,
              ]}
            >
              <View style={[stylesM.widthPercentageSeven]}>
                <TextInput
                  // editable = {bloqueoText}
                  onChangeText={(val) => setToPublic(val)}
                  autoCapitalize="none"
                  placeholder="Escribir dirección"
                  placeholderTextColor="rgba(255, 255, 255, 0.62)"
                  style={[
                    stylesM.textColorWhite,
                    stylesM.fontSizeTwenty,
                    stylesM.textBold,
                    stylesM.inputTxtPadding,
                    stylesM.textLight,
                  ]}
                >
                  {copiedText}
                </TextInput>
              </View>

              <View
                style={[
                  stylesM.copyButton,
                  stylesM.widthPercentageTree,
                  stylesL.flexRow,
                ]}
              >
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => fetchCopiedText()}
                  style={[stylesM.widthPercentageFive, stylesL.JustifyAlign]}
                >
                  <IconPaste name="paste" size={sizeCopy} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={[stylesM.widthPercentageFive, stylesL.JustifyAlign]}
                  onPress={() => navigation.navigate("QrReader")}
                >
                  <IconCopy
                    name="qr-code-outline"
                    size={sizeCopy}
                    color="#fff"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={[stylesM.boxButton]}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={[
                stylesM.botonGeneral,
                stylesM.widthRectangle,
                stylesM.backgroundYellowGreen,
                stylesL.JustifyAlign,
              ]}
              // onPress={() => SignUp()}
            >
              <Text
                style={[
                  stylesM.textColorDarkGreen,
                  stylesM.fontSizeTwentyEight,
                  stylesM.textBold,
                ]}
              >
                Enviar
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

export default Send