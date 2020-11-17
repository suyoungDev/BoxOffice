import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BoxOffice from '../pages/BoxOffice';
import MovieDetail from '../pages/MovieDetail';



const Stack = createStackNavigator();

function BoxOfficeNavigator(){
  return(
    <Stack.Navigator options={{headerShown:false}}>
      <Stack.Screen name="BoxOffice" 
      component={BoxOffice}
      options={{headerShown:false}} 
      />
      <Stack.Screen name="MovieDetail"
      component={MovieDetail}
      options={{headerShown:false}} 
      />
    </Stack.Navigator>
  )
}

export default BoxOfficeNavigator;