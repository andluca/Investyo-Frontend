import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { View, Dimensions, Text } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { BackSvg } from "../../../components/SvgComponents";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const w = (1 / 428) * width;
const h = (1 / 926) * height;

export default function Header({title}){
    return(
        <View style={styles.header}>
            <TouchableOpacity>
                <BackSvg/>
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        top: 24*h,
        width: 380*w,
        height: 24*h,
        flexDirection: 'row'
    },

    title:{
        left: 142*w,
        fontFamily: 'RobotoLight',
        fontSize: RFPercentage(2),
        color: '#5B2FB6'
    }
})