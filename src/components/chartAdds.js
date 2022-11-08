import { Path } from "react-native-svg";
import { Circle } from "react-native-svg";
import { Defs, LinearGradient, Stop } from "react-native-svg";

export const Gradient = () => (
    
<Defs>
    <LinearGradient id={"gradient"} x1={"100%"} y1={"100%"} x2={"0%"} y2={"0%"}>
      <Stop offset={"0%"} stopColor={"#5B2FB6"} />
      <Stop offset={"20%"} stopColor={"#482398"} />
      <Stop offset={"40%"} stopColor={'#6838CC'}/>
      <Stop offset={"60%"} stopColor={'#572BA9'}/>
      <Stop offset={"80%"} stopColor={'#2E1163'}/>
      <Stop offset={"100%"} stopColor={"#1C0632"} />

    </LinearGradient>
  </Defs>
    
  
);

export const Line = ({ line }) => {
  return <Path key={"line"} d={line} stroke={"#0000BF"} fill={"none"} />;
};

export const Dots = ({ x, y, data }) => {
  return (
    <>
      {data?.map((value, index) => (
        <Circle
          key={index}
          cx={x(index)}
          cy={y(value)}
          r={2}
          stroke={"rgb(0, 0, 0)"}
          fill={"white"}
        />
      ))}
    </>
  );
};
