import React from "react";
import {
    VectorSvg,
  } from "../../../components/SvgComponents";
import { LinearGradient } from "expo-linear-gradient";
import {
    Dimensions,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
  } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const w = (1 / 428) * width;
const h = (1 / 926) * height;

export default function BalanceBox({text1}){
    return(
        <View style={[styles.boxGradient, styles.boxGradientShadow]}>
        <View
          style={[styles.boxGradientShadow, styles.boxGradient, { top: 0 }]}
        >
          <View
            style={[styles.boxGradientShadow, styles.boxGradient, { top: 0 }]}
          >
            <View
              style={[styles.boxGradientShadow, styles.boxGradient, { top: 0 }]}
            >
              <View
                style={[
                  styles.boxGradientShadow,
                  styles.boxGradient,
                  { top: 0 },
                ]}
              >
                <LinearGradient
                  colors={[
                    "#482398",
                    "#6838CC",
                    "#572BA9",
                    "#2E1163",
                    "#1C0632",
                  ]}
                  style={[styles.boxGradient, {top:0}]}
                  start={[1, 0]}
                  end={[0, 1]}
                >
                  <Text style={styles.patrimony}>{text1}</Text>

                  <View style={styles.valueContainer}>

                    <Text style={styles.coin}>R$</Text>

                    <Text style={styles.value}>258<Text style={styles.cents}>.27</Text></Text>

                    

                  </View>

                  <TouchableOpacity style={styles.typeCoin}>

                    <VectorSvg style={styles.vectorCoin}></VectorSvg>

                    <Text style={styles.titleCoin}>BRL</Text>

                  </TouchableOpacity>

                </LinearGradient>

              </View>

            </View>

          </View>

        </View>

      </View>
    )
}

const styles = StyleSheet.create({
    boxGradient: {
        width: 386 * w,
        height: 211 * h,
        borderRadius: 10,
      },
    
      boxGradientShadow: {
        elevation: 10,
        shadowColor: "#171717",
        shadowOpacity: 1,
      },
    
      patrimony: {
        left: 34 * w,
        top: 28 * h,
        color: "#fff",
        fontSize: RFPercentage(2),
        position: "relative",
        fontFamily: "RobotoMedium",
      },

      valueContainer: {
        flexDirection: "row",
        top: 54 * h,
        left: 34 * w,
        position: "relative",
        width: 140 * w,
        height: 78 * h,
      },
      coin: {
        top: 9 * h,
        fontSize: RFPercentage(2.25),
        position: "relative",
        color: "#fff",
        fontFamily: "RamblaRegular",
      },
    
      value: {
        fontSize: RFPercentage(6),
        color: "#fff",
        fontFamily: "RamblaRegular",
      },
      cents: {
        color: "#fff",
        top: 34 * h,
        fontSize: RFPercentage(2.075),
        left: -2 * w,
        fontFamily: "RamblaRegular",
      },
    
      typeCoin: {
        borderColor: "#fff",
        borderWidth: 1 * w,
        position: "relative",
        width: 78 * w,
        height: 25 * h,
        borderRadius: 5,
        top: 60 * h,
        left: 34 * w,
        justifyContent: "center",
      },
      titleCoin: {
        color: "#fff",
        fontFamily: "RobotoLight",
        left: 32 * w,
        position: "absolute",
      },
      vectorCoin: {
        left: 8 * w,
      },
})