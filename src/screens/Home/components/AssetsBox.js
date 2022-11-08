import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const w = (1 / 428) * width;
const h = (1 / 926) * height;

export default function AssetsBox() {
  const navigation = useNavigation()
  return (
    <View style={[styles.boxDefinition, styles.boxShadow]}>
      <View style={[styles.boxDefinition, styles.boxShadow]}>
        <View style={[styles.boxDefinition, styles.boxShadow]}>
          <View
            style={[
              styles.boxDefinition,
              styles.boxShadow,
              { backgroundColor: "#fff" },
            ]}
          >
            <TouchableOpacity onPress={()=>{
              navigation.navigate("Assets")
            }}>
            <View style={styles.assetBox}>
              <Text style={styles.assetLabel}>Ativos </Text>
              <Text style={styles.valueLabel}>
                R$6591.33
              </Text>
              <View
                style={{
                  position: 'absolute',
                  top:15*h,
                  left: 350*w,
                  height: 20 * h,
                  width: 20 * h,
                  borderColor: "#572BA9",
                  borderStartWidth: 2 * h,
                  borderBottomWidth: 2 * h,
                  rotation: 225,
                }}
              ></View>
            </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  boxDefinition: {
    width: 386 * w,
    height: 50 * h,
    borderRadius: 10,
  },

  boxShadow: {
    elevation: 10,
    shadowColor: "#171717",
    shadowOpacity: 1,
  },
  assetBox: {
    flexDirection: "row",
  },
  assetLabel: {
    textAlign: "center",
    textAlignVertical: "center",
    fontFamily: "RobotoLight",
    fontSize: RFPercentage(3),
    color: "#572BA9",
    width: 120 * w,
    height: 50 * h,
    borderRightColor: "#572BA9",
    borderRightWidth: 2,
  },
  valueLabel: {
    fontSize: RFPercentage(3),
    fontFamily: "RamblaRegular",
    color: "#572BA9",
    height: 50 * h,
    textAlignVertical: "center",
    marginHorizontal: 10 * w,
  },
});
