import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";


const Lotierror = () => {
  return (
    <LottieView
      style={stylesM.lottie}
      speed={1.8}
      source={require("../../assets/lottie/error_anim.json")}
      autoPlay
    />
  );
};
const Lotiexito = () => {
  return (
    <LottieView
      style={stylesM.lottiexito}
      source={require("../../assets/lottie/sucess.json")}
      autoPlay
      loop={false}
    />
  );
};

const Lotieqr = () => {
  return (
    <LottieView
      style={stylesM.lottieqr}
      source={require("../../assets/lottie/qrscan.json")}
      speed={1}
      autoPlay
      // loop={false}
    />
  );
};

const Lotiesplash = () => {
  return (
    <LottieView
      style={stylesM.lottiesplash}
      source={require("../../assets/lottie/spashcndr.json")}
      autoPlay
      // loop={false}
    />
  );
};

const Lotiecopy = () => {
  return (
    <LottieView
      style={stylesM.lottiecopy}
      source={require("../../assets/lottie/copy.json")}
      speed={2.5}
      autoPlay
      loop={true}
    />
  );
};

const Lotiecarga = () => {
  return (
    <LottieView
      style={stylesM.lottiecarga}
      source={require("../../assets/lottie/pantallacarga.json")}
      autoPlay
      speed={1.1}
    />
  );
};

const LotiecargaDark = () => {
  return (
    <LottieView
      style={stylesM.lottiecarga}
      source={require("../../assets/lottie/pantallacargaDark.json")}
      autoPlay
      speed={1.1}
    />
  );
};

const Lotiefallido = () => {
  return (
    <LottieView
      style={stylesM.lottiefallido}
      source={require("../../assets/lottie/tranfallida.json")}
      autoPlay
      loop={false}
      speed={0.6}
    />
  );
};

const Lotiesucces = () => {
  return (
    <LottieView
      style={stylesM.lottiesucces}
      source={require("../../assets/lottie/tranexitosa.json")}
      autoPlay={true}
      loop={false}
    />
  );
};

const LotiesuccesDark = () => {
  return (
    <LottieView
      style={stylesM.lottiesucces}
      source={require("../../assets/lottie/sucess.json")}
      autoPlay={true}
      loop={false}
    />
  );
};

const LotieGraficaCondor = () => {
  return (
    <LottieView
      style={stylesM.lottiecondorchart}
      source={require("../../assets/lottie/construction.json")}
      autoPlay={true}
      loop={false}
      speed={1}
    />
  );
};
const LotieCerrarSesion = () => {
  return (
    <LottieView
      style={stylesM.lottiecerrars}
      source={require("../../assets/lottie/cerrarsesion.json")}
      autoPlay={true}
      loop={true}
      speed={1}
    />
  );
};

const LotieEnviado = () => {
  return (
    <LottieView
      style={stylesM.lottiecerrars}
      source={require("../../assets/lottie/enviando.json")}
      autoPlay={true}
      loop={true}
    />
  );
};

const LotieInternet = () => {
  return (
    <LottieView
      style={stylesM.lottieinternet}
      source={require("../../assets/lottie/sininternet.json")}
      autoPlay={true}
      loop={true}
      speed={0.5}
    />
  );
};

export {
  Lotierror,
  Lotiexito,
  Lotieqr,
  Lotiesplash,
  Lotiecopy,
  Lotiecarga,
  LotiecargaDark,
  Lotiefallido,
  Lotiesucces,
  LotiesuccesDark,
  LotieGraficaCondor,
  LotieCerrarSesion,
  LotieEnviado,
  LotieInternet 
};