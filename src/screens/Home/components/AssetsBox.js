import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const w = (1 / 428) * width;
const h = (1 / 926) * height;

export default function AssetsBox() {
  return (
    <View
      style={[
        styles.boxDefinition,
        styles.boxShadow,
      ]}
    >
      <View
        style={[
            styles.boxDefinition,
            styles.boxShadow,
        ]}
      >
        <View
          style={[
            styles.boxDefinition,
            styles.boxShadow,
          ]}
        >
          <View
            style={[
              
                styles.boxDefinition,
                styles.boxShadow,
                {backgroundColor: "#fff",}
              
            ]}
          >
            <View></View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  boxDefinition: {
    width: 386 * w,
    height: 211 * h,
    borderRadius: 10,
  },

  boxShadow: {
    elevation: 10,
    shadowColor: "#171717",
    shadowOpacity: 1,
  },
});
