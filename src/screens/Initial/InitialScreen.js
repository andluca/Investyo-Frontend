import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import Options from "./components/Options";
import Main from "./components/Main";

function InitialScreen({main, options}) {
    return(

        <SafeAreaView style={styles.container}>
            <Main {...main}/>
            <Options {...options}/>
        </SafeAreaView>   
        
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
  });

export default InitialScreen;