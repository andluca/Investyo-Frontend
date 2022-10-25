import React, { useState } from "react";
import { Dimensions, StyleSheet, TextInput, View, Text, TouchableOpacity } from "react-native";
import NavBar from "../../components/NavBar";

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const w = 1/428 * width;
const h = 1/926 * height;


export default function CalculatorScreen(){
    const [initialValue, setInitValue] = useState(0);
    const [monthValue, setMonthValue] = useState(0);
    const [interestRate, setRate] = useState(0);
    const [period, setPeriod] = useState(0);
    return(
        <View>
            <NavBar></NavBar>

            <View style={styles.box}>

                <Text style={styles.title}>Simulador de Juros Compostos</Text>

                <View style={[styles.input, {top: 64*h, left: 17*w,}]}>  
                    <Text>Valor inicial</Text>
                    <TextInput 
                    style={{height: 35*h}}
                    placeholder="R$"
                    onChangeText={newText => setInitValue(newText)}
                    defaultValue={initialValue}
                    keyboardType="numeric"/>
                </View>

                <View style={[styles.input, {top: 64*h, left: 204*w,}]}>
                    <Text>Valor Mensal</Text>
                    <TextInput 
                    style={{height: 35*h}}
                    placeholder="R$"
                    onChangeText={newText => setMonthValue(newText)}
                    defaultValue={monthValue}
                    keyboardType="numeric"/>
                </View>
                <View style={[styles.input, {top: 140*h, left: 17*w,}]}>
                    <Text>Taxa de Juros</Text>
                    <TextInput 
                    style={{height: 35*h}}
                    placeholder="%"
                    onChangeText={newText => setRate(newText)}
                    defaultValue={interestRate}
                    keyboardType="numeric"/>
                </View>  
                <View style={[styles.input, {top: 216*h, left: 17*w,}]}>
                    <Text>Período</Text>
                    <TextInput 
                    style={{height: 35*h}}
                    placeholder="%"
                    onChangeText={newText => setPeriod(newText)}
                    defaultValue={period}
                    keyboardType="numeric"/>
                </View>
                 

                <TouchableOpacity style={[styles.button, ]}><Text style={{color: "#fff"}}>Calcular</Text></TouchableOpacity> 

            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    box:{
        top: 50*h,
        position: 'relative',
        borderRadius: 10,
        width: 386*w,
        height: 353*h,
        borderWidth: 2,
        borderColor: '#000'
    },
    title:{
        position: "relative",
        left: 17*w,
        top: 24*h,
    },

    input: {
        position: "absolute",
    },

    button: {
        position: "absolute",
        left: 240*w,
        top: 298*h,
        width: 109*w,
        height: 36*h,
        backgroundColor: '#5B2FB6',
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    }
});