import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {FC, useCallback, useEffect, useState} from 'react';
import {MovieListInfoProps} from '../model';
import {getHeight} from '../lib';
import MovieListItem from './MovieListItem';
import apiClient from '../config/axiosConfig';

const MainFlatList: FC = () => {
  const [movieList, setMovieList] = useState<
    MovieListInfoProps[] | undefined
  >();
  const [isLoading, setIsloading] = useState(true);
  const fetchMovies = useCallback(async () => {
    try {
      const response = await apiClient.get('/movie/upcoming');
      setMovieList(response.data?.results);
      setIsloading(false);
    } catch (error) {
      console.error('Error fetching upcoming movies:', error);
    }
  }, []);

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <FlatList
      data={movieList ?? [null, null, null]}
      ItemSeparatorComponent={() => {
        return (
          <View
            style={{
              height: getHeight(2),
              width: '100%',
            }}
          />
        );
      }}
      renderItem={({item}) => {
        return <MovieListItem movie={item} isLoading={isLoading} />;
      }}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default MainFlatList;

const styles = StyleSheet.create({});
