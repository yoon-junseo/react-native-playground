import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Mail, Meet, Settings } from '@/screens/TabScreens';

const Tab = createBottomTabNavigator();

const TabNavigation = () => (
  <Tab.Navigator initialRouteName="Settings">
    <Tab.Screen name="Mail" component={Mail} />
    <Tab.Screen name="Meet" component={Meet} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
);

export default TabNavigation;
