import React from "react";
import { StyleSheet, SafeAreaView, StatusBar, View } from "react-native";
import Options from "./components/Options";
import Main from "./components/Main";

function SignScreen({main, options}) {
    return(
        <View style={styles.container}>
          <StatusBar></StatusBar>
            <Main {...main}/>
            <Options {...options}/>
        </View>   
        
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
  });

export default SignScreen;