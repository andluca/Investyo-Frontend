import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";
import Header from "./components/Header";
import Informations from "./components/Informations";
import ProfileImage from "./components/ProfileImage";



export default function ProfileScreen({headerbar, informations}){
    return(
        <SafeAreaView style={styles.container}>
            <Header {...headerbar}/>
            <ProfileImage/>
            <Informations {...informations}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white'
    }
})

