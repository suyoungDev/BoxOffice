import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BoxOffice from './pages/BoxOffice';
import MovieDetail from './pages/MovieDetail';

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
    
      <NavigationContainer theme={Theme}>
        <Stack.Navigator
          options={{headerShown:false}}>
          <Stack.Screen 
            name="BoxOffice" 
            component={BoxOffice}
            options={{headerShown:false}} 
            />

          <Stack.Screen 
            name="MovieDetail"
            component={MovieDetail}
            options={{headerShown:false}} 
            />
        </Stack.Navigator>
      </NavigationContainer>
    
  );  
};

export default App;
