import React from "react";
import { View, TouchableOpacity, Text, Dimensions } from "react-native";
import { PlusSvg } from "../../../components/SvgComponents";
import { RFPercentage } from "react-native-responsive-fontsize";
import { StyleSheet } from "react-native";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const w = (1 / 428) * width;
const h = (1 / 926) * height;


export default function AddButton(){
    return(
        <View
          style={[
            styles.buttonOptionsStyle,
            styles.buttonOptionsShadow,
            { left: 21 * w },
          ]}
        >
          <View style={[styles.buttonOptionsStyle, styles.buttonOptionsShadow]}
          >
            <View
              style={[styles.buttonOptionsStyle, styles.buttonOptionsShadow]}
            >
              <View
                style={[styles.buttonOptionsStyle, styles.buttonOptionsShadow]}
              >
                <TouchableOpacity style={styles.addAssetStyle}>

                  <PlusSvg style={styles.svgOptions} />

                  <View style={{ left: 11 * w }}>

                    <Text style={styles.textOptions}>Adicionar Ativo</Text>

                  </View>

                </TouchableOpacity>

              </View>

            </View>

          </View>

        </View>
    )
}

const styles = StyleSheet.create({
      addAssetStyle: {
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
        fontSize: RFPercentage(1.2),
        color: "#fff",
        left: 20 * w,
        textAlign:'left',
        width:49*w,
        
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