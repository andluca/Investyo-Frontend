import React from "react";
import Header from "./components/Header";
import { View, SafeAreaView } from "react-native";
import Inputs from "./components/Inputs";
import SignInButton from "./components/SignInButton";
import { StyleSheet } from "react-native";

export default function SignInScreen({inputs, button}){
    return(
        <SafeAreaView style={styles.container}>
            <Header/>
            <Inputs {...inputs}/>
            <SignInButton {...button}/>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
      },
})