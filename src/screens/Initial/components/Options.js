import React from "react";
import {View, StyleSheet, Dimensions, Text } from "react-native";
//import { Button } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const w = 1/428 * width;
const h = 1/926 * height;

export default function Options({ sin , sup }){
const navigation = useNavigation();
    return(
            <View style={styles.buttons}>
                {/* <Button buttonStyle={styles.button1}   title={sup} onPress={()=>{
                    alert("Login");
                }}/> */}

                {/* <Button type="clear"  buttonStyle={styles.button2} titleStyle={{color:'#500C86'}}  title={sin} onPress={()=>{
                    alert("Cadastro");
                }}/> */}
                <TouchableOpacity onPress={()=>{

                    navigation.navigate('SignUp')

                }} style={styles.button1}>
                    <Text style={styles.title2}>{sup}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                    navigation.navigate('SignIn')
                }} style={styles.button2}>
                    <Text style={styles.title1}>{sin}</Text>
                </TouchableOpacity>
            </View>
    )
    
}

const styles = StyleSheet.create({
    buttons:{
        flexDirection: 'row',
        paddingTop: 750*h,
        position: 'absolute',
    },

    button1:{
        width: 176*w,
        height: 47*h,
        backgroundColor: '#500C86',
        borderRadius: 10,
        justifyContent: 'center',
        
        
    },
    button2:{
        width: 96*w,
        height: 47*h,
        justifyContent: 'flex-start',
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    title1:{
        
        
        color: '#500C86',
        fontSize: RFPercentage(2.3),
        fontFamily: 'RobotoLight',
        position: "relative",
    },
    title2:{
        
        marginLeft: 10,
        color: '#fff',
        fontSize: RFPercentage(2.2),
        fontFamily: 'RobotoMedium',
        position: 'relative',
    }
})