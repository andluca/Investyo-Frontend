import React from "react";
import Header from "./components/Header";
import { View, SafeAreaView } from "react-native";
import Inputs from "./components/Inputs";
import SignInButton from "./components/SignInButton";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { useContext } from "react";
import { LoginContext } from "../../Context/LoginContext";

export default function SignInScreen({inputs, button}){
    const {doLogin} = useContext(LoginContext)

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    

    const handleLogin = async ()=>{
        return await doLogin(username, password);
    }


    
    return(

        <SafeAreaView style={styles.container}>
            <Header/>
            <Inputs password={password} setPassword={setPassword} username={username} setUsername = {setUsername} {...inputs}/>
            <SignInButton handleLogin={handleLogin}  {...button}/>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
      },
})