import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const w = (1 / 428) * width;
const h = (1 / 926) * height;

export default function ProfileImage(){
    return(
        <>
        <View style={styles.image}></View>
        </>
    )
}

const styles = StyleSheet.create({
    image:{
        width: 156,
        height: 156,
        borderColor: '#5B2FB6',
        borderWidth: 2,
        borderRadius: 100,
        top: 52*h,
        position: 'relative',
        alignSelf: 'center'
    }
})