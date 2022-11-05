import React, { useState, useRef } from "react";
import { Animated } from "react-native";
import {
  Dimensions,
  StyleSheet,
  View,
  SafeAreaView,
} from "react-native";
import HeaderBar, { mode } from "../../components/HeaderBar";
import NavBar from "../../components/NavBar";
import AddButton from "./components/AddButton";
import AssetsBox from "./components/AssetsBox";
import BalanceBox from "./components/BalanceBox";
import ExtractButton from "./components/ExtractButton";
import RemoveButton from "./components/RemoveButton";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const w = (1 / 428) * width;
const h = (1 / 926) * height;

export default function HomeScreen({ balancebox, headerbar }) {
  

  const navY = mode.interpolate({
    inputRange: [0, 1],

    outputRange: [-90, 54],
  });

  const boxY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [54, 140],
  });

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar {...headerbar}></HeaderBar>

      <Animated.View style={{ position: "absolute", top: navY }}>
        <NavBar />
      </Animated.View>

      <Animated.View style={{ position: "absolute", top: boxY }}>
        <BalanceBox {...balancebox} />

        <View style={[styles.optionsStyle]}>
          <AddButton />

          <RemoveButton />

          <ExtractButton />
        </View>

        <View style={{ position: "absolute", top: 310 * h }}>
          <AssetsBox />
        </View>
      </Animated.View>
      

      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  optionsStyle: {
    position: "absolute",
    flexDirection: "row",
    width: 386 * w,
    height: 70 * h,
    top: 230 * h,
    right: 21 * w,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
