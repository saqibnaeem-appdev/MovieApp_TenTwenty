import {
  widthPercentageToDP as wd,
  heightPercentageToDP as hd,
} from 'react-native-responsive-screen';

import {PixelRatio, Dimensions, Platform} from 'react-native';

const ratio = PixelRatio.get();

export const isIOS = (): boolean => Platform.OS === 'ios';
export const getWidth = (width: number) => wd(width);

export const getHeight = (height: number) => hd(height);

export const getFontSize = (size: number) => {
  const {width, height} = Dimensions.get('window');

  if (ratio >= 2 && ratio < 3) {
    if (width < 360) {
      return size * 0.95;
    } else if (height < 667) {
      return size;
    } else if (height >= 667 && height <= 735) {
      return size * 1.15;
    }

    return size * 1.25;
  } else if (ratio >= 3 && ratio < 3.5) {
    if (width < 360) {
      return size;
    } else if (height < 667) {
      return size * 1.15;
    } else if (height >= 667 && height <= 735) {
      return size * 1.2;
    }

    return size * 1.27;
  } else if (ratio >= 3.5) {
    if (width < 360) {
      return size;
    } else if (height < 667) {
      return size * 1.2;
    } else if (height >= 667 && height <= 735) {
      return size * 1.25;
    }

    return size * 1.4;
  }

  return size;
};

export const getRandomColor: () => string = () => {
  const colors = ['#15D2BC', '#E26CA5', '#564CA3', '#CD9D0F'];

  // Generate a random index to select a color from the array
  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

export const fontFamilies = {
  Popins: {
    normal: isIOS() ? 'Poppins-Regular' : 'PoppinsRegular',
    medium: isIOS() ? 'Poppins-Medium' : 'PoppinsMedium',
    bold: isIOS() ? 'Poppins-Bold' : 'PoppinsBold',
  },
};
