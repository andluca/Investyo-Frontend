import React from "react";
import { init, home, calculator, signIn, signUp, profile, video } from "../mocks/mock";
import InitialScreen from "../screens/Initial/InitialScreen";
import SignUpScreen from "../screens/Create/SignUpScreen";
import SignInScreen from "../screens/Login/SignInScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import CalculatorScreen from "../screens/Calculator/CalculatorScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import VideosScreen from "../screens/Video/VideosScreen";
import PlayerScreen from "../screens/Video/PlayerScreen";

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
  return <HomeScreen {...home} />;
};

const CalculatorScreenX = () => {
  return <CalculatorScreen {...calculator} />;
};

const ProfileScreenX = () => {
  return <ProfileScreen {...profile} />;
};

const VideoScreenX = ()=>{
  return <VideosScreen {...video}/>
}

const PlayerScrennX = ({route})=>{
  const {id, title} = route.params;
  return <PlayerScreen title={title} id={id}/>
}

export {
  InitScreenX,
  SignUpScreenX,
  SignInScreenX,
  HomeScreenX,
  CalculatorScreenX,
  ProfileScreenX,
  VideoScreenX,
  PlayerScrennX
};
