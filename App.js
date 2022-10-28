import React, {useEffect, useState, useCallback} from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import{ StyleSheet, StatusBar} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import NavBar from './src/components/NavBar';
import { Text } from 'react-native';

import HomeScreen from './src/screens/Home/HomeScreen'
import CalculatorScreen from './src/screens/Calculator/CalculatorScreen'
import {home, calculator, init, signIn, signUp, profile} from './src/mocks/mock'
import ProfileScreen from './src/screens/Profile/ProfileScreen';
import SignScreen from './src/screens/Login/SignScreen';

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
          <CalculatorScreen {...calculator}/>
          
        
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


