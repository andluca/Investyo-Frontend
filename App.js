import React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  InitScreenX,
  SignUpScreenX,
  SignInScreenX,
  HomeScreenX,
  CalculatorScreenX,
  VideoScreenX,
  PlayerScrennX,
  ExtractScreenX,
  AssetsScreenX,
} from "./src/components/Index";
import { LoginContext, LoginContextProvider } from "./src/Context/LoginContext";

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    NixieOne: require("./assets/fonts/NixieOne.ttf"),
    ExistenceLight: require("./assets/fonts/Existence-Light.ttf"),
    RobotoThin: require("./assets/fonts/Roboto-Thin.ttf"),
    RobotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
    RobotoLight: require("./assets/fonts/Roboto-Light.ttf"),
    RamblaRegular: require("./assets/fonts/rambla.regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <LoginContextProvider>
        <NavigationContainer>
          <StatusBar />
          <Stack.Navigator initialRouteName="Initial">
            <Stack.Screen
              name="Initial"
              options={{ headerShown: false }}
              component={InitScreenX}
            />
            <Stack.Screen
              name="Home"
              options={{ headerShown: false }}
              component={HomeScreenX}
            />
            <Stack.Screen
              name="SignUp"
              options={{ headerShown: false }}
              component={SignUpScreenX}
            />
            <Stack.Screen
              name="SignIn"
              options={{ headerShown: false }}
              component={SignInScreenX}
            />
            <Stack.Screen
              name="Calculator"
              options={{ headerShown: false }}
              component={CalculatorScreenX}
            />
            <Stack.Screen
              name="Video"
              options={{ headerShown: false }}
              component={VideoScreenX}
            />
            <Stack.Screen
              name="Player"
              options={{ headerShown: false }}
              component={PlayerScrennX}
            />
            <Stack.Screen
              name="Extract"
              options={{ headerShown: false }}
              component={ExtractScreenX}
            />

            <Stack.Screen
              name="Assets"
              options={{ headerShown: false }}
              component={AssetsScreenX}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </LoginContextProvider>
    );
  }
}
