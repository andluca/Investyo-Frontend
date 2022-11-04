import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  Animated,
  TouchableOpacity,
  Text,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import HeaderBar, { mode } from "../../components/HeaderBar";
import NavBar from "../../components/NavBar";
import { useNavigation } from "@react-navigation/native";
import { RFPercentage } from "react-native-responsive-fontsize";
import {
  introduction,
  economy,
  fixed,
  stock,
  realState,
  crypto,
} from "../../mocks/videos";
import { PlaySvg } from "../../components/SvgComponents";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const w = (1 / 428) * width;
const h = (1 / 926) * height;

export default function VideosScreen({ headerbar }) {
  const navigation = useNavigation();
  const navY = mode.interpolate({
    inputRange: [0, 1],

    outputRange: [-90, 54],
  });

  const boxY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 86],
  });

  const renderItem = ({ item }) => {
    const uriVideo = `https://img.youtube.com/vi/${item.id}/maxresdefault.jpg`;
    return (
      <TouchableOpacity
      onPress={()=>{
        navigation.navigate('Player', {
                title:item.title,
                id:item.id
              })
      }}  
        style={[
          styles.videoContainer,
          { elevation: 10, shadowColor: "#000", shadowOpacity: 2 },
        ]}
      >
        <View style={[{ top: 0 * h }]}>
          <Image
            source={{ uri: uriVideo }}
            style={{ height: 180 * h, width: 341 * h }}
          ></Image>
        </View>
        <Text
          style={{
            top: 10 * h,
            fontSize: RFPercentage(1.9),
            color: "#2D1069",
            fontFamily: "RobotoMedium",
            textAlign: "left",
            left: -15*w,
            width: 300 * w,
          }}
        >
          {item.title}
        </Text>
        <PlaySvg
          style={{
            left: 320 * w,
            bottom: 18 * h,
            maxWidth: 20 * w,
            maxHeight: 20 * w,
            position: "absolute",
          }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView
      style={{ width: width }}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ alignItems: "center", backgroundColor: "white" }}
    >
      <SafeAreaView style={styles.container}>
        <HeaderBar {...headerbar}></HeaderBar>
        <Animated.View style={{ top: navY }}>
          <NavBar></NavBar>
        </Animated.View>
        <Animated.View style={{ top: boxY }}>
          <View style={[styles.categoryContainer, ,]}>
            <Text style={styles.label}>Introdução</Text>
            <FlatList
              style={styles.listContainer}
              data={introduction}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={[styles.categoryContainer]}>
            <Text style={styles.label}>Economia</Text>
            <FlatList
              style={styles.listContainer}
              data={economy}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={[styles.categoryContainer]}>
            <Text style={styles.label}>Renda Fixa</Text>
            <FlatList
              style={styles.listContainer}
              data={fixed}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={[styles.categoryContainer]}>
            <Text style={styles.label}>Ações</Text>
            <FlatList
              style={styles.listContainer}
              data={stock}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={[styles.categoryContainer]}>
            <Text style={styles.label}>Fundos Imobiliários</Text>
            <FlatList
              style={styles.listContainer}
              data={realState}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={[styles.categoryContainer]}>
            <Text style={styles.label}>Cripto e Ativos Estrangeiros</Text>
            <FlatList
              style={styles.listContainer}
              data={crypto}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View style={{ position: "relative", top: 140 * h, opacity: 0 }}>
            <Text>Olá Mundo</Text>
            <Text>Olá Mundo</Text>
            <Text>Olá Mundo</Text>
            <Text>Olá Mundo</Text>
            <Text>Olá Mundo</Text>
            <Text>Olá Mundo</Text>
          </View>
        </Animated.View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#fff",
  },
  categoryContainer: {
    height: 320 * h,
    width: width,
    backgroundColor: "#fff",
    marginVertical: 1,
  },
  label: {
    left: 20 * w,
    top: 10 * h,
    fontFamily: "RobotoMedium",
    color: "#5B2FB6",
    fontSize: RFPercentage(2),
  },

  videoContainer: {
    width: 350 * w,
    height: 240 * h,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginHorizontal: 10 * w,
    marginVertical: 5 * h,
    alignItems: "center",
  },
  videoShadow: {
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 2,
  },
  listContainer: { 
    top: 20 * h, 
    maxHeight: 270 * h },
});
