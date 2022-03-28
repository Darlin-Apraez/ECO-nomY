import {
    StyleSheet,
    Platform,
    Dimensions,
} from "react-native";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("window").height;
export const stylesB = StyleSheet.create({
    //NO TOCAR PACHITO
    body: {
        height: windowHeight,
        width: windowWidth,
        flex: 1,
        backgroundColor: "#000",
    },
    completo: {
        alignItems: "center",
        flex: 1,
    },
});
