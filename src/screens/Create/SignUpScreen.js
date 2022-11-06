import React, {useContext, useState} from "react";
import Header from "./components/Header";
import { View, SafeAreaView } from "react-native";
import Inputs from "./components/Inputs";
import SignUpButton from "./components/SignUpButton";
import { StyleSheet } from "react-native";
import { LoginContext } from "../../Context/LoginContext";

export default function SignUpScreen({inputs, button}){

    const {doRegister} = useContext(LoginContext)

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    

    const handleRegister = async ()=>{
       return await doRegister(username, password);
    }
    return(
        <SafeAreaView style={styles.container}>
            <Header/>
            <Inputs password={password} setPassword={setPassword} username={username} setUsername = {setUsername} {...inputs}/>
            <SignUpButton handleRegister={handleRegister}  {...button}/>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
      },
})