import * as React from "react";
import Svg, {
  G,
  Path,
  Circle,
  Defs,
  LinearGradient,
  Mask,
  Stop,
  ClipPath,
  Ellipse,
  Rect,
  Line,
} from "react-native-svg";

const AskSvg = (props) => (
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
);

const UserSvg = (props) => {
  return (
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
  );
};

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
);

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
);

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
);

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
);

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
);

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
);

const WalletSvg = (props) => (
  <Svg
    width={35}
    height={35}
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    accessibilityRole="image"
    {...props}
  >
    <Rect y={5.42261} width={32.3077} height={29.5775} rx={3} fill="#2D1069" />
    <Line
      x1={2.69238}
      y1={9.35205}
      x2={32.3078}
      y2={9.35205}
      stroke="white"
      strokeWidth={2}
    />
    <Path
      d="M26.5259 21.1971C26.5259 19.2952 28.0677 17.7534 29.9695 17.7534H34.5002V24.6407H29.9695C28.0677 24.6407 26.5259 23.099 26.5259 21.1971Z"
      fill="#2D1069"
      stroke="white"
    />
    <Ellipse
      cx={29.6152}
      cy={21.1971}
      rx={0.897436}
      ry={0.985915}
      fill="#2D1069"
    />
    <Path
      d="M26.5697 3.09763C27.3449 2.82585 28.1944 3.22809 28.4755 3.99995L30.2473 8.86629H10.1167L26.5697 3.09763Z"
      fill="#2D1069"
      stroke="white"
    />
    <Path
      d="M19.6228 1.30795C20.3346 0.945548 21.2056 1.20458 21.6037 1.89708L25.6102 8.8662H4.77657L19.6228 1.30795Z"
      fill="#2D1069"
      stroke="white"
    />
  </Svg>
);

const CalculatorSvg = (props) => (
  <Svg
    width={35}
    height={35}
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    accessibilityRole="image"
    {...props}
  >
    <Rect
      x={1}
      y={1}
      width={33}
      height={33}
      rx={4}
      fill="#2D1069"
      stroke="white"
      strokeWidth={2}
    />
    <Rect x={5} y={5} width={25} height={5} rx={1} fill="white" />
    <Rect x={8} y={12} width={5} height={4.5} rx={1} fill="white" />
    <Rect x={22} y={12} width={5} height={4.5} rx={1} fill="white" />
    <Rect x={15} y={12} width={5} height={4.5} rx={1} fill="white" />
    <Rect x={8} y={19} width={5} height={4.5} rx={1} fill="white" />
    <Rect x={22} y={19} width={5} height={4.5} rx={1} fill="white" />
    <Rect x={15} y={19} width={5} height={4.5} rx={1} fill="white" />
    <Rect x={8} y={26} width={5} height={4.5} rx={1} fill="white" />
    <Rect x={22} y={26} width={5} height={4.5} rx={1} fill="white" />
    <Rect x={15} y={26} width={5} height={4.5} rx={1} fill="white" />
  </Svg>
);

const VideoSvg = (props) => (
  <Svg
    width={35}
    height={35}
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    accessibilityRole="image"
    {...props}
  >
    <Rect
      x={1}
      y={1}
      width={33}
      height={33}
      rx={4}
      fill="#2D1069"
      stroke="white"
      strokeWidth={2}
    />
    <Path
      d="M23.5 20.634C24.1667 21.0189 24.1667 21.9811 23.5 22.366L15.25 27.1292C14.5833 27.5141 13.75 27.0329 13.75 26.2631V16.7369C13.75 15.9671 14.5833 15.4859 15.25 15.8708L23.5 20.634Z"
      fill="white"
    />
    <Line y1={9} x2={33} y2={9} stroke="white" strokeWidth={2} />
    <Line x1={1.62371} y1={8.67075} x2={8.62371} y2={0.670747} stroke="white" />
    <Line x1={14.6237} y1={9.67075} x2={21.6237} y2={1.67075} stroke="white" />
    <Line x1={28.552} y1={9.60944} x2={33.6955} y2={3.732} stroke="white" />
    <Line x1={21.6237} y1={9.67075} x2={28.6237} y2={1.67075} stroke="white" />
    <Line x1={8.62371} y1={8.67075} x2={15.6237} y2={0.670747} stroke="white" />
  </Svg>
);

const BackSvg = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    accessibilityRole="image"
    {...props}
  >
    <Circle
      cx={12}
      cy={12}
      r={11}
      fill="white"
      stroke="#5B2FB6"
      strokeWidth={2}
    />
    <Path
      d="M6.3636 11.3636C6.01213 11.7151 6.01213 12.2849 6.3636 12.6364L12.0912 18.364C12.4426 18.7154 13.0125 18.7154 13.364 18.364C13.7154 18.0125 13.7154 17.4426 13.364 17.0912L8.27279 12L13.364 6.90883C13.7154 6.55736 13.7154 5.98751 13.364 5.63604C13.0125 5.28457 12.4426 5.28457 12.0912 5.63604L6.3636 11.3636ZM18 11.1L7 11.1V12.9L18 12.9V11.1Z"
      fill="#5B2FB6"
    />
  </Svg>
);

const PencilSvg = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M5.02178 22.1364L2.38245 19.4365L20.2861 1.07408C20.479 0.876176 20.7923 0.875968 20.9856 1.07362L22.8235 2.9538C23.0156 3.15029 23.0167 3.46852 22.826 3.66638L5.02178 22.1364Z"
      fill="white"
      stroke="#5B2FB6"
    />
    <Path
      d="M0.786 23.3087L1.87239 20.3451L4.04518 22.5678L0.786 23.3087Z"
      fill="white"
      stroke="#5B2FB6"
    />
  </Svg>
);

export {
  AskSvg,
  UserSvg,
  BarSvg,
  VectorSvg,
  PlusSvg,
  MinusSvg,
  ExtractSvg,
  ShinyIconSvg,
  WaveSvg,
  EyesOffSvg,
  WalletSvg,
  CalculatorSvg,
  VideoSvg,
  BackSvg, 
  PencilSvg
};
