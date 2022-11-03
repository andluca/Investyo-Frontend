import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Dimensions, StyleSheet, View, Animated } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { UserSvg, AskSvg, BarSvg, } from "./SvgComponents";


const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const w = 1/428 * width;
const h = 1/926 * height;
var mode = new Animated.Value(0);
var buttonSize = new Animated.Value(1);

export default function HeaderBar({title}) {
  
 
  

  const handlePress = () => {
      Animated.sequence([
          Animated.timing(buttonSize, {
              toValue: 1.1,
              duration: 1,
              useNativeDriver: false
          }),
          Animated.timing(buttonSize, {
              toValue: 1,
              useNativeDriver: false
          }),
          Animated.timing(mode, {
              toValue: mode._value === 0 ? 1 : 0,
              useNativeDriver: false,
              duration: 220
          }),
          
      ]).start();
  };

  const sizeStyle = {
    transform: [{ scale: buttonSize }]
};



  return (
    <View style={{ alignItems: 'center'}}>

      <View style={[styles.container,]}>
        <Animated.View style={[sizeStyle, {right: 40*w}]}>
          <TouchableOpacity onPress={handlePress}>
            <BarSvg/>
          </TouchableOpacity>
        </Animated.View>
      

      
        <Text style={styles.title}>{title}</Text>
      

      <View style={{flexDirection: 'row', left: 40*w}}>
        <TouchableOpacity style={{right: 19*w,}}>
           <AskSvg/>
        </TouchableOpacity>
            
        <TouchableOpacity>
          <UserSvg/>
        </TouchableOpacity>
      </View>
      </View>
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
    justifyContent: 'space-around',
  },

  title:{
    fontFamily: 'RobotoLight',
    color: '#5B2FB6',
    fontSize: RFPercentage(1.9),
    left: 13.75*w
  }
});

 export {mode};