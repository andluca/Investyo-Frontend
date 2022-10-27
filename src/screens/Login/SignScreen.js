import React from "react";
import Header from "./components/Header";
import { View } from "react-native";
import Inputs from "./components/Inputs";
import SignButton from "./components/SignButton";

export default function SignScreen({inputs, button}){
    return(
        <View>
            <Header/>
            <Inputs {...inputs}/>
            <SignButton {...button}/>
        </View>
    )
}