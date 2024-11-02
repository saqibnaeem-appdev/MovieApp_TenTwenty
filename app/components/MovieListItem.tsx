import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC} from 'react';
import {MovieListInfoProps} from '../model';
import {imagesBaseUrl} from '../config/constant';
import {fontFamilies, getFontSize, getHeight} from '../lib';
import {Colors} from '../theme';
import {useNavigation} from '@react-navigation/native';
import {RootStackRoots, SKeletonCommonProps} from '../lib/Constants';
import {Skeleton} from 'moti/skeleton';

interface Props {
  movie?: MovieListInfoProps | null;
  isLoading: boolean;
}
const MovieListItem: FC<Props> = ({movie, isLoading}) => {
  const navigation = useNavigation();
  return (
    <Skeleton
      width={'98%'}
      show={isLoading}
      height={getHeight(25)}
      {...SKeletonCommonProps}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(RootStackRoots.movieDetail, {id: movie?.id})
        }
        style={{width: '95%', alignSelf: 'center'}}>
        <ImageBackground
          source={{uri: imagesBaseUrl + movie?.backdrop_path}}
          resizeMode="cover"
          style={styles.container}>
          <View
            style={[
              {flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.2)'},
              styles.container,
            ]}>
            <Text style={styles.text}>{movie?.title}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </Skeleton>
  );
};

export default MovieListItem;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
    height: getHeight(25),
    borderRadius: 10,
    overflow: 'hidden',
    resizeMode: 'cover',

    justifyContent: 'flex-end',
  },
  text: {
    fontSize: getFontSize(18),
    color: Colors.White,
    fontWeight: '500',
    fontFamily: fontFamilies.Popins.normal,
    paddingLeft: 20,
    paddingBottom: 20,
  },
});
