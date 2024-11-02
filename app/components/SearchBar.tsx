import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useRef, useEffect, FC} from 'react';
import SearchIconSvg from '../assets/svg/SearchIconSvg';
import {fontFamilies, getFontSize, getWidth} from '../lib';
import {Colors} from '../theme';
import CloseIconSvg from '../assets/svg/CloseIconSvg';

interface Props extends TextInputProps {
  onclose: () => void;
}
const SearchBar: FC<Props> = ({onclose, ...extra}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const textInputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (isActive && textInputRef.current) {
      textInputRef.current.focus();
    }
  }, [isActive]);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        {isActive ? (
          <View style={styles.searchContainer}>
            <SearchIconSvg height={getWidth(5)} width={getWidth(5)} />
            <TextInput
              ref={textInputRef}
              placeholder="TV shows, movies and more"
              style={styles.textInput}
              {...extra}
            />
            <TouchableOpacity
              onPress={() => {
                onclose();
                setIsActive(false);
              }}>
              <CloseIconSvg height={getWidth(5)} width={getWidth(5)} />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.contentContainer}>
            <Text style={styles.heading}>Watch</Text>
            <TouchableOpacity onPress={() => setIsActive(true)}>
              <SearchIconSvg height={getWidth(5)} width={getWidth(5)} />
            </TouchableOpacity>
          </View>
        )}
      </SafeAreaView>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '5%',
    backgroundColor: Colors.White,
    paddingBottom: 10,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: getFontSize(16),
    fontWeight: '500',
    fontFamily: fontFamilies.Popins.medium,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.Whisper,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 30,
    gap: 10,
  },
  textInput: {
    flex: 1,
    fontFamily: fontFamilies.Popins.normal,
    color: Colors.TextBlack,
  },
});
