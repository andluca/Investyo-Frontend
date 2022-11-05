import Reac from "react";
import { Text, TouchableOpacity } from "react-native";
import { Dimensions, StyleSheet, View, Animated } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { UserSvg, AskSvg, BarSvg, } from "./SvgComponents";
import { useRef } from "react";
import Modal from "react-native-modalbox";



const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const w = 1/428 * width;
const h = 1/926 * height;
var mode = new Animated.Value(0);
var buttonSize = new Animated.Value(1);

export default function HeaderBar({title, description}) {
  const elementRef = useRef();
 
  

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
        <TouchableOpacity onPress={() => elementRef.current.open()} style={{right: 19*w,}}>
           <AskSvg style={{maxHeight:24, maxWidth: 24}}/>
        </TouchableOpacity>
            
        <TouchableOpacity>
          <UserSvg/>
        </TouchableOpacity>
      </View>
      </View>

      <Modal
        style={[{
          alignItems: "center",
          height: 600 * h,
          width: 350 * w,
          borderRadius: 5,
          top: 100 * h,
          left:-209*w
        }, {elevation: 100, shadowColor: '#000', shadowOpacity: 2}]}
        position={"top"}
        ref={elementRef}
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
        <TouchableOpacity onPress={()=>elementRef.current.close()} style={{position: 'absolute', top: 520*h, width: 150*w, height: 50*h, alignItems: 'center'}}>
          <Text style={{fontFamily: 'RamblaRegular', fontSize:RFPercentage(4), color: '#5B2FB6', fontWeight:'900'}}>OK</Text>
        </TouchableOpacity>
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