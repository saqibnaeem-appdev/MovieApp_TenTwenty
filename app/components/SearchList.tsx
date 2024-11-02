import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {FC, useCallback, useEffect, useState} from 'react';
import {MovieListInfoProps} from '../model';
import {fontFamilies, getFontSize, getHeight} from '../lib';
import apiClient from '../config/axiosConfig';
import {apiKey} from '../config/constant';
import MovieListItemSecondary from './MovieListItemSecondary';
import {Colors} from '../theme';

interface Props {
  searchText: string;
}
const SearchList: FC<Props> = ({searchText}) => {
  const [movieList, setMovieList] = useState<
    MovieListInfoProps[] | undefined
  >();

  const searchMovies = useCallback(async () => {
    try {
      const response = await apiClient.get('/search/movie', {
        params: {
          query: searchText,
        },
      });

      setMovieList(response.data.results);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  }, [searchText]);
  useEffect(() => {
    searchMovies();
  }, []);
  return (
    <View style={{flex: 1}}>
      <View style={styles.topContainer}>
        <Text style={styles.text}>Top Results</Text>
      </View>
      <FlatList
        data={movieList}
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
          return <MovieListItemSecondary movie={item} />;
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SearchList;

const styles = StyleSheet.create({
  text: {
    fontWeight: '500',
    fontSize: getFontSize(12),
    color: Colors.TextBlack,
    fontFamily: fontFamilies.Popins.medium,
  },
  topContainer: {
    paddingVertical: getHeight(1.5),
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: Colors.Gainsboro,
    marginBottom: 5,
  },
});
