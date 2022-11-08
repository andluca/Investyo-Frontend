import React from "react";
import { View, TouchableOpacity, Text, Dimensions, Alert } from "react-native";
import { CancelWhiteSvg, PlusSvg } from "../../../components/SvgComponents";
import { RFPercentage } from "react-native-responsive-fontsize";
import { StyleSheet } from "react-native";
import Modal from "react-native-modalbox";
import { useRef } from "react";
import { TextInput } from "react-native";
import { useState } from "react";
import { useContext } from "react";
import { LoginContext } from "../../../Context/LoginContext";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const w = (1 / 428) * width;
const h = (1 / 926) * height;

export default function AddButton({addRef}) {
  // const {performOperationBuy} = useContext(LoginContext);


  const [symbol, setSymbol] = useState("");
  const [quantity, setQuantity] = useState("");
  

  // const buyAsset = async(symbol, quantity) =>{
  //   await performOperationBuy(symbol, quantity);
  // }
  return (
    <View>
      <View
        style={[
          styles.buttonOptionsStyle,
          styles.buttonOptionsShadow,
          { left: 21 * w },
        ]}
      >
        <View style={[styles.buttonOptionsStyle, styles.buttonOptionsShadow]}>
          <View style={[styles.buttonOptionsStyle, styles.buttonOptionsShadow]}>
            <View
              style={[styles.buttonOptionsStyle, styles.buttonOptionsShadow]}
            >
              <TouchableOpacity
                onPress={() => {
                  addRef.current.open();
                }}
                style={styles.addAssetStyle}
              >
                <PlusSvg style={styles.svgOptions} />

                <View style={{ left: 11 * w }}>
                  <Text style={styles.textOptions}>Adicionar Ativo</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      
      
    </View>
  );
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
