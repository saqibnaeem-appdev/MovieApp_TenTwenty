import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {SvgProps} from '../../model';
import {Circle, Svg} from 'react-native-svg';

const DashBoardIconSvg: FC<SvgProps> = ({height, width, color = '#827D88'}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <Circle cx="13" cy="3" r="3" fill={color} />
      <Circle cx="13" cy="13" r="3" fill={color} />
      <Circle cx="3" cy="13" r="3" fill={color} />
      <Circle cx="3" cy="3" r="3" fill={color} />
    </Svg>
  );
};

export default DashBoardIconSvg;

const styles = StyleSheet.create({});
