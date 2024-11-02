export const RootStackRoots = {
  bottomTab: 'BottomTab',
  movieDetail: 'MovieDetailScreen',
};
export const BottomTabRoots = {
  dashboard: 'DashBoardScreen',
  watch: 'WatchScreen',
  mediaLibrary: 'MediaLibrary',
  more: 'More',
};

export const SKeletonCommonProps = {
  colorMode: 'light',
  backgroundColor: '#D4D4D4',
  transition: {
    type: 'timing',
    duration: 2000,
  },
} as const;
