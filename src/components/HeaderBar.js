import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Dimensions, StyleSheet, View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { UserSvg, AskSvg, BarSvg, } from "./SvgComponents";


const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const w = 1/428 * width;
const h = 1/926 * height;

export default function HeaderBar({title}) {
  return (
    <View>
      <View style={[styles.container, { justifyContent: "flex-start" }]}>
        <TouchableOpacity>
          <BarSvg/>
        </TouchableOpacity>
      </View>

      <View style={[styles.container, { justifyContent: "center", }]}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={[styles.container, { justifyContent: "flex-end" }]}>
        <TouchableOpacity style={{right: 19*w,}}>
           <AskSvg/>
        </TouchableOpacity>
            
        <TouchableOpacity>
          <UserSvg/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: 387 * w,
    height: 24 * h,
    marginTop: 14 * h,
    flexDirection: "row",
    alignItems: "center"
  },

  title:{
    fontFamily: 'RobotoLight',
    color: '#5B2FB6',
    fontSize: RFPercentage(1.9),
  }
});
