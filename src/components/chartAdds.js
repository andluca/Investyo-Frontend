import { Path } from "react-native-svg";
import { Circle } from "react-native-svg";
import { Defs, LinearGradient, Stop } from "react-native-svg";

export const Gradient = () => (
    
<Defs>
    <LinearGradient id={"gradient"} x1={"0%"} y1={"0%"} x2={"0%"} y2={"100%"}>
      <Stop offset={"0%"} stopColor={"rgb(194, 65, 244)"} stopOpacity={0.8} />
      <Stop offset={"100%"} stopColor={"rgb(134, 65, 244)"} stopOpacity={0.2} />
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
