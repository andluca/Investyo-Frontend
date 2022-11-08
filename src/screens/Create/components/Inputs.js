import React from "react";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { EyesOffSvg, EyesOnSvg } from "../../../components/SvgComponents";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const w = (1 / 428) * width;
const h = (1 / 926) * height;

export default function Inputs({
  message,
  label,
  username,
  setUsername,
  password,
  setPassword,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{message}</Text>

      <Text style={styles.labelStyle}>{label}</Text>

      <View style={styles.inputContainer}>
        {true ? (
          <View
            style={[styles.inputBox, styles.inputBoxShadow, { top: 10 * h }]}
          >
            <View
              style={[
                styles.inputBox,
                styles.inputBoxShadow,
                { backgroundColor: "#fff", alignItems: "center" },
              ]}
            >
              <TextInput
                placeholder="Usuário"
                onChangeText={(newText) => setUsername(newText)}
                value={username}
                style={[styles.inputBox, { width: 300 * w }]}
              />
            </View>
          </View>
        ) : (

          <View
            style={[styles.inputBox,styles.inputBoxShadow, { top: 10 * h }]}
          >
            <View
              style={[
                styles.inputBoxError, styles.inputBoxShadow,
                { backgroundColor: "#fff", alignItems: "center" },
              ]}
            >
              <TextInput
                placeholder="Usuário"
                onChangeText={(newText) => setUsername(newText)}
                value={username}
                style={[styles.inputBox, { width: 300 * w }]}
              />
            </View>
            <Text style={{left:8*w, top: 8*h,fontFamily:'RobotoLight', fontSize: RFPercentage(1.5), color: '#ff0000'}}>Preencha este campo</Text>
          </View>
        )}

{true ? (<View style={[styles.inputBox, styles.inputBoxShadow, { top: 55 * h }]}>
          <View
            style={[
              styles.inputBox,
              styles.inputBoxShadow,
              {
                backgroundColor: "#fff",
                alignItems: "center",
                flexDirection: "row",
              },
            ]}
          >
            <TextInput
              placeholder="Senha"
              onChangeText={(newText) => setPassword(newText)}
              value={password}
              style={[styles.inputBox, { width: 265 * w, left: 13 * w }]}
            />
            <TouchableOpacity style={{ left: 12 * w }}>
              <EyesOffSvg />
            </TouchableOpacity>
          </View>
        </View>):(
          <View style={[styles.inputBox,styles.inputBoxShadow, { top: 55 * h }]}>
          <View
            style={[
              styles.inputBoxError,styles.inputBoxShadow,
              {
                backgroundColor: "#fff",
                alignItems: "center",
                flexDirection: "row",
              },
            ]}
          >
            <TextInput
              placeholder="Senha"
              onChangeText={(newText) => setPassword(newText)}
              value={password}
              style={[styles.inputBox, { width: 265 * w, left: 13 * w }]}
              secureTextEntry={true}
            />
            <TouchableOpacity style={{ left: 12 * w }}>
              <EyesOffSvg />
            </TouchableOpacity>
          </View>
          <Text style={{left:8*w, top: 8*h,fontFamily:'RobotoLight', fontSize: RFPercentage(1.5), color: '#ff0000'}}>A senha deve ter no mínimo 4 caracteres</Text>
        </View>
        )}
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: -70 * h,
    position: "relative",
  },

  headerText: {
    fontFamily: "RobotoLight",
    fontSize: RFPercentage(4),
    color: "#450B61",
    textAlign: "center",
    width: 280 * w,
    left: 74 * w,
  },

  labelStyle: {
    fontFamily: "RobotoLight",
    fontSize: RFPercentage(2),
    color: "#450B61",
    position: "relative",
    top: 10 * h,
    left: 73 * w,
  },

  inputContainer: {
    left: 51 * w,
    position: "relative",
    top: 20 * h,
  },

  inputBox: {
    width: 326 * w,
    height: 56 * h,
    borderRadius: 15,
    fontSize: RFPercentage(2.25),
    fontFamily: "RobotoLight",
  },
  inputBoxShadow: {
    elevation: 10,
    shadowColor: "#171717",
    shadowOpacity: 1,
  },

  inputBoxError: {
    width: 326 * w,
    height: 56 * h,
    borderRadius: 15,
    fontSize: RFPercentage(2.25),
    fontFamily: "RobotoLight",
    borderWidth: 1,
    borderColor: '#FF0000'
  },
});
