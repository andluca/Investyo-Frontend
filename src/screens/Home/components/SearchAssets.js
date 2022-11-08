import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { TextInput } from "react-native";
import { TouchableOpacity, Button } from "react-native";
import { StyleSheet } from "react-native";
import { View, Dimensions, Animated, Text } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { GraphicStockSvg, SearchSvg } from "../../../components/SvgComponents";
import { AreaChart, Grid, XAxis, YAxis } from "react-native-svg-charts";
import { Dots, Gradient, Line } from "../../../components/chartAdds";
import { useState } from "react";
import { LoginContext } from "../../../Context/LoginContext";
import { useContext } from "react";
import { Alert } from "react-native";
import { FlatList } from "react-native";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const w = (1 / 428) * width;
const h = (1 / 926) * height;

const RenderItem = ({ item }) => {
  var mode = new Animated.Value(0);
  var itemHeight = new Animated.Value(0 * h);

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(itemHeight, {
        toValue: itemHeight._value === 0 * h ? 195 * h : 0 * h,
        duration: 150,
        useNativeDriver: false,
      }),
      Animated.timing(mode, {
        toValue: mode._value === 0 ? 1 : 0,
        useNativeDriver: false,
        duration: 220,
      }),
    ]).start();
  };
  return (
    <View>
      <TouchableOpacity
        style={[
          {
            width: 376 * w,
            height: 55 * h,
            position: "absolute",
            borderRadius: 10,
            backgroundColor: "#fff",
          },
          { elevation: 10, shadowColor: "#171717", shadowOpacity: 1 },
        ]}
        onPress={() => {
          handlePress();
          
        }}
      >
        <View
          style={[
            {
              width: 13 * h,
              height: 13 * h,
              borderLeftWidth: 2,
              borderTopWidth: 2,
              borderColor: "#1C0632",
              rotation: 225,
              position: "absolute",
              top: 18 * h,
              left: 15 * w,
            },
          ]}
        ></View>

        <Text
          style={[
            {
              fontSize: RFPercentage(2.2),
              fontFamily: "RobotoMedium",
              fontWeight: "600",
              color: "#1C0632",
              top: 13 * h,
              position: "absolute",
              left: 50 * w,
            },
          ]}
        >
          Apple - AAPL
        </Text>
        <Text
          style={[
            {
              fontSize: RFPercentage(2.2),
              fontFamily: "RobotoMedium",
              fontWeight: "600",
              color: "#1C0632",
              top: 13 * h,
              position: "absolute",
              left: 50 * w,
            },
            { left: 288 * w },
          ]}
        >
          79.86
        </Text>
      </TouchableOpacity>

      <Animated.View
        style={[
          {
            backgroundColor: "#fff",
            width: 376 * w,
            maxHeight: itemHeight,
            borderRadius: 10,
            overflow: "hidden",
            alignItems: "center",
            marginVertical: 40,
            top: 20 * h,
          },
          {
            elevation: 10,
            shadowColor: "#171717",
            shadowOpacity: 1,
          },
        ]}
      >
        <Text
          style={{
            fontFamily: "RobotoLight",
            fontSize: RFPercentage(2),
            color: "#500C86",
            textShadowColor: "#500C86",
            textShadowOffset: { width: -0.5, height: 0.5 },
            textShadowRadius: 7,
            alignSelf: "flex-start",
            left: 30 * w,
            top: 20*h
          }}
        >
          Preço nos 10 últimos dias
        </Text>
        <GraphicStockSvg style={{ top: 40 * h }}></GraphicStockSvg>

        <AreaChart
          style={{
            height: 100 * h,
            width: 329 * w,
            top: -63 * h,
            opacity: 1,
          }}
          data={[45, 60, 57, 80, 70, 71, 65, 67, 75, 79]}
          gridMin={0}
          gridMax={80}
          start={-100}
          contentInset={{
            top: 17 * h,
            bottom: 10 * h,
            left: 14 * w,
            right: 12 * w,
          }}
          svg={{ fill: "url(#gradient)" }}
        >
          <YAxis
            data={[45, 60, 57, 80, 70, 71, 65, 67, 75, 79.86]}
            contentInset={{ top: 10, left: 5, bottom: 5 }}
            min={0}
            max={80}
            svg={{
              fill: "#1C0632",
              fontSize: 14,
            }}
            style={{
              top: 5 * h,
              position: "absolute",
              height: 100 * h,
              right: 320 * w,
            }}
            numberOfTicks={5}
            formatLabel={(value) => value}
          />
          <XAxis
            style={{
              width: 320 * w,
              top: 110 * h,
            }}
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            min={1}
            max={10}
            formatLabel={(index) => index}
            contentInset={{ left: 12, right: 8 }}
            svg={{ fontSize: 15, fill: "#1C0632" }}
            numberOfTicks={10}
          />
          <Gradient />
          <Line />
          <Dots />
        </AreaChart>
      </Animated.View>
    </View>
  );
};

