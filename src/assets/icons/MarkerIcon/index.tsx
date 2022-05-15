import * as React from "react"
import Svg, { SvgProps, G, Path, Circle } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

const MarkerIcon = (props: SvgProps) => (
    <Svg
        width={36}
        height={36}
        viewBox="-4 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G fill="none" fillRule="evenodd">
            <Path
                d="M14 0c7.732 0 14 5.641 14 12.6C28 23.963 14 36 14 36S0 24.064 0 12.6C0 5.641 6.268 0 14 0Z"
                fill="#FF6E6E"
            />
            <Circle fill="#0C0058" fillRule="nonzero" cx={14} cy={14} r={7} />
        </G>
    </Svg>
)

export default MarkerIcon
