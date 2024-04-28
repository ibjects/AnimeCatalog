import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/screens/Home';
import Details from './src/screens/Details';
import Favourites from './src/screens/Favourites';

function App(): React.JSX.Element {

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();

  function MainStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="AnimeTabs" component={AnimeTabs} options={{ headerTitle: 'Anime Listing' }} />
        <Stack.Screen name="Favorites" component={Favourites} options={{ headerTitle: 'Favorites' }} />
        <Stack.Screen name="Details" component={Details} options={{ headerTitle: 'Details' }} />
      </Stack.Navigator>
    );
  }

  function AnimeTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Airing"
          children={() => <Home status="airing" />}
          options={{ tabBarLabel: 'Airing' }}
        />
        <Tab.Screen
          name="Complete"
          children={() => <Home status="complete" />}
          options={{ tabBarLabel: 'Complete' }}
        />
        <Tab.Screen
          name="Upcoming"
          children={() => <Home status="upcoming" />}
          options={{ tabBarLabel: 'Upcoming' }}
        />
      </Tab.Navigator>
    );
  }

  function MainDrawer() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Anime" component={MainStack} options={{ drawerLabel: 'Anime & Favorites' }} />
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
