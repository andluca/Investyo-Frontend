import React from "react";
import { StyleSheet, Text, Dimensions, View } from "react-native";
import SvgComponent from "../../../components/IconSvg";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const w = 1/428 * width;
const h = 1/926 * height;

export default function Main({title, homeicon}){
    return (
            <>
                
                    <SvgComponent style={styles.icon}/>          
                    <Text style={styles.title}>{title}</Text>
            </>
    )
}

const styles = StyleSheet.create({

    icon:{
        marginTop: 221 * h, 

    },
    title:{
        
        fontFamily: 'RobotoThin',
        fontSize: RFPercentage(5.6),
        color: '#500C86',
        marginTop: 10*h
    },


}
)