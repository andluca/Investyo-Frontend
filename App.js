import React, {useEffect, useState, useCallback} from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';
import mock from './src/mocks/home';

import{ StyleSheet, StatusBar, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import SignScreen from './src/screens/Login/SignScreen';
import NavBar from './src/components/NavBar';
import CalculatorScreen from './src/screens/Calculator/CalculatorScreen';
import HomeScreen from './src/screens/Home/HomeScreen';
import BalanceBox from './src/screens/Home/components/BalanceBox';

SplashScreen.preventAutoHideAsync();

export default function App() {

  let [fontsLoaded] = useFonts({
    'NixieOne': require('./assets/fonts/NixieOne.ttf'),
    'ExistenceLight': require('./assets/fonts/Existence-Light.ttf'),
    'RobotoThin': require('./assets/fonts/Roboto-Thin.ttf'),
    'RobotoMedium': require('./assets/fonts/Roboto-Medium.ttf'),
    'RobotoLight': require('./assets/fonts/Roboto-Light.ttf'),
    'RamblaRegular': require('./assets/fonts/rambla.regular.ttf'),
  });

  
  if (!fontsLoaded) {
    return(
      <AppLoading/>
    )
  }else{

    return (

      <SafeAreaView style={styles.container}>
        <StatusBar/>
          <HomeScreen/>
      </SafeAreaView>  
      
    ); 
    }      
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
  }
})


