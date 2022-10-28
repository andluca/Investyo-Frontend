import React from "react";
import { TouchableOpacity } from "react-native";

import { View, StyleSheet, Dimensions, Text } from "react-native";
import { CalculatorSvg, VideoSvg, WalletSvg } from "./SvgComponents";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const w = (1 / 428) * width;
const h = (1 / 926) * height;

export default function NavBar() {
  return (
    <View style={[styles.box, styles.boxShadow]}>
      <View style={[styles.box, styles.boxShadow]}>
        <View style={[styles.box, styles.boxShadow]}>
          <View style={styles.box}>
            <View style={[styles.boxBar, { alignItems: "flex-start" }]}>
              <TouchableOpacity>
                
                <WalletSvg />
              </TouchableOpacity>
            </View>
            <View style={[styles.boxBar, { alignItems: "center" }]}>
              <TouchableOpacity>
                <CalculatorSvg />
              </TouchableOpacity>
            </View>
            <View style={[styles.boxBar, { alignItems: "flex-end" }]}>
              <TouchableOpacity>
                
                <VideoSvg />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 386 * w,
    height: 66 * h,
    borderRadius: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  boxShadow: {
    elevation: 20,
    shadowColor: "#1C0632",
    shadowOpacity: 1,
  },

  boxBar: {
    width: 255 * h,
    height: 35 * h,
    position: "absolute",
  },
});
