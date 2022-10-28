import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import InputInitValue from "./Inputs/InputInitValue";
import InputMonthValue from "./Inputs/InputMonthValue";
import InputPeriod from "./Inputs/InputPeriod";
import InputRate from "./Inputs/InputRate";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const w = (1 / 428) * width;
const h = (1 / 926) * height;

export default function InputBox() {
  return (
    <View style={[styles.box, { top: 70 * h }, styles.boxShadow]}>
      <View style={[styles.box, styles.boxShadow]}>
        <View style={[styles.box, styles.boxShadow]}>
          <View style={[styles.box, styles.boxShadow]}>
            <View style={[styles.box, { backgroundColor: "#fff" }]}>

              <Text style={styles.title}>Simulador de Juros Compostos</Text>

              <InputInitValue />

              <InputMonthValue />

              <InputRate />

              <InputPeriod />

              <TouchableOpacity style={[styles.button]}>
                <Text style={{ color: "#fff" }}>Calcular</Text>
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
  title: {
    position: "relative",
    left: 17 * w,
    top: 24 * h,
    fontFamily: "RobotoMedium",
    color: "#5B2FB6",
    fontSize:RFPercentage(1.82),
    height: 20,
  },

  button: {
    position: "absolute",
    left: 240 * w,
    top: 298 * h,
    width: 109 * w,
    height: 36 * h,
    backgroundColor: "#5B2FB6",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
