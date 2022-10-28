import React from "react";
import Header from "./components/Header";
import Informations from "./components/Informations";
import ProfileImage from "./components/ProfileImage";



export default function ProfileScreen({headerbar, informations}){
    return(
        <>
            <Header {...headerbar}/>
            <ProfileImage/>
            <Informations {...informations}/>
        </>
    )
}