export default function SearchAssets() {
  const { searchByName } = useContext(LoginContext);

  const [name, setName] = useState("");
  const [stocks, setStocks] = useState([]);

  const handleSearch = async (name) => {
    var stocks = await searchByName(name);
    var listStocks = await stocks.companyList;

    return await listStocks;
  };

  return (
    <View style={[styles.searchBox, styles.searchBoxShadow, {flex:1}]}>
      <View style={[styles.searchBox, styles.searchBoxShadow]}>
        <View style={[styles.searchBox, styles.searchBoxShadow]}>
            <View style={{flex:1}}>
          <LinearGradient
            colors={["#482398", "#6838CC", "#572BA9", "#2E1163", "#1C0632"]}
            start={[1, 0]}
            end={[0, 1]}
            style={styles.searchBoxHeader}
          >
            <View style={styles.inputAsset}></View>
            <TextInput
              onChangeText={(newText) => setName(newText)}
              value={name}
              style={{
                color: "#fff",
                position: "absolute",
                left: 30 * w,
                top: 30 * h,
                width: 200 * w,
                height: 35 * h,
              }}
              placeholder="Nome"
              placeholderTextColor={"#fff"}
            ></TextInput>
            <TouchableOpacity
              onPress={async () => {
                setStocks(await handleSearch());
              }}
            >
              <SearchSvg style={{ left: 235 * w, top: 35 * h }}></SearchSvg>
            </TouchableOpacity>

            <Text
              style={[
                {
                  position: "absolute",
                  fontFamily: "RobotoLight",
                  fontSize: RFPercentage(2),
                  color: "#fff",
                  top: 34 * h,
                  left: 310 * w,
                },
                {
                  textShadowColor: "#fff",
                  textShadowOffset: { width: -1, height: 1 },
                  textShadowRadius: 3,
                },
              ]}
            >
              VAL
            </Text>
          </LinearGradient>
          <FlatList
                style={{ margin: 10, height: 340*h, }}
                data={stocks}
                renderItem={RenderItem}
              />
          
        </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBox: {
    width: 386 * w,
    height: 340 * h,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
  },
  searchBoxShadow: {
    elevation: 10,
    shadowColor: "#171717",
    shadowOpacity: 1,
  },
  searchBoxHeader: {
    width: 386 * w,
    height: 80 * h,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  inputAsset: {
    left: 15 * w,
    top: 30 * h,
    position: "absolute",
    width: 250 * w,
    height: 35 * h,
    backgroundColor: "#000",
    opacity: 0.2,
    borderRadius: 5,
    flexDirection: "row",
    color: "#fff",
  },
  labelChart: {
    fontFamily: "RobotoLight",
    fontSize: RFPercentage(2),
    color: "#500C86",
    textShadowColor: "#500C86",
    textShadowOffset: { width: -0.5, height: 0.5 },
    textShadowRadius: 7,
    alignSelf: "flex-start",
    left: 30 * w,
  },
});
