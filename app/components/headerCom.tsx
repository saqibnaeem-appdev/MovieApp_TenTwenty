import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {fontFamilies, getFontSize, getWidth} from '../lib';
import BackIcon from '../assets/svg/BackIcon';
import {Colors} from '../theme';

const HeaderCom = ({title, description, onPress}) => {
  return (
    <View style={styles.mainHeaderView}>
      <View style={styles.rowView}>
        <TouchableOpacity onPress={onPress}>
          <BackIcon />
        </TouchableOpacity>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.text}>{title}</Text>
          <Text style={[styles.text, {color: Colors.Skyblue}]}>
            {description}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HeaderCom;

const styles = StyleSheet.create({
  mainHeaderView: {
    paddingHorizontal: getWidth(5),
    paddingVertical: getWidth(2),
    backgroundColor: Colors.White,
  },
  rowView: {
    flexDirection: 'row',
    gap: getWidth(10),
    alignItems: 'center',
  },
  text: {
    fontFamily: fontFamilies.Popins.medium,
    color: Colors.TextBlack,
    fontSize: getFontSize(12),
  },
});
