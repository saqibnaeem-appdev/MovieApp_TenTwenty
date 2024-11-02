import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import apiClient from '../config/axiosConfig';
import {MovieDetailProps} from '../model';
import {Colors} from '../theme';
import {imagesBaseUrl} from '../config/constant';
import {
  fontFamilies,
  getFontSize,
  getHeight,
  getRandomColor,
  getWidth,
} from '../lib';
import CustomButton from '../components/CustomButton';
import useOrientation from '../hooks/useOrientation';
import VideoPlayer from '../components/VideoPlayer';
import {RootStackRoots} from '../lib/Constants';
import {useNavigation} from '@react-navigation/native';

const MovieDetailScreen = ({route}: any) => {
  const {id} = route.params;
  const navigation = useNavigation();

  const [movieDetail, setMovieDetail] = useState<
    undefined | MovieDetailProps
  >();
  const [videoUrl, setVideoUrl] = useState<undefined | string>();

  const isLandscape = useOrientation();

  const handleWatchTrailer = useCallback(async () => {
    try {
      const res = await apiClient.get(`/movie/${id}/videos`);
      // console.log(res.data);
      setVideoUrl(res.data.results[0].key);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [id]);
  const fetchMovies = useCallback(async () => {
    try {
      const [movieResponse, imagesResponse] = await Promise.all([
        apiClient.get(`/movie/${id}`),
        apiClient.get(`/movie/${id}/images`),
      ]);

      setMovieDetail(prev => ({
        ...movieResponse.data,
        backdrop_path:
          imagesResponse.data?.backdrops[1]?.file_path ??
          movieResponse.data.backdrop_path,
      }));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [id]);

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <ScrollView
      contentContainerStyle={[
        styles.screenContainer,
        {flexDirection: isLandscape ? 'row' : 'column'},
      ]}>
      <ImageBackground
        resizeMode="stretch"
        style={styles.imageContainer}
        source={{
          uri: imagesBaseUrl + movieDetail?.backdrop_path,
        }}>
        <View
          style={[
            {
              flex: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              alignItems: 'center',
              paddingBottom: 20,
            },
            styles.imageContainer,
          ]}>
          <Text style={styles.whiteText}>
            In theaters{' '}
            {movieDetail?.release_date &&
              new Date(movieDetail?.release_date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
          </Text>
          <CustomButton
            title="Get Tickets"
            type="Primary"
            onPress={() => navigation.navigate(RootStackRoots.ticketBooking)}
          />
          <CustomButton
            onPress={handleWatchTrailer}
            title="Watch Trailer"
            type="Secondary"
          />
        </View>
      </ImageBackground>
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>Genres</Text>
        <View style={styles.genresContainer}>
          {movieDetail?.genres.map(item => (
            <View
              style={[
                styles.genreaItem,
                {
                  backgroundColor: getRandomColor(),
                },
              ]}
              key={item.id}>
              <Text style={styles.genreaItemText}>{item.name}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.heading}>Overview</Text>
        <Text style={styles.overview}>{movieDetail?.overview}</Text>
      </View>

      <VideoPlayer
        visible={videoUrl !== undefined}
        onClose={() => setVideoUrl(undefined)}
        videoKey={videoUrl ?? ''}
      />
    </ScrollView>
  );
};

export default MovieDetailScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    // alignItems: 'center',
    gap: 5,
  },
  contentContainer: {
    flex: 1,
    paddingVertical: getHeight(1),
    paddingHorizontal: getWidth(10),
  },
  heading: {
    fontSize: getFontSize(16),
    fontFamily: fontFamilies.Popins.medium,
    color: Colors.TextBlack,
    fontWeight: '500',
  },
  genreaItem: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 16,
  },
  genresContainer: {
    flexDirection: 'row',
    gap: 10,
    padding: 20,
    borderBottomWidth: 1,
    borderColor: Colors.Gainsboro,
    flexWrap: 'wrap',
    marginBottom: 5,
  },
  genreaItemText: {
    color: Colors.White,
    fontFamily: fontFamilies.Popins.normal,
  },
  overview: {
    fontSize: getFontSize(12),
    fontFamily: fontFamilies.Popins.normal,
    color: Colors.LightText,
    textAlign: 'left',
  },
  whiteText: {
    fontSize: getFontSize(16),
    color: Colors.White,
    fontFamily: fontFamilies.Popins.normal,
    fontWeight: '500',
  },
});
