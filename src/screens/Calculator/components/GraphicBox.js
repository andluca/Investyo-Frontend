import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const w = 1/428 * width;
const h = 1/926 * height;

export default function GraphicBox(){
    return(
        <View style={[styles.box, { top: 100 * h }, styles.boxShadow]}>
            <View style={[styles.box, styles.boxShadow]}>
                <View style={[styles.box, styles.boxShadow]}>
                    <View style={[styles.box, styles.boxShadow]}>
                        <View style={[styles.box, {backgroundColor: "#fff"}]}>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )


}
const styles = StyleSheet.create({
    box: {
        position: "relative",
        borderRadius: 10,
        width: 386 * w,
        height: 353 * h,
      },
    
      boxShadow: {
        elevation: 10,
        shadowColor: "#171717",
        shadowOpacity: 1,
      },
})