import React, { useState, useCallback, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Alert,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { Icon } from "react-native-elements";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const w = (1 / 428) * width;
const h = (1 / 926) * height;

export default function PlayerScreen({  title, id}) {
  const [playing, setPlaying] = useState(false);
  const [isMute, setMute] = useState(false);
  9;
  const controlRef = useRef();

  const onStateChange = (state) => {
    if (state === "ended") {
      setPlaying(false);

      Alert.alert("Vídeo concluído! Obrigado");
    }
    if (state !== "playing") {
      
      setPlaying(false);
      
    }
  };



  const navigation = useNavigation();


  return (
    <SafeAreaView style={styles.container}>

      
        <View style={styles.videoContainer}>
          <YoutubePlayer
            ref={controlRef}
            play={playing}
            mute={isMute}
            onChangeState={onStateChange}
            height={250 * h}
            width={width}
            videoId={id}
          />

        <Text style={styles.title}>
                    {title}
                </Text>

          
        </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#fff",
  },
  controlContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  title:{
    fontFamily: 'RobotoMedium',
    fontSize: RFPercentage(3),
    color: '#2D1069',
    top: 1*h,
    width: 400*w,
    textAlign: 'center'
    

  },
  videoContainer:{
    top: 0*h,
    alignItems: 'center'
  }
});
