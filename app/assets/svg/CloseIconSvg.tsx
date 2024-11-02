import React, {FC} from 'react';
import {SvgProps} from '../../model';
import {Path, Rect, Svg} from 'react-native-svg';

const CloseIconSvg: FC<SvgProps> = ({height, width, color = '#202C43'}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 30 30" fill="none">
      <Path
        d="M7.5 7.5L22.5 22.5"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M7.5 22.5L22.5 7.5"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default CloseIconSvg;
