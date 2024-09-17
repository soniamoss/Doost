import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ContactIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#3D4353"
      d="M17 11h1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1ZM6 12h5a1 1 0 0 0 0-2H6a1 1 0 0 0 0 2Zm16-8H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Zm-1 14H3V6h18v12ZM6 16h5a1 1 0 0 0 0-2H6a1 1 0 0 0 0 2Z"
    />
  </Svg>
);
export default ContactIcon;
