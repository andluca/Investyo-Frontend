import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View, Dimensions} from "react-native";
import { ShinyIconSvg, WaveSvg } from "../../../components/SvgComponents";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const w = (1 / 428) * width;
const h = (1 / 926) * height;

export default function Header() {
  return (
    <View style={{ width: width }}>
      <LinearGradient
        colors={["#482398", "#1E0551", "#4F0E6D", "#2F0B53", "#1C0632"]}
        style={styles.header}
        start={[1, 0]}
        end={[0, 1]}
      >
        <ShinyIconSvg style={[styles.iconStyle, styles.iconShadow]} />

        <ShinyIconSvg
          style={styles.iconStyle}
        />
      </LinearGradient>
      <WaveSvg style={{ top: -61 * h }} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: width,
    height: 300 * h,
    alignItems: "center",
  },
  iconStyle: {
    position: "absolute",
    maxWidth: 119 * h,
    maxHeight: 120 * h,
    top: 57 * h,
  },

  iconShadow: {
    elevation: 40,
    shadowColor: "#fff",
    shadowOpacity: 1,
    borderRadius: 100,
  },
});
