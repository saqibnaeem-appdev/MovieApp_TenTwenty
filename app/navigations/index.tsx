import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashBoardScreen from '../screens/bottomtab/DashBoardScreen';
import BottomTab from './BottomTab';
import {RootStackRoots} from '../lib/Constants';
import MovieDetailScreen from '../screens/MovieDetailScreen';
import TicketBooking from '../screens//TicketBooking';
import {Colors} from '../theme';
import TicketSelection from '../screens/TicketSelection';
const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={RootStackRoots.bottomTab}
          component={BottomTab}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTransparent: true,
            headerTitleStyle: {
              color: Colors.White,
            },
            headerTitleAlign: 'left',
            headerBackTitleVisible: false,
            headerTitle: 'Movie',
            headerTintColor: Colors.White,
          }}
          name={RootStackRoots.movieDetail}
          component={MovieDetailScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={RootStackRoots.ticketBooking}
          component={TicketBooking}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={RootStackRoots.ticketSelection}
          component={TicketSelection}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
