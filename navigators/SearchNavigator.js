 import React from 'react';
 import { createStackNavigator } from '@react-navigation/stack';
 import Search from '../pages/Search';
 import MovieDetail from '../pages/MovieDetail';



const Stack = createStackNavigator();

function SearchNavigator(){
  return(
    <Stack.Navigator options={{headerShown:false}}>
      <Stack.Screen name="Search" 
      component={Search}
      options={{headerShown:false}} 
      />
      <Stack.Screen name="MovieDetail"
      component={MovieDetail}
      options={{headerShown:false}} 
      />
    </Stack.Navigator>
  )
}

export default SearchNavigator;