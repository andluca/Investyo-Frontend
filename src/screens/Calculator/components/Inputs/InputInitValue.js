import React, {useState} from "react";
import { View, Text, TextInput, StyleSheet, Dimensions} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const w = (1 / 428) * width;
const h = (1 / 926) * height;

export default function InputInitValue() {

    const [initialValue, setInitValue] = useState(0);

  return (
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
  );
}

const styles = StyleSheet.create({
    
  initValueInputContainer: {
    top: 64 * h,
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
  
  input: {
    left: 5 * w,
    height: 29 * h,
    top: 2 * h,
    bottom: 3 * h,
    width: 90 * w,
  },


})
