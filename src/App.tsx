import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import StackNavigation from '@/navigations/StackNavigation';

const App = () => (
  <NavigationContainer>
    <StackNavigation />
  </NavigationContainer>
);

export default App;
