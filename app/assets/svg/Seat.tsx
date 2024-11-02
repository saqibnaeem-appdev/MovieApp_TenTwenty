import React, {FC} from 'react';
import {SvgProps} from '../../model';
import {Path, Rect, Svg} from 'react-native-svg';

const Seat: FC<SvgProps> = ({height, width, color = '#202C43'}) => {
  return (
    <Svg width={18} height={17} viewBox="0 0 18 17" fill="none">
      <Rect width={17.012} height={12.759} rx={2} fill={color} />
      <Rect
        x={2.55182}
        y={13.6096}
        width={11.9084}
        height={2.5518}
        rx={1.2759}
        fill={color}
      />
    </Svg>
  );
};

export default Seat;
