import * as React from "react"
import Svg, {
  G,
  Path,
  Circle,
  Defs,
  LinearGradient,
  Mask,
  Stop,} from "react-native-svg"


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






export {AskSvg, UserSvg, BarSvg, VectorSvg, PlusSvg, MinusSvg, ExtractSvg}




