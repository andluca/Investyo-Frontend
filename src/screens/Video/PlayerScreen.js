import React, { useState, useCallback, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Alert,
  Button,
  TouchableOpacity,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { Icon } from "react-native-elements";
import { CancelSvg, AskSvg } from "../../components/SvgComponents";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";
import HeaderBar from "../../components/HeaderBar";

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
      17;
      setPlaying(false);
      18;
    }
  };

  const togglePlaying = () => {
    setPlaying((prev) => !prev);
  };

  const seekBackAndForth = (control) => {
    console.log("currentTime");

    controlRef.current?.getCurrentTime().then((currentTime) => {
      control === "forward"
        ? controlRef.current?.seekTo(currentTime + 15, true)
        : controlRef.current?.seekTo(currentTime - 15, true);
    });
  };

  const muteVideo = () => setMute(!isMute);

  const ControlIcon = ({ name, onPress }) => (
    <Icon onPress={onPress} name={name} size={40} color="#5B2FB6" />
  );

  const navigation = useNavigation();


  return (
    <SafeAreaView style={styles.container}>
      
      {/* <View style={styles.header}>
        <TouchableOpacity onPress={()=>{
            navigation.navigate('Video')
        }} style={{top: -25*h}}>
            <CancelSvg/>
        </TouchableOpacity>
        
        <TouchableOpacity style={{ top: -26*h}}>
           <AskSvg/>
        </TouchableOpacity>
        
      </View> */}

      
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

          {/* <View style={styles.controlContainer}>
            <ControlIcon
              onPress={() => seekBackAndForth("rewind")}
              name="skip-previous"
            />

            <ControlIcon
              onPress={togglePlaying}
              name={playing ? "pause" : "play-arrow"}
            />

            <ControlIcon
              onPress={() => seekBackAndForth("forward")}
              name="skip-next"
            />
          </View>

          <ControlIcon
            onPress={muteVideo}
            name={isMute ? "volume-up" : "volume-off"}
          /> */}
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
  header:{
    top: 25*h,
    width: 390*w,
    height: 80*h,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  title:{
    fontFamily: 'RobotoMedium',
    fontSize: RFPercentage(2.5),
    color: '#5B2FB6',
    top: 30*h

  },
  videoContainer:{
    top: 0*h
  }
});
