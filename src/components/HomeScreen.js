import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";


const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;



function HomeScreen() {
    return(
        <View style={styles.container}> 
            <View style={{alignItems: 'center'}}>
                <Image style={styles.icon} source={require('../icons/icon.png')}/>
                <Text style={styles.title}>INVESTYO</Text>
            </View>
            <View style={styles.buttons}>
                <Button buttonStyle={styles.button1}   title="Sign In" onPress={()=>{
                    alert("Login");
                }}/>
                <Button buttonStyle={styles.button2} titleStyle={{color:'#500C86'}}  title="Sign Up" onPress={()=>{
                    alert("Cadastro");
                }}/>
            </View>
        </View>
    );
};

const iconWidth = 256/428 * width;
const padIcon = 221/926 * height;
const padOptions= 200/926 * height;
const button1Width=176/428 * width;
const button2Width=96/428 * width;
const buttonHeight=47/926 * height;

const styles = StyleSheet.create({
    icon:{
        marginTop: padIcon,
        width: iconWidth,
        height: iconWidth 
    },
    title:{
        fontFamily: 'RobotoThin',
        fontSize: 44,
        color: '#500C86',
        marginTop: 10
    },

    container:{
        alignItems: 'center',
        height: '100%'
    },

    buttons:{
        flexDirection: 'row',
        paddingTop: padOptions
    },

    button1:{
        width: button1Width,
        height: buttonHeight,
        backgroundColor: '#500C86',
        borderRadius: 10,
        justifyContent: 'flex-start'
    },
    button2:{
        width: button2Width,
        height: buttonHeight,
        backgroundColor: '#ffffff',
        justifyContent: 'flex-start'
        
    }

});

export default HomeScreen;