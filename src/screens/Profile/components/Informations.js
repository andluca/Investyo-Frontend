import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { View, StyleSheet, Dimensions } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { PencilSvg } from "../../../components/SvgComponents";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const w = (1 / 428) * width;
const h = (1 / 926) * height;

export default function Informations({labelName, name, labelBalanceInvested, invested, labelTotalBalance, total, experienceLevel, level}) {
  return (
    <View style={styles.containerInfo}>

      <View style={styles.nameItem}>

        <View style={styles.item}>

          <Text style={styles.label}>{labelName}</Text>

          <Text style={styles.fill}>{name}</Text>

        </View>

        <TouchableOpacity
          style={{ alignSelf: "flex-end", justifyContent: "center" }}
        >

          <PencilSvg />

        </TouchableOpacity>

      </View>

      <View style={[styles.item, { top: 35 * h }]}>

        <Text style={styles.label}>{labelBalanceInvested}</Text>

        <Text style={styles.fill}>{invested}</Text>
        
      </View>

      <View style={[styles.item, { top: 70 * h }]}>

        <Text style={styles.label}>{labelTotalBalance}</Text>

        <Text style={styles.fill}>{total}</Text>

      </View>
      <View style={[styles.item, { top: 105 * h }]}>

        <Text style={styles.label}>{experienceLevel}</Text>

        <Text style={styles.fill}>{level}</Text>

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  containerInfo: {
    width: 366 * w,
    height: 313 * h,
    alignSelf: "center",
    top: 100 * h,
    position: "relative",
  },

  nameItem: {
    flexDirection: "row",
    width: 366 * w,
  },
  item: {
    width: 342 * w,
    height: 52 * h,
    alignItems: "flex-start",
  },
  label: {
    fontSize: RFPercentage(2),
    fontFamily: "RobotoMedium",
    color: "#5B2FB6",
  },

  fill: {
    top: 12 * h,
    fontFamily: "RobotoLight",
    color: "#A7A7A7",
    fontSize: RFPercentage(1.78),
  },
});
