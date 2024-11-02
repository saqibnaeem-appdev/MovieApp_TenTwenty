import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import React, {FC} from 'react';
import {fontFamilies, getFontSize, getHeight, getWidth} from '../lib';
import {Colors} from '../theme';

interface Props extends TouchableOpacityProps {
  type: 'Primary' | 'Secondary';
  title: string;
  width: number;
}
const CustomButton: FC<Props> = ({type, width, title, ...extra}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          width: width ? width : getWidth(60),
        },
        type === 'Primary' && {
          backgroundColor: Colors.Skyblue,
        },
      ]}
      {...extra}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  text: {
    fontSize: getFontSize(14),
    fontFamily: fontFamilies.Popins.bold,
    color: Colors.White,
  },
  container: {
    borderWidth: 2,

    height: getHeight(5),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: Colors.Skyblue,
  },
});
