import React, {useState, useMemo, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';
import ScreenIcon from '../assets/svg/ScreenIcon';
import Seat from '../assets/svg/Seat';
import {fontFamilies, getFontSize, getHeight, getWidth} from '../lib';
import {Colors} from '../theme';
import HeaderCom from '../components/headerCom';
import CustomButton from '../components/CustomButton';
import MapSeatIcon from '../assets/svg/MapSeatIcon';
import {RootStackRoots} from '../lib/Constants';

const TicketBooking = () => {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState(null);

  const dummyData = [
    {
      id: 1,
      time: '12:30',
      date: '5 Mar',
      address: 'Cinetech + Hall 1',
      from: '$50',
      bonus: '2500 bonus',
    },
    {
      id: 2,
      time: '14:00',
      date: '5 Mar',
      address: 'Cinetech + Hall 2',
      from: '$60',
      bonus: '3000 bonus',
    },
    {
      id: 3,
      time: '16:00',
      date: '6 Mar',
      address: 'Cinetech + Hall 3',
      from: '$70',
      bonus: '3500 bonus',
    },
    {
      id: 4,
      time: '18:30',
      date: '7 Mar',
      address: 'Cinetech + Hall 4',
      from: '$80',
      bonus: '4000 bonus',
    },
    {
      id: 5,
      time: '12:30',
      date: '8 Mar',
      address: 'Cinetech + Hall 1',
      from: '$55',
      bonus: '2600 bonus',
    },
    {
      id: 6,
      time: '14:00',
      date: '8 Mar',
      address: 'Cinetech + Hall 2',
      from: '$65',
      bonus: '3100 bonus',
    },
    {
      id: 7,
      time: '16:30',
      date: '9 Mar',
      address: 'Cinetech + Hall 3',
      from: '$75',
      bonus: '3200 bonus',
    },
    {
      id: 8,
      time: '18:00',
      date: '10 Mar',
      address: 'Cinetech + Hall 4',
      from: '$85',
      bonus: '3300 bonus',
    },
    {
      id: 9,
      time: '12:30',
      date: '11 Mar',
      address: 'Cinetech + Hall 1',
      from: '$90',
      bonus: '3500 bonus',
    },
    {
      id: 10,
      time: '14:00',
      date: '11 Mar',
      address: 'Cinetech + Hall 2',
      from: '$95',
      bonus: '3600 bonus',
    },
    {
      id: 11,
      time: '16:00',
      date: '12 Mar',
      address: 'Cinetech + Hall 3',
      from: '$100',
      bonus: '3700 bonus',
    },
    {
      id: 12,
      time: '18:30',
      date: '12 Mar',
      address: 'Cinetech + Hall 4',
      from: '$105',
      bonus: '3800 bonus',
    },
    {
      id: 13,
      time: '12:30',
      date: '13 Mar',
      address: 'Cinetech + Hall 1',
      from: '$110',
      bonus: '3900 bonus',
    },
    {
      id: 14,
      time: '14:00',
      date: '13 Mar',
      address: 'Cinetech + Hall 2',
      from: '$115',
      bonus: '4000 bonus',
    },
    {
      id: 15,
      time: '16:00',
      date: '14 Mar',
      address: 'Cinetech + Hall 3',
      from: '$120',
      bonus: '4200 bonus',
    },
  ];

  // Generate unique dates only once
  const uniqueDates = useMemo(
    () => Array.from(new Set(dummyData.map(item => item.date))),
    [dummyData],
  );

  // Memoize filtered data based on selectedDate
  const filteredData = useMemo(() => {
    return selectedDate
      ? dummyData.filter(item => item.date === selectedDate)
      : dummyData;
  }, [selectedDate, dummyData]);

  // Memoized function for rendering date items
  const renderDateItem = useCallback(
    ({item}) => (
      <TouchableOpacity
        style={[
          styles.chip,
          {
            backgroundColor:
              selectedDate === item ? Colors.Skyblue : Colors.White,
            borderColor: Colors.Skyblue,
            borderWidth: 1,
          },
        ]}
        onPress={() => setSelectedDate(item)}>
        <Text
          style={{color: selectedDate === item ? Colors.White : Colors.Black}}>
          {item}
        </Text>
      </TouchableOpacity>
    ),
    [selectedDate],
  );

  // Memoized function for rendering ticket items
  const renderTicketItem = useCallback(
    ({item}) => (
      <View style={styles.itemContainer}>
        <View style={styles.row}>
          <Text style={styles.fromText}>{item.time}</Text>
          <Text style={styles.text}>{item.address}</Text>
        </View>
        <View style={styles.detailContainer}>
          <MapSeatIcon />
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>
            from <Text style={styles.fromText}>{item.from}</Text>
          </Text>
          <Text style={styles.text}>
            or <Text style={styles.fromText}>{item.bonus}</Text>
          </Text>
        </View>
      </View>
    ),
    [],
  );

  return (
    <View style={styles.contentView}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.White} />
      <HeaderCom
        onPress={() => navigation.goBack()}
        title={'The King’s Man'}
        description={'In theaters December 22, 2021'}
      />

      <View style={{height: getHeight(80), justifyContent: 'center'}}>
        <View>
          <Text style={styles.dateTitle}>Date</Text>
          <FlatList
            data={uniqueDates}
            renderItem={renderDateItem}
            keyExtractor={item => item}
            horizontal
            showsHorizontalScrollIndicator={false}
          />

          <FlatList
            data={filteredData}
            renderItem={renderTicketItem}
            keyExtractor={item => item.id.toString()}
            horizontal
            initialNumToRender={5}
            maxToRenderPerBatch={5}
            windowSize={5}
          />
        </View>
      </View>
      <View style={styles.buttonView}>
        <CustomButton
          title="Select Seats"
          type="Primary"
          width={getWidth(90)}
          onPress={() => navigation.navigate(RootStackRoots.ticketSelection)}
        />
      </View>
    </View>
  );
};

export default TicketBooking;

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
    top: Platform.OS === 'android' ? 0 : getHeight(5),
  },
  dateTitle: {
    fontSize: getFontSize(16),
    marginVertical: getHeight(1),
    marginHorizontal: getWidth(5),
    fontFamily: fontFamilies.Popins.medium,
  },
  chip: {
    borderRadius: getWidth(3),
    marginHorizontal: getWidth(5),
    height: getHeight(4),
    paddingHorizontal: getWidth(3),
    justifyContent: 'center',
  },
  itemContainer: {
    marginHorizontal: getWidth(5),
    marginVertical: getHeight(1),
  },
  detailContainer: {
    backgroundColor: Colors.White,
    borderRadius: getWidth(2),
    padding: getHeight(2),
    alignItems: 'center',
    borderColor: Colors.Skyblue,
    borderWidth: 2,
    width: getWidth(50),
  },
  row: {
    flexDirection: 'row',
    gap: getWidth(1),
    marginVertical: getHeight(1),
  },
  timeDateText: {
    fontSize: getFontSize(12),
    color: Colors.TextBlack,
    fontFamily: fontFamilies.Popins.normal,
  },
  fromText: {
    fontSize: getFontSize(12),
    fontFamily: fontFamilies.Popins.bold,
    color: Colors.TextBlack,
  },
  text: {
    fontSize: getFontSize(12),
    fontFamily: fontFamilies.Popins.normal,
    color: Colors.LightText,
  },
  buttonView: {
    position: 'absolute',
    bottom: getHeight(10),
    alignSelf: 'center',
  },
});
