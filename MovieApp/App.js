import React from "react";
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ProfileScreen from "./Screens/TabScreens/ProfileScreen.js/ProfileScreen";
import ThemeScreen from "./Screens/TabScreens/ProfileScreen.js/ThemeScreen";
import ProfileEditScreen from "./Screens/TabScreens/ProfileScreen.js/ProfileEditScreen";
import HomeScreen from "./Screens/TabScreens/HomeScreen";
import SearchScreen from "./Screens/TabScreens/SearchScreen";
import MovieDetailScreen from "./Screens/MovieDetailsScreen";

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="ThemeScreen" component={ThemeScreen} />
      <Stack.Screen name="ProfileEditScreen" component={ProfileEditScreen} />
    </Stack.Navigator>
  );
}

function TabStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabStack"
          component={TabStack}
          options={{headerShown: false}}
        />
        <Stack.Screen name="MovieDetailScreen" component={MovieDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}