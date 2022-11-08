import React from "react";
import { View, TouchableOpacity, Text, Dimensions } from "react-native";
import { MinusSvg } from "../../../components/SvgComponents";
import { RFPercentage } from "react-native-responsive-fontsize";
import { StyleSheet, TextInput } from "react-native";
import { useRef, useState } from "react";
import Modal from "react-native-modalbox";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const w = (1 / 428) * width;
const h = (1 / 926) * height;

export default function RemoveButton({removeRef}) {
  const [symbol, setSymbol] = useState("");
  const [quantity, setQuantity] = useState("");
  return (
    <View
      style={[
        styles.buttonOptionsStyle,
        styles.buttonOptionsShadow,
        { left: 153 * w },
      ]}
    >
      <View style={[styles.buttonOptionsStyle, styles.buttonOptionsShadow]}>
        <View style={[styles.buttonOptionsStyle, styles.buttonOptionsShadow]}>
          <View style={[styles.buttonOptionsStyle, styles.buttonOptionsShadow]}>
            <TouchableOpacity onPress={()=>{
              removeRef.current.open();
            }} style={styles.removeAssetStyle}>
              <MinusSvg style={styles.svgOptions} />

              <View style={{ left: 11 * w }}>
                <Text style={styles.textOptions}>Remover Ativo</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      
    </View>
  );
}
const styles = StyleSheet.create({
  removeAssetStyle: {
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
    textAlign: "left",
    width: 60 * w,
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
});
