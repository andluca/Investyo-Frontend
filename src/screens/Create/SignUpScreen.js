import React from "react";
import Header from "./components/Header";
import { View, SafeAreaView } from "react-native";
import Inputs from "./components/Inputs";
import SignUpButton from "./components/SignUpButton";
import { StyleSheet } from "react-native";

export default function SignUpScreen({inputs, button}){
    return(
        <SafeAreaView style={styles.container}>
            <Header/>
            <Inputs {...inputs}/>
            <SignUpButton {...button}/>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
      },
})