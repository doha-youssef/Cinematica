import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';
import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            cardStyle: { backgroundColor: 'black' },
            headerStyle: { backgroundColor: 'black' },
            headerTintColor: 'white'
          }}
        >
            <Stack.Screen name="Tab" component={TabNavigation} 
            options={{headerShown:false}}
            />
            <Stack.Screen name="Details" component={MovieDetailsScreen} />
        </Stack.Navigator>

        
    );
}

export default StackNavigator;
