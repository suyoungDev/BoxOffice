import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import BoxOfficeNavigator from './navigators/BoxOfficeNavigator';

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
  },
};

function App(){
  return (
    <>
      <NavigationContainer theme={Theme}>
       <BoxOfficeNavigator />
      </NavigationContainer>
    </>
  );  
};

export default App;
