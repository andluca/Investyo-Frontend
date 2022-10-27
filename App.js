import React, {useEffect, useState, useCallback} from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { home, calculator, init, signIn, signUp } from './src/mocks/mock';

import{ StyleSheet, StatusBar, Text, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import HeaderBar from './src/components/HeaderBar';
import CalculatorScreen from './src/screens/Calculator/CalculatorScreen';
import HomeScreen from './src/screens/Home/HomeScreen';
import { ScrollView } from 'react-native';
import InitialScreen from './src/screens/Initial/InitialScreen';
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


