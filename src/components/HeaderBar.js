import Reac from "react";
import { Text, TouchableOpacity } from "react-native";
import { Dimensions, StyleSheet, View, Animated } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { UserSvg, AskSvg, BarSvg } from "./SvgComponents";
import { useRef } from "react";
import Modal from "react-native-modalbox";
import { useContext } from "react";
import { LoginContext } from "../Context/LoginContext";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const w = (1 / 428) * width;
const h = (1 / 926) * height;
var mode = new Animated.Value(0);
var buttonSize = new Animated.Value(1);

export default function HeaderBar({ title, description }) {
  const {getProfileWallet, doLogout} = useContext(LoginContext)

  const [username, setUsername] = useState("User");
  const [balance, setBalance] = useState(0);

  const navigation = useNavigation();

  const handleProfile = async () =>{
     const infoUser = await getProfileWallet();
      setUsername(await infoUser.username);
      setBalance(await infoUser.balance)

  }

  const handleLogout = async () =>{
    
    await doLogout();

  }

  const elementRef = useRef();
  const profileRef = useRef();

  

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(buttonSize, {
        toValue: 1.1,
        duration: 1,
        useNativeDriver: false,
      }),
      Animated.timing(buttonSize, {
        toValue: 1,
        useNativeDriver: false,
      }),
      Animated.timing(mode, {
        toValue: mode._value === 0 ? 1 : 0,
        useNativeDriver: false,
        duration: 220,
      }),
    ]).start();
  };

  const sizeStyle = {
    transform: [{ scale: buttonSize }],
  };

  return (
    <View style={{ alignItems: "center" }}>
      <View style={[styles.container]}>
        <Animated.View style={[sizeStyle, { right: 40 * w }]}>
          <TouchableOpacity onPress={handlePress}>
            <BarSvg />
          </TouchableOpacity>
        </Animated.View>

        <Text style={styles.title}>{title}</Text>

        <View style={{ flexDirection: "row", left: 40 * w }}>
          <TouchableOpacity
            onPress={() => elementRef.current.open()}
            style={{ right: 19 * w }}
          >
            <AskSvg style={{ maxHeight: 24, maxWidth: 24 }} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              profileRef.current.open();
              // handleProfile();
            }}
          >
            <UserSvg />
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        style={[
          {
            alignItems: "center",
            height: 700 * h,
            width: 350 * w,
            borderRadius: 5,
            top: 100 * h,
            left: -209 * w,
          },
          { elevation: 100, shadowColor: "#000", shadowOpacity: 2 },
        ]}
        position={"top"}
        ref={elementRef}
        backdrop={true}
      >
        <View style={{ top: 40 * h, alignItems: "center" }}>
          <AskSvg style={{ maxHeight: 90, maxWidth: 90 }} />
          <Text
            style={{
              color: "#5B2FB6",
              fontSize: RFPercentage(4),
              fontFamily: "RamblaRegular",
              top: 20 * h,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              width: 275 * w,
              fontFamily: "RamblaRegular",
              fontSize: RFPercentage(2.5),
              textAlign: "center",
              color: "#5B2FB6",
              top: 50 * h,
            }}
          >
            {description}{" "}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => elementRef.current.close()}
          style={{
            position: "absolute",
            top: 570 * h,
            width: 150 * w,
            height: 50 * h,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "RamblaRegular",
              fontSize: RFPercentage(4),
              color: "#5B2FB6",
              fontWeight: "900",
            }}
          >
            OK
          </Text>
        </TouchableOpacity>
      </Modal>

      <Modal
        style={[
          {
            alignItems: "flex-start",
            top: 0 * h,
            height: 300 * h,
            width: 250 * w,
            right: 130 * w,
            borderRadius: 5,
          },
          { elevation: 100, shadowColor: "#000", shadowOpacity: 2 },
        ]}
        position={"top"}
        ref={profileRef}
        backdrop={true}
      >
        <View style={{ top: 10 * h }}>
          <View style={{ flexDirection: "row", width: 240, top: 20 * h }}>
            <Text
              style={{
                fontFamily: "RobotoLight",
                fontSize: RFPercentage(1.8),
                color: "#1C0632",
                left: 10 * w,
                top: 20 * h,
                width: 90 * w,
                textAlign: "left",
              }}
            >
              Nome de Usuário:
            </Text>
            <Text
              style={{
                left: 100 * w,
                top: 40 * h,
                fontFamily: "RobotoMedium",
                color: "#1C0632",
                fontSize: RFPercentage(1.8),
              }}
            >
              Clara
            </Text>
            <TouchableOpacity onPress={()=>profileRef.current.close()}>
            <UserSvg style={{ left: 90 * w, top: -20 * h }} />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", width: 240, top: 40 * h }}>
            <Text
              style={{
                fontFamily: "RobotoLight",
                fontSize: RFPercentage(1.8),
                color: "#1C0632",
                left: 10 * w,
                top: 20 * h,
                width: 90 * w,
                textAlign: "left",
              }}
            >
              Patrimônio total:
            </Text>
            <Text
              style={{
                left: 80 * w,
                top: 40 * h,
                fontFamily: "RobotoMedium",
                color: "#1C0632",
                fontSize: RFPercentage(1.8),
              }}
            >
              R$1358.97
            </Text>
          </View>
          <View style={{ flexDirection: "row", width: 240, top: 60 * h }}>
            <Text
              style={{
                fontFamily: "RobotoLight",
                fontSize: RFPercentage(1.8),
                color: "#1C0632",
                left: 10 * w,
                top: 20 * h,
                width: 90 * w,
                textAlign: "left",
              }}
            >
              Patrimônio investido:
            </Text>
            <Text
              style={{
                left: 80 * w,
                top: 40 * h,
                fontFamily: "RobotoMedium",
                color: "#1C0632",
                fontSize: RFPercentage(1.8),
              }}
            >
              R$208.87
            </Text>
          </View>
        </View>
        <View
          style={{
            top: 120 * h,
            width: 250 * w,
            height: 50 * h,
            borderTopColor: "#5B2FB6",
            borderTopWidth: 1,
          }}
        >
          <TouchableOpacity onPress={async()=>{
            await handleLogout();
            navigation.navigate('Initial');
          }}>
            <View
              style={[
                {
                  width: 13 * h,
                  height: 13 * h,
                  borderLeftWidth: 2,
                  borderTopWidth: 2,
                  borderColor: "#5B2FB6",
                  rotation: 315,
                  position: "absolute",
                  top: 19 * h,
                  left: 15 * w,
                },
              ]}
            ></View>
            <Text
              style={{
                color: "#5B2FB6",
                fontFamily: "RobotoLight",
                fontSize: RFPercentage(3),
                left: 180 * w,
                top: 5 * h,
              }}
            >
              Sair
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: 387 * w,
    height: 24 * h,
    marginTop: 14 * h,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  title: {
    fontFamily: "RobotoLight",
    color: "#5B2FB6",
    fontSize: RFPercentage(1.9),
    left: 13.75 * w,
  },
});

export { mode };
