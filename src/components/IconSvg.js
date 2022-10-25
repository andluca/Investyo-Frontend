import * as React from "react"
import Svg, {
  G,
  Path,
  Circle,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

import { Dimensions } from "react-native";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const w = 1/428 * width;
const h = 1/926 * height;

const SvgComponent = (props) => (
  <Svg
  width={256*h}
  height={256*h}
  viewBox="0 0 512 512"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
>
  <G filter="url(#filter0_i_126_50)">
    <Path
      d="M256 512C397.385 512 512 397.385 512 256C512 194.378 490.227 137.841 453.955 93.6622L267.13 280.487L225.948 239.304L52.8724 411.826C70.3892 434.626 91.6585 454.393 115.757 470.202C156.038 496.629 204.224 512 256 512Z"
      fill="url(#paint0_linear_126_50)"
    />
    <Path
      d="M256 0C114.615 0 0 114.615 0 256C0 314.635 19.7127 368.665 52.8724 411.826L225.948 239.304L267.13 280.487L453.955 93.6622C436.367 72.2399 415.369 53.7234 391.791 38.942C352.432 14.2666 305.882 0 256 0Z"
      fill="url(#paint1_linear_126_50)"
    />
  </G>
  <G filter="url(#filter1_d_126_50)">
    <Path
      d="M55.6523 407.401L227.609 235.444L271.018 278.853L426.296 123.548"
      stroke="white"
      strokeWidth={24}
      strokeLinecap="square"
    />
  </G>
  <G filter="url(#filter2_d_126_50)">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M431.269 183.618L455.496 93.1996L365.078 117.427L431.269 117.427L431.269 183.618Z"
      fill="white"
    />
  </G>
  <G filter="url(#filter3_d_126_50)">
    <Circle
      cx={209.274}
      cy={143.43}
      r={40.333}
      transform="rotate(-15 209.274 143.43)"
      fill="white"
    />
  </G>
  <G filter="url(#filter4_d_126_50)">
    <Path
      d="M271.8 128.701C273.436 134.807 269.733 143.033 259.413 151.637C249.379 160.004 234.189 167.696 216.203 172.515C198.217 177.335 181.217 178.268 168.343 176.039C155.104 173.748 147.784 168.475 146.147 162.369C144.511 156.263 148.215 148.037 158.534 139.433C168.569 131.066 183.758 123.374 201.744 118.554C219.73 113.735 236.731 112.802 249.605 115.03C262.844 117.322 270.164 122.594 271.8 128.701Z"
      stroke="white"
      strokeWidth={8}
      shapeRendering="crispEdges"
    />
  </G>
  <Defs>
    <LinearGradient
      id="paint0_linear_126_50"
      x1={701.5}
      y1={-8.50001}
      x2={318.631}
      y2={744.079}
      gradientUnits="userSpaceOnUse"
    >
      <Stop stopColor="#482398" />
      <Stop offset={0.333333} stopColor="#1E0551" />
      <Stop offset={0.494792} stopColor="#4F0E6D" />
      <Stop offset={0.75} stopColor="#2F0B53" />
      <Stop offset={1} stopColor="#1C0632" />
    </LinearGradient>
    <LinearGradient
      id="paint1_linear_126_50"
      x1={701.5}
      y1={-8.50001}
      x2={318.631}
      y2={744.079}
      gradientUnits="userSpaceOnUse"
    >
      <Stop stopColor="#482398" />
      <Stop offset={0.333333} stopColor="#1E0551" />
      <Stop offset={0.494792} stopColor="#4F0E6D" />
      <Stop offset={0.75} stopColor="#2F0B53" />
      <Stop offset={1} stopColor="#1C0632" />
    </LinearGradient>
  </Defs>
</Svg>
)

export default SvgComponent
