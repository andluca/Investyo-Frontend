import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Dimensions } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const w = (1 / 428) * width;
const h = (1 / 926) * height;

export default function InputPeriod() {
  const [period, setPeriod] = useState(0);
  return (
    <View style={styles.periodInputContainer}>
      <Text style={styles.label}>Período</Text>

      <View
        style={{
          flexDirection: "row",
          height: 35 * h,
          alignItems: "center",
        }}
      >
        <View style={styles.typeContainer}>
          <Text style={styles.typeContainerText}>%</Text>
        </View>
        <View style={styles.inputTaxes}>
          <TextInput
            style={[styles.input, { width: 282 * w }]}
            placeholder="0.00"
            onChangeText={(newText) => setPeriod(newText)}
            defaultValue={period}
            keyboardType="numeric"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  periodInputContainer: {
    top: 216 * h,
    left: 17 * w,
    position: "absolute",
  },

  label: {
    left: 9 * w,
    bottom: 5 * h,
    fontFamily: "RobotoLight",
    color: "#5B2FB6",
  },
  typeContainer: {
    height: 35 * h,
    width: 40 * w,
    backgroundColor: "#5B2FB6",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
  },
  typeContainerText: {
    color: "#fff",
    fontFamily: "RamblaRegular",
    fontSize: RFPercentage(2),
  },
  inputTaxes: {
    height: 35 * h,
    borderColor: "#5B2FB6",
    borderWidth: 1,
    width: 292 * w,
    borderRadius: 5,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
  },

  input: {
    left: 5 * w,
    height: 29 * h,
    top: 2 * h,
    bottom: 3 * h,
    width: 90 * w,
  },
});
