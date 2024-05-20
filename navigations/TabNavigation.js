import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import SearchScreen from '../screens/SearchScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text } from 'react-native';
import FavoritesScreen from '../screens/FavoritesScreen';

const Tab = createMaterialBottomTabNavigator();

const CustomLabel = ({ text, style }) => (
  <Text style={style}>{text}</Text>
);

const styles = StyleSheet.create({
  homeLabel: {
    fontSize: 14, 
    fontWeight: 'bold', 
  },
  aboutLabel: {
    fontSize: 14,
    fontWeight: 'bold', 
  },
  searchLabel: {
    fontSize: 14,
    fontWeight: 'bold', 
  },
});

const TabNavigation = () => {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: 'black', color: 'black' }} activeColor='white' inactiveColor='grey' shifting={true}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ 
          tabBarLabel: <CustomLabel text="Home" style={styles.homeLabel} />,
          tabBarIcon: ({ color }) => (
            <Icon name='home' size={24} color={color} />
          ), 
          tabBarColor: 'yellow'
        }}
      />
      <Tab.Screen 
        name="Favorites" 
        component={FavoritesScreen} 
        options={{ 
          tabBarLabel: <CustomLabel text="Favorites" style={styles.aboutLabel} />,
          tabBarIcon: ({ color }) => (
            <Icon name='heart' size={24} color={color} />
          )
        }}
      />
      <Tab.Screen 
        name="Search" 
        component={SearchScreen} 
        options={{ 
          tabBarLabel: <CustomLabel text="Search" style={styles.searchLabel} />,
          tabBarIcon: ({ color }) => (
            <Icon name='magnify' size={24} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
