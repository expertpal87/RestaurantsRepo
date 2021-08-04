import React from 'react';

/*--------navigation stack---------- */
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

/*--------import screen---------- */
import HomeScreen from '../Home';
import RestaurantDetail from '../RestaurantDetail';

/*-------- stack---------- */
const Stack = createStackNavigator();

//=----------- navigation component ------//
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RestaurantDetail"
          component={RestaurantDetail}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

/*-------- export default---------- */
export default Navigation;
