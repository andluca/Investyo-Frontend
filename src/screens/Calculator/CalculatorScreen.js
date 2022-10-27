import React, { useState } from "react";
import { ScrollView } from "react-native";
import { Dimensions, StyleSheet, TextInput, View, Text, TouchableOpacity } from "react-native";
import HeaderBar from "../../components/HeaderBar";
import GraphicBox from "./components/GraphicBox";
import InputBox from "./components/InputBox";
import ListBox from "./components/ListBox"

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const w = 1/428 * width;
const h = 1/926 * height;

export default function CalculatorScreen({headerbar}){
    return(
        
        <ScrollView 
          style={{width:width, height:1241*h}} 
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={{ alignItems:'center'}}
        >
            <View>
                <HeaderBar {...headerbar}/>
                <InputBox/>
                <GraphicBox/>
                <ListBox/>
            </View>
        </ScrollView>
        
    );
}


