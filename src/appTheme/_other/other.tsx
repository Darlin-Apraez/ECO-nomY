import {
    StyleSheet,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";


export const stylesO = StyleSheet.create({
    completo__flexGrow:{
        flexGrow: 1,
        flex:0
    },

    logoeconomY__small:{
        width: RFValue(75),
        height: RFValue(30),
        resizeMode: "contain",
    }, 

    boxTitleInput__top:{
        top:RFValue(28),
    },

    boxTitleInput_titleInput__width:{
        width:RFValue(60),
    },

    boxTitleInput_titleInput__widthConfirm:{
        width:RFValue(95),
    },

    boxInput__top:{
        marginTop:RFValue(21)
    },

    validation_Remember__icon:{
        width:'15%',
    },

    validation_Remember__txt:{
        width:'85%',
    },

    botonGeneral__WithoutShadow:{
        elevation: 0,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
    },

    boxTitle_txt__top:{
        marginTop:RFValue(30),
    },

    copyButton__top:{
        top:91
    }

    
});
