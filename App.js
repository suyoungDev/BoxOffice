import React from 'react';
import BoxOffice from './pages/BoxOffice';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
  },
};

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer theme={Theme}>
        <Stack.Navigator>
          <Stack.Screen 
            name="Box Office" 
            component={BoxOffice} 
            options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );  
};

export default App;
