import React, { useRef } from "react";
import { StyleSheet, Text, Dimensions, View } from "react-native";
import SvgComponent from "../../../components/IconSvg";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Modal from "react-native-modalbox";
import { TextInput, Alert } from "react-native";
import { useState } from "react";
import { Button } from "react-native";
import { useContext } from "react";
import { LoginContext } from "../../../Context/LoginContext";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const w = (1 / 428) * width;
const h = (1 / 926) * height;

export default function Main({ title }) {
  const [url, setUrl] = useState("");
  const elementRef = useRef();
  const { connectToBackend } = useContext(LoginContext);

  const makeConnect = async () => {
    await connectToBackend(url)
    elementRef.current.close();
 }

  return (
    <>
      <SvgComponent
        onPress={() => elementRef.current.open()}
        style={styles.icon}
      />
      <Text style={styles.title}>{title}</Text>

      <Modal
        style={[
          {
            alignItems: "center",
            height: 300 * h,
            width: 300 * w,
            justifyContent: "center",
            alignItems: "center",
          },
          { elevation: 100, shadowColor: "#000", shadowOpacity: 2 },
        ]}
        position={"center"}
        ref={elementRef}
      >
        <Text>Url do servidor:</Text>
        <TextInput
          style={{
            borderColor: "black",
            borderWidth: 1,
            width: 250 * w,
            height: 50 * h,
          }}
          placeholder="url"
          onChangeText={(newText) => setUrl(newText)}
          value={url}
        />
        <Button
          onPress={makeConnect}
          style={{ width: 175 * w, height: 100 * h }}
          title="Modificar Url"
        ></Button>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginTop: 221 * h,
  },
  title: {
    fontFamily: "RobotoThin",
    fontSize: RFPercentage(5.6),
    color: "#500C86",
    marginTop: 10 * h,
  },
});
