import React from "react";
import { init, home, calculator, signIn, signUp, video, extract, assets } from "../mocks/mock";
import InitialScreen from "../screens/Initial/InitialScreen";
import SignUpScreen from "../screens/Create/SignUpScreen";
import SignInScreen from "../screens/Login/SignInScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import CalculatorScreen from "../screens/Calculator/CalculatorScreen";
import VideosScreen from "../screens/Video/VideosScreen";
import PlayerScreen from "../screens/Video/PlayerScreen";
import ExtractScreen from "../screens/Extract/ExtractScreen";
import AssetsScreen from "../screens/Assets/AssetsScreen";
import { useContext } from "react";
import { LoginContext } from "../Context/LoginContext";



const InitScreenX = () => {
  

  return <InitialScreen {...init}/>;
};

const SignUpScreenX = () => {
  return <SignUpScreen {...signUp} />;
};

const SignInScreenX = () => {
  return <SignInScreen {...signIn} />;
};

const HomeScreenX = () => {

  return <HomeScreen {...home} /> 
};

const CalculatorScreenX = () => {
  return <CalculatorScreen {...calculator} />;
};

const VideoScreenX = ()=>{
  return <VideosScreen {...video}/>
}

const PlayerScrennX = ({route})=>{
  const {id, title} = route.params;
  return <PlayerScreen title={title} id={id}/>
}

const ExtractScreenX = ()=>{
  return <ExtractScreen {...extract}/>
}

const AssetsScreenX = ()=>{
  return <AssetsScreen {...assets}/>
}

export {
  InitScreenX,
  SignUpScreenX,
  SignInScreenX,
  HomeScreenX,
  CalculatorScreenX,
  VideoScreenX,
  PlayerScrennX,
  ExtractScreenX,
  AssetsScreenX
};
