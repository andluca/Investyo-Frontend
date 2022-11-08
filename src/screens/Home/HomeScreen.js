import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Animated, TouchableOpacity, TextInput } from "react-native";
import { Dimensions, StyleSheet, View, SafeAreaView, Text } from "react-native";
import HeaderBar, { mode } from "../../components/HeaderBar";
import NavBar from "../../components/NavBar";
import { LoginContext } from "../../Context/LoginContext";
import AddButton from "./components/AddButton";
import AssetsBox from "./components/AssetsBox";
import BalanceBox from "./components/BalanceBox";
import ExtractButton from "./components/ExtractButton";
import RemoveButton from "./components/RemoveButton";
import SearchAssets from "./components/SearchAssets";
import Modal from "react-native-modalbox";
import { RFPercentage } from "react-native-responsive-fontsize";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const w = (1 / 428) * width;
const h = (1 / 926) * height;

export default function HomeScreen({ balancebox, headerbar }) {
  const { getProfileWallet, performOperationSell, performOperationBuy } = useContext(LoginContext);
  const [balance, setBalance] = useState(0);
  const [symbol, setSymbol] = useState('');
  const [quantity, setQuantity] = useState(0);
  
  const removeRef = useRef();
  const addRef = useRef();
  var logged = true;

  

  // const refreshScreen = () => {
  //   const initApp = async () => {
  //     try {
  //       var balanceeffect = await getProfileWallet();
  //       const balanceValue = balanceeffect.balance;
  //       setBalance(balanceValue);
  //     } catch (error) {
  //       logged=false;
  //       console.log(logged)
  //     }
  //   };

  //   initApp();

  //   if (logged) {
  //     console.log(logged);
  //     setTimeout(refreshScreen, 5000);
  //   }
  // };

  // useEffect(() => {
  //   setTimeout(() => {
  //     refreshScreen();
  //   }, 5000);
  // }, []);

  const sellAsset = async (symbol, quantity) =>{
    performOperationSell(symbol, quantity);
  }
  const buyAsset = async(symbol, quantity) =>{
    await performOperationBuy(symbol, quantity);
  }

  const navY = mode.interpolate({
    inputRange: [0, 1],

    outputRange: [-90, 54],
  });

  const boxY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [54, 155],
  });

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar {...headerbar}></HeaderBar>

      <Animated.View style={{ position: "absolute", top: navY }}>
        <NavBar />
      </Animated.View>

      <Animated.View style={{ position: "absolute", top: boxY }}>
        <BalanceBox setBalance={setBalance} balance={balance} {...balancebox} />

        <View style={[styles.optionsStyle]}>
          <AddButton addRef={addRef}/>

          <RemoveButton removeRef ={removeRef}/>

          <ExtractButton />
        </View>

        <View style={{ position: "absolute", top: 270 * h }}>
          <AssetsBox />
        </View>
      </Animated.View>
      <Modal
        swipeToClose={false}
        backdrop={true}
        position="center"
        ref={removeRef}
        backdropPressToClose={true}
        style={[
          {height: 300 * h,
            width: 380 * w,
            bottom: 100 * h,
            borderRadius: 5,
            backgroundColor: "#1C0632",
          },
          { elevation: 100, shadowColor: "#000", shadowOpacity: 2 },
        ]}
      >
        <TouchableOpacity
          onPress={() => {
            removeRef.current.close();
          }}
        >
          <View
          style={[
            {
              width: 13 * h,
              height: 13 * h,
              borderLeftWidth: 2,
              borderTopWidth: 2,
              borderColor: "#fff",
              rotation: 225,
              position: "absolute",
              top: 15 * h,
              left: 340 * w,
            },
          ]}
        ></View>
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: "RobotoLight",
            fontSize: RFPercentage(2.2),
            color: "#fff",
            textShadowColor: "#fff",
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 3,
            left: 20 * w,
            top: 45 * h,
          }}
        >
          Insira o ticket da ação a ser vendida:
        </Text>
        <TextInput
          style={{
            width: 300 * w,
            backgroundColor: "#fff",
            height: 40 * h,
            top: 40 * h,
            left: 20 * w,
            borderRadius: 5,
            fontFamily: "RobotoLight",
          }}
          onChangeText={(newText) => setSymbol(newText)}
          value={symbol}
        ></TextInput>
        <Text
          style={{
            fontFamily: "RobotoLight",
            fontSize: RFPercentage(2.2),
            color: "#fff",
            textShadowColor: "#fff",
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 3,
            left: 20 * w,
            top: 55 * h,
          }}
        >
          Insira a quantidade desejada:
        </Text>
        <TextInput
          style={{
            width: 300 * w,
            backgroundColor: "#fff",
            height: 40 * h,
            top: 70 * h,
            left: 20 * w,
            borderRadius: 5,
            fontFamily: "RobotoLight",
          }}
          onChangeText={(newText) => setQuantity(newText)}
          value={quantity}
          keyboardType={"numeric"}
        ></TextInput>

        <TouchableOpacity
        onPress={async()=>{
          await sellAsset(symbol, quantity)
        }}
          style={[
            {
              top: 100 * h,
              left: 250 * w,
              backgroundColor: "#5B2FB6",
              width: 100 * w,
              height: 40 * h,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
            },
            { elevation: 3, shadowColor: "#fff", shadowOpacity: 1 },
          ]}
        >
          <Text
            style={{
              color: "#fff",
              textShadowColor: "#fff",
              textShadowRadius: 3,
              textShadowOffset: { width: -1, height: 1 },
            }}
          >
            Vender
          </Text>
        </TouchableOpacity>
      </Modal>
      <Modal
        swipeToClose={false}
        backdrop={true}
        position="center"
        ref={addRef}
        style={[
          {
            height: 300 * h,
            width: 380 * w,
            bottom: 100 * h,
            borderRadius: 5,
            backgroundColor: "#1C0632",
          },
          { elevation: 100, shadowColor: "#000", shadowOpacity: 2 },
        ]}
      >
        <TouchableOpacity onPress={()=>{
          addRef.current.close();
        }}>
        <View
          style={[
            {
              width: 13 * h,
              height: 13 * h,
              borderLeftWidth: 2,
              borderTopWidth: 2,
              borderColor: "#fff",
              rotation: 225,
              position: "absolute",
              top: 15 * h,
              left: 340 * w,
            },
          ]}
        ></View>
        </TouchableOpacity>

        <Text
          style={{
            fontFamily: "RobotoLight",
            fontSize: RFPercentage(2.2),
            color: "#fff",
            textShadowColor: "#fff",
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 3,
            left: 20 * w,
            top: 35 * h,
          }}
        >
          Insira o ticket da ação a ser comprada:
        </Text>
        <TextInput
          style={{
            width: 300 * w,
            backgroundColor: "#fff",
            height: 40 * h,
            top: 50 * h,
            left: 20 * w,
            borderRadius: 5,
            fontFamily: "RobotoLight",
          }}
          onChangeText={(newText) => setSymbol(newText)}
          value={symbol}
        ></TextInput>
        <Text
          style={{
            fontFamily: "RobotoLight",
            fontSize: RFPercentage(2.2),
            color: "#fff",
            textShadowColor: "#fff",
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 3,
            left: 20 * w,
            top: 65 * h,
          }}
        >
          Insira a quantidade desejada:
        </Text>
        <TextInput
          style={{
            width: 300 * w,
            backgroundColor: "#fff",
            height: 40 * h,
            top: 80 * h,
            left: 20 * w,
            borderRadius: 5,
            fontFamily: "RobotoLight",
          }}
          onChangeText={(newText) => setQuantity(newText)}
          value={quantity}
          keyboardType={"numeric"}
        ></TextInput>

        <TouchableOpacity
          onPress={async()=>{
            await buyAsset(symbol, quantity);
            addRef.current.close();
          }}

          style={[
            {
              top: 100 * h,
              left: 250 * w,
              backgroundColor: "#5B2FB6",
              width: 100 * w,
              height: 40 * h,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
            },
            { elevation: 3, shadowColor: "#fff", shadowOpacity: 1 },
          ]}
        >
          <Text
            style={{
              color: "#fff",
              textShadowColor: "#fff",
              textShadowRadius: 3,
              textShadowOffset: { width: -1, height: 1 },
            }}
          >
            Adicionar
          </Text>
        </TouchableOpacity>
      </Modal>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  optionsStyle: {
    position: "absolute",
    flexDirection: "row",
    width: 386 * w,
    height: 70 * h,
    top: 190 * h,
    right: 21 * w,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
