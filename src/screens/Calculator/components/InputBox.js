import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
import { RFPercentage } from "react-native-responsive-fontsize";

const w = (1 / 428) * width;
const h = (1 / 926) * height;

export default function InputBox() {
  const [initialValue, setInitValue] = useState(0);
  const [monthValue, setMonthValue] = useState(0);
  const [interestRate, setRate] = useState(0);
  const [period, setPeriod] = useState(0);

  return (
    <View style={[styles.box, { top: 70 * h }, styles.boxShadow]}>
      <View style={[styles.box, styles.boxShadow]}>
        <View style={[styles.box, styles.boxShadow]}>
          <View style={[styles.box, styles.boxShadow]}>
            <View style={[styles.box, {backgroundColor: "#fff"}]}>
              <Text style={styles.title}>Simulador de Juros Compostos</Text>

              <View style={styles.initValueInputContainer}>
                <Text style={styles.label}>Valor inicial</Text>

                <View
                  style={{
                    flexDirection: "row",
                    height: 35 * h,
                    alignItems: "center",
                  }}
                >
                  <View style={styles.typeContainer}>
                    <Text style={styles.typeContainerText}>R$</Text>
                  </View>
                  <View style={styles.inputValues}>
                    <TextInput
                      style={styles.input}
                      placeholder="0.00"
                      onChangeText={(newText) => setInitValue(newText)}
                      defaultValue={initialValue}
                      keyboardType="numeric"
                    />
                  </View>
                </View>
              </View>

              <View style={styles.monthValueInputContainer}>
                <Text style={styles.label}>Valor Mensal</Text>
                <View
                  style={{
                    flexDirection: "row",
                    height: 35 * h,
                    alignItems: "center",
                  }}
                >
                  <View style={styles.typeContainer}>
                    <Text style={styles.typeContainerText}>R$</Text>
                  </View>
                  <View style={styles.inputValues}>
                    <TextInput
                      style={styles.input}
                      placeholder="0.00"
                      onChangeText={(newText) => setMonthValue(newText)}
                      defaultValue={monthValue}
                      keyboardType="numeric"
                    />
                  </View>
                </View>
              </View>

              <View style={styles.rateInputContainer}>
                <Text style={styles.label}>Taxa de Juros</Text>

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
                      onChangeText={(newText) => setRate(newText)}
                      defaultValue={interestRate}
                      keyboardType="numeric"
                    />
                  </View>
                </View>
              </View>
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

  initValueInputContainer: {
    top: 64 * h,
    left: 17 * w,
    position: "absolute",
  },

  monthValueInputContainer: {
    top: 64 * h,
    left: 204 * w,
    position: "absolute",
  },

  rateInputContainer: {
    top: 140 * h,
    left: 17 * w,
    position: "absolute",
  },

  periodInputContainer: {
    top: 216 * h,
    left: 17 * w,
    position: "absolute",
  },

  inputValues: {
    height: 35 * h,
    borderColor: "#5B2FB6",
    borderWidth: 1,
    width: 105 * w,
    borderRadius: 5,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    borderLeftColor: "#fff",
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
