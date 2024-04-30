/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/screens/Home';
import Details from './src/screens/Details';
import Favourites from './src/screens/Favourites';
import { Status } from './src/utils/constants';
import { Image } from 'react-native';
import { COLORS } from './src/utils/colors';
import CustomDrawerButton from './src/components/CustomDrawerButton';

function App(): React.JSX.Element {

  const queryClient = new QueryClient();

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();

  const tabBarItemIconStyle = { width: 20, height: 20 };

  function MainStack() {
    return (
      <Stack.Navigator screenOptions={{
        headerTintColor: COLORS.black,
      }}>
        <Stack.Screen name="AnimeTabs" component={AnimeTabs} options={{ headerTitle: 'Anime Listing', headerLeft: () => <CustomDrawerButton /> }} />
        <Stack.Screen name="Favorites" component={Favourites} options={{ headerTitle: 'Favorites', headerLeft: () => <CustomDrawerButton /> }} />
        <Stack.Screen name="Details" component={Details} options={{ headerTitle: 'Details' }} />
      </Stack.Navigator>
    );
  }

  function AnimeTabs() {
    return (
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.blue,
        tabBarLabelStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Tab.Screen
          name="Airing"
          children={() => <Home status={Status.Airing} />}
          options={{
            tabBarLabel: Status.Airing,
            tabBarIcon: () => (
              <Image
                source={require('./src/assets/Airing.png')}
                style={tabBarItemIconStyle}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Upcoming"
          children={() => <Home status={Status.Upcoming} />}
          options={{
            tabBarLabel: Status.Upcoming,
            tabBarIcon: () => (
              <Image
                source={require('./src/assets/Upcoming.png')}
                style={tabBarItemIconStyle}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Complete"
          children={() => <Home status={Status.Complete} />}
          options={{
            tabBarLabel: Status.Complete,
            tabBarIcon: () => (
              <Image
                source={require('./src/assets/Complete.png')}
                style={tabBarItemIconStyle}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  function MainDrawer() {
    return (
      <Drawer.Navigator screenOptions={{
        headerTintColor: COLORS.black,
      }}>
        <Drawer.Screen name="Anime Listing" component={MainStack} options={{ drawerLabel: 'Anime Listing', headerShown: false }} />
        <Drawer.Screen name="Favorites" component={Favourites} options={{ drawerLabel: 'Favorites', headerLeft: () => <CustomDrawerButton /> }} />
      </Drawer.Navigator>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <MainDrawer />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
