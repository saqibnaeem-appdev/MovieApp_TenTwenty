import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {MovieListInfoProps} from '../model';
import {fontFamilies, getFontSize, getHeight, getWidth} from '../lib';
import {imagesBaseUrl} from '../config/constant';
import {RootStackRoots} from '../lib/Constants';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../theme';
interface Props {
  movie: MovieListInfoProps;
}
const MovieListItemSecondary: FC<Props> = ({movie}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(RootStackRoots.movieDetail, {id: movie.id})
      }
      style={styles.container}>
      <Image
        source={{uri: imagesBaseUrl + movie.backdrop_path}}
        resizeMode="cover"
        style={styles.image}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
      <TouchableOpacity style={styles.row}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default MovieListItemSecondary;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: getWidth(90),
    alignSelf: 'center',
    gap: 5,
  },
  image: {
    width: '40%',
    height: getHeight(15),
    borderRadius: 10,
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: getFontSize(12),
    fontWeight: '500',
    fontFamily: fontFamilies.Popins.normal,
  },
  row: {
    flexDirection: 'row',
    gap: 2,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: Colors.Skyblue,
  },
});
