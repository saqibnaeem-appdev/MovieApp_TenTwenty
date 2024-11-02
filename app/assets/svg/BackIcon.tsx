import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const BackIcon = props => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path d="M18.75 22.5L11.25 15L18.75 7.5" stroke="black" strokeWidth={2} />
  </Svg>
);
export default BackIcon;
