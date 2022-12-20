import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from '@/navigations/types/types';

import Home from '@/screens/HomeScreen';
import List from '@/screens/ListScreen';
import Item from '@/screens/ItemScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigation = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#95a5a6' },
      headerTitleStyle: { color: '#ffffff', fontSize: 24 },
      headerTitleAlign: 'center',
    }}
  >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen
      name="List"
      component={List}
      options={{
        headerTitle: 'List Screen',
        headerBackTitleVisible: true,
        headerBackTitle: 'Prev',
        headerTitleStyle: { fontSize: 24 },
        headerTintColor: '#e74c3c',
      }}
    />
    <Stack.Screen name="Detail" component={Item} />
  </Stack.Navigator>
);

export default StackNavigation;
