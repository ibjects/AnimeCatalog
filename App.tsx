import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/screens/Home';
import Details from './src/screens/Details';
import Favourites from './src/screens/Favourites';
import { Status } from './src/utils/constants';

function App(): React.JSX.Element {

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();

  const hideHeaderCompletelyOptions = {
    headerShown: false
  }

  function MainStack() {
    return (
      <Stack.Navigator screenOptions={hideHeaderCompletelyOptions}>
        <Stack.Screen name="AnimeTabs" component={AnimeTabs} />
        <Stack.Screen name="Favorites" component={Favourites} options={{ headerTitle: 'Favorites' }} />
        <Stack.Screen name="Details" component={Details} options={{ headerTitle: 'Details' }} />
      </Stack.Navigator>
    );
  }

  function AnimeTabs() {
    return (
      <Tab.Navigator screenOptions={hideHeaderCompletelyOptions}>
        <Tab.Screen
          name="Airing"
          children={() => <Home status={Status.Airing} />}
          options={{ tabBarLabel: Status.Airing }}
        />
        <Tab.Screen
          name="Upcoming"
          children={() => <Home status={Status.Upcoming} />}
          options={{ tabBarLabel: Status.Upcoming }}
        />
        <Tab.Screen
          name="Complete"
          children={() => <Home status={Status.Complete} />}
          options={{ tabBarLabel: Status.Complete }}
        />
      </Tab.Navigator>
    );
  }

  function MainDrawer() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Anime Listing" component={MainStack} options={{ headerTitle: 'Anime Listing', drawerLabel: 'Anime Listing' }} />
        <Drawer.Screen name="Favorites" component={Favourites} options={{ drawerLabel: 'Favorites' }} />
      </Drawer.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <MainDrawer />
    </NavigationContainer>
  );
}

export default App;
