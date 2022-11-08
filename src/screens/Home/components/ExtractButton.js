import React from "react";
import { StyleSheet } from "react-native";
import { View, TouchableOpacity, Text, Dimensions } from "react-native";
import { ExtractSvg } from "../../../components/SvgComponents";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const w = (1 / 428) * width;
const h = (1 / 926) * height;

export default function ExtractButton(){
  const navigation = useNavigation();
    return(
        <View
          style={[
            styles.buttonOptionsStyle,
            styles.buttonOptionsShadow,
            { left: 285 * w },
          ]}
        >
          <View 
            style={[styles.buttonOptionsStyle, styles.buttonOptionsShadow]}
            >

            <View
              style={[styles.buttonOptionsStyle, styles.buttonOptionsShadow]}
            >
              <View
                style={[styles.buttonOptionsStyle, styles.buttonOptionsShadow]}
              >
                <TouchableOpacity onPress={()=>{
                  navigation.navigate('Extract')
                }} style={styles.extractStyle}>

                  <ExtractSvg style={styles.svgOptions} />

                  <View style={{ left: 11 * w }}>

                    <Text style={styles.textOptions}>Extrato</Text>

                  </View>

                </TouchableOpacity>

              </View>

            </View>

          </View>

        </View>

      
    )
}

const styles = StyleSheet.create({
      extractStyle: {
        width: 122 * w,
        height: 62 * h,
        backgroundColor: "#1C0632",
        position: "absolute",
        borderRadius: 15,
        flexDirection: "row",
        alignItems: "center",
      },

      svgOptions: {
        position: "relative",
        left: 18 * w,
      },

      textOptions: {
        fontSize: RFPercentage(1.41),
        color: "#fff",
        left: 18 * w,
        bottom: 6*h,
      },

      buttonOptionsStyle: {
        width: 122 * w,
        height: 62 * h,
        backgroundColor: "#1C0632",
        position: "absolute",
        borderRadius: 15,
      },
      buttonOptionsShadow: {
        elevation: 10,
        shadowColor: "#171717",
        shadowOpacity: 1,
       },
})