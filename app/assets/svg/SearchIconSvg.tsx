import React, {FC} from 'react';
import {SvgProps} from '../../model';
import {Path, Rect, Svg} from 'react-native-svg';

const SearchIconSvg: FC<SvgProps> = ({height, width, color = '#202C43'}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 15 15" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.7128 13.3588L10.6602 9.30606C11.3773 8.35641 11.8026 7.17399 11.8026 5.89224C11.8026 2.76079 9.2641 0.222244 6.13265 0.222244C3.00119 0.222244 0.462646 2.76079 0.462646 5.89224C0.462646 9.0237 3.00119 11.5622 6.13265 11.5622C7.4144 11.5622 8.59681 11.1369 9.54647 10.4198L13.5992 14.4724L14.7128 13.3588ZM10.2276 5.89225C10.2276 8.15385 8.39418 9.98725 6.13258 9.98725C3.87097 9.98725 2.03758 8.15385 2.03758 5.89225C2.03758 3.63064 3.87097 1.79725 6.13258 1.79725C8.39418 1.79725 10.2276 3.63064 10.2276 5.89225Z"
        fill={color}
      />
    </Svg>
  );
};

export default SearchIconSvg;
