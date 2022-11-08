import React, { useRef, useState } from "react";
import {
  MinusSvg,
  PlusSvg,
  VectorSvg,
} from "../../../components/SvgComponents";
import { LinearGradient } from "expo-linear-gradient";
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import Modal from "react-native-modalbox";
import { useContext } from "react";
import { LoginContext } from "../../../Context/LoginContext";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const w = (1 / 428) * width;
const h = (1 / 926) * height;

export default function BalanceBox({ text1, balance, setBalance}) {
  const {addBalance, withdrawBalance, getProfileWallet} = useContext(LoginContext)

  const handleBalance = async()=>{
    const balanceValue = await getProfileWallet();
    setBalance(balanceValue.balance)
  }
  const handlePlusOperation = (plusValue)=>{
    addBalance(plusValue);
  }

  const handleMinusOperation = (minusValue)=>{
    withdrawBalance(minusValue);
  }

  const [plusValue, setPlusValue] = useState(0);
  const [minusValue, setMinusValue] = useState(0);

  const elementRef = useRef();
  const minusRef = useRef();
  return (
    <View style={[styles.boxGradient, styles.boxGradientShadow]}>
      <View style={[styles.boxGradientShadow, styles.boxGradient, { top: 0 }]}>
        <View
          style={[styles.boxGradientShadow, styles.boxGradient, { top: 0 }]}
        >
          <View
            style={[styles.boxGradientShadow, styles.boxGradient, { top: 0 }]}
          >
            <View
              style={[styles.boxGradientShadow, styles.boxGradient, { top: 0 }]}
            >
              <LinearGradient
                colors={["#482398", "#6838CC", "#572BA9", "#2E1163", "#1C0632"]}
                style={[styles.boxGradient, { top: 0 }]}
                start={[1, 0]}
                end={[0, 1]}
              >
                <Text style={styles.patrimony}>{text1}</Text>

                <View style={styles.valueContainer}>
                  <Text style={styles.coin}>R$</Text>

                  <Text style={styles.value}>
                    1358.97
                  </Text>
                </View>

                <View style={{ left: 340 * w, bottom: 85 * h }}>
                  <TouchableOpacity
                    onPress={() => {
                      elementRef.current.open();
                    }}
                  >
                    <PlusSvg />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      minusRef.current.open();
                    }}
                    style={{ top: 90 * h }}
                  >
                    <MinusSvg />
                  </TouchableOpacity>
                </View>
              </LinearGradient>

              <Modal
                ref={elementRef}
                position="center"
                style={{
                  width: 300 * w,
                  height: 150 * h,
                  borderRadius: 5,
                  backgroundColor: "#fff",
                }}
              >
                <Text
                  style={{
                    top: 20 * h,
                    left: 10 * w,
                    color: "#1C0632",
                    fontFamily: "RobotoLight",
                    fontSize: RFPercentage(2),
                    textShadowColor: "#000",
                    textShadowOffset: { width: -1, height: 1 },
                    textShadowRadius: 3,
                  }}
                >
                  Insira o valor a ser adicionado:
                </Text>
                <TextInput
                  onChangeText={(newValue) => setPlusValue(newValue)}
                  value={plusValue}
                  keyboardType="numeric"
                  style={{
                    backgroundColor: "#fff",
                    top: 30 * h,
                    width: 250,
                    left: 10 * w,
                    height: 40 * h,
                    borderRadius: 5,
                    borderColor: "#1C0632",
                    borderWidth: 1,
                  }}
                />
                <TouchableOpacity
                  onPress={() => {
                    handleBalance();
                    handlePlusOperation(plusValue);
                    elementRef.current.close();
                    setPlusValue('')
                  }}
                  style={{
                    top: 45 * h,
                    left: 230 * w,
                    width: 50 * w,
                    height: 30 * h,
                    backgroundColor: "#1C0632",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 5,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "RamblaRegular",
                      fontSize: RFPercentage(2),
                      color: "#fff",
                      textShadowColor: "#fff",
                      textShadowOffset: { width: -1, height: 1 },
                      textShadowRadius: 3,
                    }}
                  >
                    OK
                  </Text>
                </TouchableOpacity>
              </Modal>

              <Modal
                ref={minusRef}
                position="center"
                style={{
                  width: 300 * w,
                  height: 150 * h,
                  borderRadius: 5,
                  backgroundColor: "#fff",
                }}
              >
                <Text
                  style={{
                    top: 20 * h,
                    left: 10 * w,
                    color: "#1C0632",
                    fontFamily: "RobotoLight",
                    fontSize: RFPercentage(2),
                    textShadowColor: "#000",
                    textShadowOffset: { width: -1, height: 1 },
                    textShadowRadius: 3,
                  }}
                >
                  Insira o valor a ser retirado:
                </Text>
                <TextInput
                  onChangeText={(newValue) => setMinusValue(newValue)}
                  value={minusValue}
                  keyboardType="numeric"
                  style={{
                    backgroundColor: "#fff",
                    top: 30 * h,
                    width: 250,
                    left: 10 * w,
                    height: 40 * h,
                    borderRadius: 5,
                    borderColor: "#1C0632",
                    borderWidth: 1,
                  }}
                />
                <TouchableOpacity
                  onPress={() => {
                    handleBalance();
                    handleMinusOperation(minusValue)
                    minusRef.current.close();
                    setMinusValue("");
                  }}
                  style={{
                    top: 45 * h,
                    left: 230 * w,
                    width: 50 * w,
                    height: 30 * h,
                    backgroundColor: "#1C0632",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 5,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "RamblaRegular",
                      fontSize: RFPercentage(2),
                      color: "#fff",
                      textShadowColor: "#fff",
                      textShadowOffset: { width: -1, height: 1 },
                      textShadowRadius: 3,
                    }}
                  >
                    OK
                  </Text>
                </TouchableOpacity>
              </Modal>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  boxGradient: {
    width: 386 * w,
    height: 171 * h,
    borderRadius: 10,
  },

  boxGradientShadow: {
    elevation: 10,
    shadowColor: "#171717",
    shadowOpacity: 1,
  },

  patrimony: {
    left: 34 * w,
    top: 28 * h,
    color: "#fff",
    fontSize: RFPercentage(2),
    position: "relative",
    fontFamily: "RobotoMedium",
  },

  valueContainer: {
    flexDirection: "row",
    top: 54 * h,
    left: 34 * w,
    position: "relative",
    width: 230 * w,
    height: 78 * h,
  },
  coin: {
    top: 9 * h,
    fontSize: RFPercentage(2.25),
    position: "relative",
    color: "#fff",
    fontFamily: "RamblaRegular",
  },

  value: {
    fontSize: RFPercentage(6),
    color: "#fff",
    fontFamily: "RamblaRegular",
    
  },

  typeCoin: {
    borderColor: "#fff",
    borderWidth: 1 * w,
    position: "relative",
    width: 78 * w,
    height: 25 * h,
    borderRadius: 5,
    top: 60 * h,
    left: 34 * w,
    justifyContent: "center",
  },
  titleCoin: {
    color: "#fff",
    fontFamily: "RobotoLight",
    left: 32 * w,
    position: "absolute",
  },
  vectorCoin: {
    left: 8 * w,
  },
});
