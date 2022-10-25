import React from "react";
import {
  Dimensions,
  StyleSheet,
  View,
} from "react-native";

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

export default function HomeScreen({balancebox, navbar}) {
  return (
    <>

      <NavBar {...navbar}></NavBar>

      <BalanceBox {...balancebox}></BalanceBox>

      <View style={styles.optionsStyle}>

        <AddButton/>

        <RemoveButton/>

        <ExtractButton/>
      
      </View>
        
      <AssetsBox/>

      

    </>
  );
}

const styles = StyleSheet.create({
  
  optionsStyle: {
    flexDirection: "row",
    width: 386 * w,
    height: 70 * h,
    top: 70 * h,
    right: 21 * w,
  },

  

  
});
