import React, { useState } from "react";
import { ScrollView } from "react-native";
import { Dimensions, StyleSheet, TextInput, View, Text, TouchableOpacity } from "react-native";
import NavBar from "../../components/NavBar";
import GraphicBox from "./components/GraphicBox";
import InputBox from "./components/InputBox";
import ListBox from "./components/ListBox"




export default function CalculatorScreen({navbar}){
    return(
        
        <View>
            <NavBar {...navbar}></NavBar>
            <InputBox/>
            <GraphicBox/>
            <ListBox/>
        </View>
        
    );
}


