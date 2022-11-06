import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";

import { RFPercentage } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const w = (1 / 428) * width;
const h = (1 / 926) * height;

export default function SignUpButton({textButton, underButton, underBoldButton, handleRegister}) {
  const navigation = useNavigation();
  return (
    
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}
      onPress={async()=>{
          
            
          if(await handleRegister()) 
          navigation.navigate('SignIn')
          
      }}>
        <Text style={styles.textButton}>{textButton}</Text>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={()=>{
          navigation.navigate('SignIn')
      }}>
        <Text style={styles.textCount}>
          {underButton}{" "}
          <Text style={{ fontFamily: "RobotoMedium" }}>{underBoldButton}</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    top: 720 * h,
    left: 84 * w,
    alignItems: "center",
    width: 260 * w,
  },

  button: {
    width: 254 * w,
    height: 47 * h,
    borderRadius: 15,
    backgroundColor: "#500C86",
    alignItems: "center",
  },
  textButton: {
    fontFamily: "RobotoMedium",
    fontSize: RFPercentage(2.666),
    color: "#fff",
    top: 6 * h,
  },

  textCount: {
    top: 5 * h,
    fontFamily: "RobotoLight",
    fontSize: RFPercentage(1.55),
    color: "#500C86",
  },
});
