import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashBoardScreen from '../screens/bottomtab/DashBoardScreen';
import {BottomTabRoots} from '../lib/Constants';
import WatchScreen from '../screens/bottomtab/WatchScreen';
import MediaLibraryScreen from '../screens/bottomtab/MediaLibraryScreen';
import MoreScreen from '../screens/bottomtab/MoreScreen';
import {fontFamilies, getFontSize} from '../lib';
import {Colors} from '../theme';
import DashBoardIconSvg from '../assets/svg/DashBoardIconSvg';
import WatchIconSvg from '../assets/svg/WatchIconSvg';
import MediaLibraryIconSvg from '../assets/svg/MediaLibraryIconSvg';
import MoreIconSvg from '../assets/svg/MoreIconSvg';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.White,
        tabBarInactiveTintColor: Colors.Slate,
        tabBarLabelStyle: {
          fontSize: getFontSize(8),
          fontFamily: fontFamilies.Popins.normal,
        },
        tabBarStyle: {
          backgroundColor: Colors.Charcoal,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
          borderTopEndRadius: 27,
          borderTopStartRadius: 27,
          // position: 'absolute',
        },
        tabBarHideOnKeyboard: true,
        tabBarItemStyle: {
          paddingTop: 5, // Add padding from the top
        },
      }}>
      <Tab.Screen
        name={BottomTabRoots.dashboard}
        component={DashBoardScreen}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color, size, focused}) => (
            <DashBoardIconSvg width={size} height={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={BottomTabRoots.watch}
        component={WatchScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Watch',
          tabBarIcon: ({color, size, focused}) => (
            <WatchIconSvg width={size} height={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={BottomTabRoots.mediaLibrary}
        component={MediaLibraryScreen}
        options={{
          tabBarLabel: 'Media Library',
          tabBarIcon: ({color, size, focused}) => (
            <MediaLibraryIconSvg width={size} height={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={BottomTabRoots.more}
        component={MoreScreen}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({color, size, focused}) => (
            <MoreIconSvg width={size} height={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
