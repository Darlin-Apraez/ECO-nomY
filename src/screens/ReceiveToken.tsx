import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";
import { View, Text, SafeAreaView} from 'react-native'
import BarStatus from "../components/BarStatus";
import React from 'react'

const ReceiveToken = () => {
  return (
    <SafeAreaView style={stylesB.body}>
      <BarStatus/>
      <View style={stylesB.completo}>
        <Text style={[stylesM.textColorWhite, stylesM. fontSizeSixteen]}>ReceiveToken</Text>
      </View>
    </SafeAreaView>
  )
}

export default ReceiveToken