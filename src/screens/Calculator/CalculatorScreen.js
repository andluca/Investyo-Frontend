import React, { useState } from "react";
import { ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import {
  Dimensions,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Animated, FlatList } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import HeaderBar, { mode } from "../../components/HeaderBar";
import NavBar from "../../components/NavBar";
import {
  CompoundInterestCalculate,
  ListPeriod,
} from "../../Functions/CalculatorController";

import { YAxis, XAxis } from "react-native-svg-charts";
import { LineGraphic } from "../../components/SvgComponents";

import { Line } from "../../components/chartAdds";
import * as shape from "d3-shape";
import { BarChart } from "react-native-svg-charts";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const w = (1 / 428) * width;
const h = (1 / 926) * height;

export default function CalculatorScreen({ headerbar }) {
  const [initialValue, setInitValue] = useState(0);
  const [monthValue, setMonthValue] = useState(0);
  const [interestRate, setRate] = useState(0);
  const [period, setPeriod] = useState(0);
  const [arr, setArr] = useState([]);
  const [time, setTime] = useState([]);
  const [opacity, setOpacity] = useState(0);

  const handleCalculator = () => {
    var array = CompoundInterestCalculate(
      initialValue,
      monthValue,
      interestRate,
      period
    );
    return array;
  };

  const handlePeriodArray = () => {
    var ti = ListPeriod(period);
    return ti;
  };

  const navY = mode.interpolate({
    inputRange: [0, 1],

    outputRange: [-90, 70],
  });

  const boxY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [70, 156],
  });

  const renderItem = ({item}) => {
    return (
      
      <View
        style={[{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          marginHorizontal: 5 * w,
          width: 110 * w,
          height: 50 * h,
          marginVertical: 10 * h,
          borderRadius: 10

        }, {elevation: 15, shadowColor: '#000', shadowOpacity: 2}]}
      >
        <Text
          style={{
            fontFamily: "RobotoMedium",
            fontSize: RFPercentage(1.8),
            color: "#5B2FB6",
            fontWeight: 'bold'
          }}
        >
          R${' '}{item}
        </Text>
      </View>
    );
  };

  return (
    <ScrollView
      style={{ width: width }}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ alignItems: "center", backgroundColor: "white" }}
    >
      <HeaderBar {...headerbar} />

      <Animated.View style={{ top: boxY }}>
        <View>
          <View style={[styles.box, styles.boxShadow]}>
            <View style={[styles.box, styles.boxShadow]}>
              <View style={[styles.box, styles.boxShadow]}>
                <View style={[styles.box, styles.boxShadow]}>
                  <View style={[styles.box, { backgroundColor: "#fff" }]}>
                    <Text style={styles.title}>
                      Simulador de Juros Compostos
                    </Text>

                    <View style={styles.initValueInputContainer}>
                      <Text style={styles.label}>Valor inicial</Text>

                      <View
                        style={{
                          flexDirection: "row",
                          height: 35 * h,
                          alignItems: "center",
                        }}
                      >
                        <View style={styles.typeContainer}>
                          <Text style={styles.typeContainerText}>R$</Text>
                        </View>
                        <View style={styles.inputValues}>
                          <TextInput
                            style={styles.input}
                            placeholder="0.00"
                            onChangeText={(newText) => setInitValue(newText)}
                            defaultValue={initialValue}
                            keyboardType="numeric"
                          />
                        </View>
                      </View>
                    </View>

                    <View style={styles.monthValueInputContainer}>
                      <Text style={styles.label}>Valor Mensal</Text>
                      <View
                        style={{
                          flexDirection: "row",
                          height: 35 * h,
                          alignItems: "center",
                        }}
                      >
                        <View style={styles.typeContainer}>
                          <Text style={styles.typeContainerText}>R$</Text>
                        </View>
                        <View style={styles.inputValues}>
                          <TextInput
                            style={styles.input}
                            placeholder="0.00"
                            onChangeText={(newText) => setMonthValue(newText)}
                            defaultValue={monthValue}
                            keyboardType="numeric"
                          />
                        </View>
                      </View>
                    </View>

                    <View style={styles.rateInputContainer}>
                      <Text style={styles.label}>Taxa de Juros</Text>

                      <View
                        style={{
                          flexDirection: "row",
                          height: 35 * h,
                          alignItems: "center",
                        }}
                      >
                        <View style={styles.typeContainer}>
                          <Text style={styles.typeContainerText}>%</Text>
                        </View>
                        <View style={styles.inputTaxes}>
                          <TextInput
                            style={[styles.input, { width: 282 * w }]}
                            placeholder="0.00"
                            onChangeText={(newText) => setRate(newText)}
                            defaultValue={interestRate}
                            keyboardType="numeric"
                          />
                        </View>
                      </View>
                    </View>

                    <View style={styles.periodInputContainer}>
                      <Text style={styles.label}>Período</Text>

                      <View
                        style={{
                          flexDirection: "row",
                          height: 35 * h,
                          alignItems: "center",
                        }}
                      >
                        <View style={styles.typeContainer}>
                          <Text style={styles.typeContainerText}>%</Text>
                        </View>
                        <View style={styles.inputTaxes}>
                          <TextInput
                            style={[styles.input, { width: 282 * w }]}
                            placeholder="0.00"
                            onChangeText={(newText) => setPeriod(newText)}
                            defaultValue={period}
                            keyboardType="numeric"
                          />
                        </View>
                      </View>
                    </View>
                    <View style={{top: 298 * h, flexDirection: 'row'}}>
                      <View style={{height: 47*h, bottom: 35*h, left: 30*w}}>
                        <Text style={{fontFamily: 'RobotoLight', fontSize: RFPercentage(1.7), color: '#5B2FB6', lineHeight: 20*h}}>
                          Resultado:
                        </Text>
                        <Text style={{fontFamily: 'RobotoMedium', fontSize: RFPercentage(1.7), color: '#5B2FB6', height: 30*h}}>R$<Text style={{fontFamily: 'RobotoMedium', fontSize: RFPercentage(2.8), color: '#5B2FB6'}}>{arr[period]}</Text></Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => {
                          setArr(handleCalculator());
                          setTime(handlePeriodArray());
                          setOpacity(1);
                        }}
                        style={[styles.button]}
                      >
                        <Text style={{ color: "#fff" }}>Calcular</Text>
                      </TouchableOpacity>
                    </View>

                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
                        
        <View style={{ top: 40 * h, opacity: opacity }}>
          <View style={[styles.box, styles.boxShadow]}>
            <View style={[styles.box, styles.boxShadow]}>
              <View style={[styles.box, styles.boxShadow]}>
                <View style={[styles.box, styles.boxShadow]}>
                  <View
                    style={[
                      styles.box,
                      {
                        backgroundColor: "#fff",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                    ]}
                  >
                    <LineGraphic style={{ position: "absolute" }} />
                    <View
                      style={{
                        flexDirection: "column",
                        width: 350 * w,
                        height: 340 * h,
                        top: 25 * h,
                      }}
                    >
                      <View
                        style={{
                          top: 10 * h,
                          flexDirection: "row",
                          width: 350 * w,
                          height: 290 * h,
                        }}
                      >
                        <YAxis
                          data={arr}
                          contentInset={{ top: 0, left: 5, bottom: 15 }}
                          min={-arr[0]}
                          max={arr[-1]}
                          svg={{
                            fill: "#5B2FB6",
                            fontSize: 14,
                          }}
                          style={{
                            position: "absolute",
                            height: 270 * h,
                            right: 320 * w,
                          }}
                          numberOfTicks={5}
                          formatLabel={(value) => `${value / 1000}K`}
                        />

                        <BarChart
                          style={{
                            height: 270 * h,
                            width: 330 * w,
                            left: 30 * w,
                          }}
                          data={arr}
                          svg={{ fill: "#5413A6" }}
                          gridMin={0}
                          curve={shape.curveNatural}
                          spacingInner={0.3}
                          spacingOuter={0.5}
                          contentInset={{ left: 15, right: 15, bottom: 10 }}
                        >
                          <Line />
                        </BarChart>
                      </View>
                      <View
                        style={{
                          height: 40 * h,
                          width: 386 * w,
                          alignItems: "center",
                        }}
                      >
                        <XAxis
                          style={{
                            width: 310 * w,
                            top: 5 * h,
                          }}
                          data={time}
                          min={time[0]}
                          max={time[-1]}
                          formatLabel={(index) => index}
                          contentInset={{ left: 15, right: 15 }}
                          svg={{ fontSize: 15, fill: "#5B2FB6" }}
                          numberOfTicks={5}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View
          style={[
            styles.box,
            ,
            styles.boxShadow,
            { backgroundColor: "#fff", flex: 1, top: 80 * h, opacity: opacity },
          ]}
        >
          <View
            style={[
              styles.box,
              ,
              styles.boxShadow,
              { backgroundColor: "#fff", flex: 1 },
            ]}
          >
            <View
              style={[
                styles.box,
                ,
                styles.boxShadow,
                { backgroundColor: "#fff", flex: 1, alignItems: 'center',  justifyContent: 'center'},
              ]}
            >
              <FlatList style={{margin: 10}} nestedScrollEnabled numColumns={3} data={arr} renderItem={renderItem} />
            </View>
          </View>
        </View>
        <View
          style={[
            {
              top: 100 * h,
              width: 386 * w,
              height: 100 * h,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 10,
              opacity: opacity
            },
            { elevation: 10, shadowColor: "#000", shadowOpacity: 8 },
          ]}
        >
        <View
          style={[
            {
              
              width: 386 * w,
              height: 100 * h,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 10,
            },
            { elevation: 10, shadowColor: "#000", shadowOpacity: 8 },
          ]}
        >
          <Text
            style={{
              textAlign: "center",
              width: 370 * w,
              color: "#5413A6",
              fontFamily: "RobotoLight",
              fontSize: RFPercentage(2.4),
            }}
          >
            Valor investido:{" "}
            <Text
              style={{
                fontFamily: "RobotoMedium",
                fontSize: RFPercentage(2.5),
                color: "#5413A6",
              }}
            >
              R${' '}{period*monthValue}
            </Text>
          </Text>
        </View>
        </View>
        <View
          style={[
            {
              top: 120 * h,
              width: 386 * w,
              height: 100 * h,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#5413A6",
              borderRadius: 10,
              opacity: opacity
            },
            { elevation: 10, shadowColor: "#000", shadowOpacity: 8 },
          ]}
        >
        <View
          style={[
            {
              width: 386 * w,
              height: 100 * h,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#5413A6",
              borderRadius: 10,
            },
            { elevation: 10, shadowColor: "#000", shadowOpacity: 8 },
          ]}
        >
          <Text
            style={{
              textAlign: "center",
              width: 370 * w,
              color: "#fff",
              fontFamily: "RobotoLight",
              fontSize: RFPercentage(2.4),
            }}
          >
            Patrimônio final:{" "}
            <Text
              style={{
                fontFamily: "RobotoMedium",
                fontSize: RFPercentage(2.5),
                color: "#fff",
              }}
            >
              R${' '}{arr[period]}
            </Text>
          </Text>
        </View>
        </View>
        <View
          style={[
            {
              top: 140 * h,
              width: 386 * w,
              height: 100 * h,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#5413A6",
              borderRadius: 10,
              opacity: opacity
            },
            { elevation: 10, shadowColor: "#000", shadowOpacity: 8 },
          ]}
        >
        <View
          style={[
            {
              width: 386 * w,
              height: 100 * h,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#1C0632",
              borderRadius: 10,
            },
            { elevation: 10, shadowColor: "#000", shadowOpacity: 8 },
          ]}
        >
          <Text
            style={{
              textAlign: "center",
              width: 370 * w,
              color: "#fff",
              fontFamily: "RobotoLight",
              fontSize: RFPercentage(2.4),
            }}
          >
            Total em juros:{" "}
            <Text
              style={{
                fontFamily: "RobotoMedium",
                fontSize: RFPercentage(2.5),
                color: "#fff",
              }}
            >
              R${' '}{Math.round(arr[period] - (period*monthValue))}
            </Text>
          </Text>
        </View>
        </View>
        
        

        <View style={{ position: "relative", top: 140 * h, opacity: 0 }}>
          <Text>Olá Mundo</Text>
          <Text>Olá Mundo</Text>
          <Text>Olá Mundo</Text>
          <Text>Olá Mundo</Text>
          <Text>Olá Mundo</Text>
          <Text>Olá Mundo</Text>
          <Text>Olá Mundo</Text>
          <Text>Olá Mundo</Text>
          <Text>Olá Mundo</Text>
          <Text>Olá Mundo</Text>
          <Text>Olá Mundo</Text>
          <Text>Olá Mundo</Text>
          <Text>Olá Mundo</Text>
          <Text>Olá Mundo</Text>
          <Text>Olá Mundo</Text>
          <Text>Olá Mundo</Text>
        </View>
      </Animated.View>
      <Animated.View style={{ position: "absolute", top: navY }}>
        <NavBar />
      </Animated.View>
      
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "white",
  },

  box: {
    position: "relative",
    borderRadius: 10,
    width: 386 * w,
    height: 353 * h,
  },

  boxShadow: {
    elevation: 10,
    shadowColor: "#171717",
    shadowOpacity: 1,
  },
  title: {
    position: "relative",
    left: 17 * w,
    top: 24 * h,
    fontFamily: "RobotoMedium",
    color: "#5B2FB6",
    fontSize: RFPercentage(1.82),
    height: 20,
  },

  button: {
    position: "absolute",
    right: 25*w,
    width: 109 * w,
    bottom: 30*h,
    height: 36 * h,
    backgroundColor: "#5B2FB6",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  initValueInputContainer: {
    top: 64 * h,
    left: 17 * w,
    position: "absolute",
  },

  monthValueInputContainer: {
    top: 64 * h,
    left: 204 * w,
    position: "absolute",
  },
  rateInputContainer: {
    top: 140 * h,
    left: 17 * w,
    position: "absolute",
  },
  periodInputContainer: {
    top: 216 * h,
    left: 17 * w,
    position: "absolute",
  },

  label: {
    left: 9 * w,
    bottom: 5 * h,
    fontFamily: "RobotoLight",
    color: "#5B2FB6",
  },
  typeContainer: {
    height: 35 * h,
    width: 40 * w,
    backgroundColor: "#5B2FB6",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
  },
  typeContainerText: {
    color: "#fff",
    fontFamily: "RamblaRegular",
    fontSize: RFPercentage(2),
  },

  inputValues: {
    height: 35 * h,
    borderColor: "#5B2FB6",
    borderWidth: 1,
    width: 105 * w,
    borderRadius: 5,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    borderLeftColor: "#fff",
  },

  inputTaxes: {
    height: 35 * h,
    borderColor: "#5B2FB6",
    borderWidth: 1,
    width: 292 * w,
    borderRadius: 5,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
  },

  input: {
    left: 5 * w,
    height: 29 * h,
    top: 2 * h,
    bottom: 3 * h,
    width: 90 * w,
    fontFamily: "RobotoLight",
  },
});
