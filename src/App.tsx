import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import StackNavigation from '@/navigations/StackNavigation';
import TabNavigation from '@/navigations/TabNavigation';

const App = () => (
  <NavigationContainer>
    {/* <StackNavigation /> */}
    <TabNavigation />
  </NavigationContainer>
);

export default App;
