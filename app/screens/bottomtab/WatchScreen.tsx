import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../theme';

import SearchBar from '../../components/SearchBar';
import MainFlatList from '../../components/MainFlatList';
import SearchList from '../../components/SearchList';

const WatchScreen = () => {
  const [searchQuery, setSearchQuery] = useState<string | undefined>();
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const handleSearch = (query: string) => {
    if (!query) {
      setSearchQuery(undefined);
      setIsSearching(false);
      return;
    }

    setSearchQuery(query);
    setIsSearching(true);
  };

  return (
    <View style={styles.screenContainer}>
      <SearchBar onChangeText={handleSearch} onclose={() => handleSearch('')} />
      {isSearching ? (
        <SearchList searchText={searchQuery ?? ''} />
      ) : (
        <MainFlatList />
      )}
    </View>
  );
};

export default WatchScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.Whisper,
  },
});
