import * as React from "react"
import Svg, {
  G,
  Path,
  Circle,
  Defs,
  LinearGradient,
  Mask,
  Stop,
  ClipPath,} from "react-native-svg"


const AskSvg = (props) => (
  (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={12} cy={12} r={11} stroke="#5B2FB6" strokeWidth={2} />
    <Path
      d="M8.571 7.719a3.855 3.855 0 0 1 7.493 1.285c0 2.57-3.856 3.856-3.856 3.856M12.312 18h.012"
      stroke="#5B2FB6"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
  )
)

const UserSvg = (props)=>{
  return(
  <Svg
    {...props}
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      stroke="#5B2FB6"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
  )
}

const BarSvg = (props) => (
  <Svg
    {...props}
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M17 10H3M21 6H3M21 14H3M17 18H3"
      stroke="#5B2FB6"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

const VectorSvg = (props) => (
  <Svg
    width={12}
    height={7}
    viewBox="0 0 12 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M11 1L6 6L1 1"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

const PlusSvg = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={12} cy={12} r={11} stroke="white" strokeWidth={2} />
    <Path
      d="M11.9999 5.21729V11.9999M11.9999 18.7825V11.9999M11.9999 11.9999H18.7825M11.9999 11.9999H5.21729"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

const MinusSvg = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={12} cy={12} r={11} stroke="white" strokeWidth={2} />
    <Path
      d="M18.7825 12H11.9999H5.21729"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

const ExtractSvg = (props) => (
  <Svg
    width={22}
    height={26}
    viewBox="0 0 22 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M15.4 3.3999H17.8C18.4365 3.3999 19.047 3.65276 19.4971 4.10285C19.9471 4.55293 20.2 5.16338 20.2 5.7999V22.5999C20.2 23.2364 19.9471 23.8469 19.4971 24.297C19.047 24.747 18.4365 24.9999 17.8 24.9999H3.4C2.76348 24.9999 2.15303 24.747 1.70294 24.297C1.25286 23.8469 1 23.2364 1 22.5999V5.7999C1 5.16338 1.25286 4.55293 1.70294 4.10285C2.15303 3.65276 2.76348 3.3999 3.4 3.3999H5.8"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.1998 1H6.9998C6.33706 1 5.7998 1.53726 5.7998 2.2V4.6C5.7998 5.26274 6.33706 5.8 6.9998 5.8H14.1998C14.8625 5.8 15.3998 5.26274 15.3998 4.6V2.2C15.3998 1.53726 14.8625 1 14.1998 1Z"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

const ShinyIconSvg = (props) => (
  <Svg
    width={1123}
    height={1124}
    viewBox="0 0 1123 1124"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    accessibilityRole="image"
    {...props}
  >
    <G filter="url(#filter0_f_504_25)">
      <Path
        d="M1069 562.097C1069 842.381 841.784 1069.6 561.5 1069.6C281.215 1069.6 54 842.381 54 562.097C54 281.812 281.215 54.5966 561.5 54.5966C841.784 54.5966 1069 281.812 1069 562.097Z"
        stroke="white"
        strokeWidth={8}
      />
    </G>
    <G filter="url(#filter1_dd_504_25)">
      <Path
        d="M1067 553.5C1067 832.68 840.68 1059 561.5 1059C282.32 1059 56 832.68 56 553.5C56 274.32 282.32 48 561.5 48C840.68 48 1067 274.32 1067 553.5Z"
        stroke="white"
        strokeWidth={12}
        shapeRendering="crispEdges"
      />
    </G>
    <Mask
      id="mask0_504_25"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={50}
      y={42}
      width={1023}
      height={1023}
    >
      <Path
        d="M1073 553.5C1073 835.994 843.994 1065 561.5 1065C279.006 1065 50 835.994 50 553.5C50 271.006 279.006 42 561.5 42C843.994 42 1073 271.006 1073 553.5Z"
        fill="#D9D9D9"
      />
    </Mask>
    <G mask="url(#mask0_504_25)">
      <Path
        d="M161.194 856.006L504.771 512.429L591.504 599.162L901.757 288.855"
        stroke="white"
        strokeWidth={28}
        strokeLinecap="square"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M904.371 417.735L952.779 237.076L772.119 285.483L904.371 285.483L904.371 417.735Z"
        fill="white"
      />
    </G>
    <Defs></Defs>
  </Svg>
);

const WaveSvg = (props) => (
  <Svg
    width={428}
    height={66}
    viewBox="0 0 428 66"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M428 23.524L413.733 17.2927C399.467 10.9443 370.933 -1.3429 342.4 0.119856C313.867 1.58262 285.333 17.3804 256.8 23.524C228.267 29.6676 199.733 26.7421 171.2 20.3937C142.667 14.1624 114.133 4.80069 85.6 4.80069C57.0667 4.80069 28.5334 14.1624 14.2667 18.8432L2.03809e-06 23.524V66H14.2667C28.5334 66 57.0667 66 85.6 66C114.133 66 142.667 66 171.2 66C199.733 66 229.863 66 258.396 66C286.93 66 313.867 66 342.4 66C370.933 66 397.771 66 412.037 66H428V23.524Z"
      fill="white"
    />
  </Svg>
);

const EyesOffSvg = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G
      clipPath="url(#a)"
      stroke="#8C8C8C"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.494 18.494 0 0 1-2.16 3.19m-6.72-1.07a2.998 2.998 0 0 1-5.194-2.098A3 3 0 0 1 9.88 9.88M1 1l22 22" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)






export {AskSvg, UserSvg, BarSvg, VectorSvg, PlusSvg, MinusSvg, ExtractSvg, ShinyIconSvg, WaveSvg, EyesOffSvg}




