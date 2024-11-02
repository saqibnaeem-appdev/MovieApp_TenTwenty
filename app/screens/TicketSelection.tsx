import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  Platform,
} from 'react-native';
import ScreenIcon from '../assets/svg/ScreenIcon';
import Seat from '../assets/svg/Seat';
import {fontFamilies, getFontSize, getHeight, getWidth} from '../lib';
import {Colors} from '../theme';
import HeaderCom from '../components/headerCom';
import CustomButton from '../components/CustomButton';
import MapSeatIcon from '../assets/svg/MapSeatIcon';

const TicketSelection = () => {
  const navigation = useNavigation();
  const pricePlan = [
    {
      id: 1,
      color: '#CD9D0F',
      planName: 'Selected',
    },
    {
      id: 2,
      color: '#A6A6A6',
      planName: 'Not available',
    },
    {
      id: 3,
      color: '#564CA3',
      planName: 'VIP (150$)',
    },
    {
      id: 4,
      color: '#61C3F2',
      planName: 'Regular (50 $)',
    },
  ];

  return (
    <View style={styles.contentView}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.White} />
      <HeaderCom
        onPress={() => navigation.goBack()}
        title={'The King’s Man'}
        description={'In theaters December 22, 2021'}
      />
      <View style={styles.ticketView}>
        <ScreenIcon width={getWidth(90)} height={getHeight(45)} />
        <View style={styles.zoomButtonView}>
          <View style={styles.zoomButton}>
            <Text
              style={[
                styles.text,
                {
                  fontFamily: fontFamilies.Popins.medium,
                  color: Colors.TextBlack,
                  fontSize: getFontSize(15),
                },
              ]}>
              +
            </Text>
          </View>
          <View style={styles.zoomButton}>
            <Text
              style={[
                styles.text,
                {
                  fontFamily: fontFamilies.Popins.medium,
                  color: Colors.TextBlack,
                  fontSize: getFontSize(15),
                },
              ]}>
              -
            </Text>
          </View>
        </View>
        <View style={styles.divider} />
      </View>
      <View style={styles.priceView}>
        <View style={{marginVertical: getHeight(2)}}>
          <FlatList
            data={pricePlan}
            numColumns={2}
            renderItem={({item}) => (
              <View style={styles.priceIcon}>
                <Seat color={item?.color} />
                <Text style={styles.text}>{item?.planName}</Text>
              </View>
            )}
            keyExtractor={item => item?.id?.toString()}
          />
        </View>
        <View style={{marginVertical: getHeight(3)}}>
          <View style={styles.chipView}>
            <Text
              style={[
                styles.text,
                {fontFamily: fontFamilies.Popins.bold, color: Colors.TextBlack},
              ]}>
              4 / <Text style={styles.text}>3 row</Text>
              {'      '}
              <Text
                style={[
                  styles.text,
                  {
                    fontFamily: fontFamilies.Popins.bold,
                    color: Colors.TextBlack,
                    fontSize: getFontSize(20),
                  },
                ]}>
                ⨯
              </Text>
            </Text>
          </View>
        </View>
        <View style={styles.buttonView}>
          <View style={styles.textView}>
            <Text style={styles.text}>Total Price</Text>
            <Text
              style={[
                styles.text,
                {fontFamily: fontFamilies.Popins.bold, color: Colors.TextBlack},
              ]}>
              $ 50
            </Text>
          </View>
          <CustomButton
            title="Proceed to pay"
            type="Primary"
            width={getWidth(60)}
            onPress={() => Alert.alert('Payment completed')}
          />
        </View>
      </View>
    </View>
  );
};

export default TicketSelection;

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
    top: Platform.OS === 'android' ? 0 : getHeight(5),
  },

  text: {
    fontSize: getFontSize(10),
    fontFamily: fontFamilies.Popins.normal,
    color: Colors.LightText,
  },
  buttonView: {
    alignSelf: 'center',
    flexDirection: 'row',
    gap: getWidth(3),
    marginVertical: getHeight(2),
  },
  textView: {
    height: getHeight(5),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: Colors.Whisper,
    paddingHorizontal: getWidth(3),
  },
  priceView: {
    backgroundColor: Colors.White,
    bottom: 50,
    position: 'absolute',
    alignSelf: 'center',
    width: getWidth(100),
  },
  priceIcon: {
    flexDirection: 'row',
    width: getWidth(30),
    height: getHeight(5),
    gap: getWidth(2),
    marginHorizontal: getWidth(5),
    alignItems: 'center',
  },
  chipView: {
    height: getHeight(3),
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: Colors.Whisper,
    paddingHorizontal: getWidth(3),
    width: getWidth(25),
    marginHorizontal: getWidth(5),
  },
  ticketView: {
    width: getWidth(100),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    gap: getHeight(1),
  },
  divider: {
    height: getHeight(0.5),
    width: getWidth(80),
    borderRadius: 10,
    backgroundColor: '#202C43',
  },
  zoomButton: {
    backgroundColor: Colors.White,
    width: 30,
    height: 30,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  zoomButtonView: {
    width: getWidth(90),
    flexDirection: 'row',
    gap: getWidth(3),
    justifyContent: 'flex-end',
    marginVertical: getHeight(2),
  },
});
