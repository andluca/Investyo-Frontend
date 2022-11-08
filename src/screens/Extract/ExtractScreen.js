import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Text } from "react-native";
import { FlatList } from "react-native";
import { Alert, Dimensions } from "react-native";
import { StatusBar, SafeAreaView, View } from "react-native";
import HeaderBar from "../../components/HeaderBar";
import { LoginContext } from "../../Context/LoginContext";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const w = (1 / 428) * width;
const h = (1 / 926) * height;



export default function ExtractScreen({headerbar}){
    const {getProfileExtracts} = useContext(LoginContext);
    const [extract, setExtract] = useState([])


    useEffect( ()=>{
        const makeExtract = async () =>{
            try {
                const initialExtract = await getProfileExtracts()
                setExtract(await initialExtract.data.extracts)
                console.log(initialExtract.data.extracts)
                console.log(extract)
            } catch (error) {
                Alert.alert("Não foi possível checar o extrato")
            }
        }
         makeExtract();
    },[])

    const renderItem = ({item}) =>{
        return (
            <View style={[{width: 400*w, height: 150*h, backgroundColor: '#fff', borderRadius:10, marginVertical: 10*h, marginHorizontal: 15*w}, {elevation: 10, shadowColor:'#171717', shadowOpacity: 1}]}>
                <Text style={{top:30*h, left: 20*w, fontFamily: 'RobotoLight', color: "#500C86", }}>
                    {item.type}
                </Text>
                <Text style={{top:80*h, left:20*w, fontFamily: 'RobotoLight', color: "#500C86",}}>
                    {item.issueDate}
                </Text>
                <Text style={{top:65*h, left: 320*w, fontFamily: 'RamblaRegular', color: "#500C86",}}>
                    R${item.value}
                </Text>
            </View>
        )
    }
    return(
        <SafeAreaView style={{flex:1, alignItems: 'center', backgroundColor: '#fff'}}>
            <StatusBar/>
            <HeaderBar {...headerbar}></HeaderBar>
            <View>
                <FlatList
                style={{ top: 60*h }}
                nestedScrollEnabled
                numColumns={3}
                data={extract}
                renderItem={renderItem}>
                

                </FlatList>
            </View>
        </SafeAreaView>
    )
}