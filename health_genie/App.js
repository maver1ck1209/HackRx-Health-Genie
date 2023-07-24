import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Stats from './screens/Stats';
import Medical from './screens/Medical';
import Diet from './screens/Diet';
import Profile from './screens/Profile';


import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

//Screen
import Login from  './screens/Login';
import SignUp from  './screens/SignUp';
import Welcome from  './screens/Welcome';



/* export default function App() {
  return <Notification />;
} */

// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();
// const Tab = createMaterialTopTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === 'Stats') {
              iconName = 'chart-bar';
              size = focused ? 25 : 20;
              // color = focused ? '#f0f' : '#555';
            } else if (route.name === 'Diet') {
              iconName = 'lemon';
              size = focused ? 25 : 20;
              // color = focused ? '#f0f' : '#555';
            } else if (route.name === 'Medical') {
              iconName = 'hospital';
              size = focused ? 25 : 20;
              // color = focused ? '#f0f' : '#555';
            } else if (route.name === 'Profile') {
              iconName = 'user';
              size = focused ? 25 : 20;
              // color = focused ? '#f0f' : '#555';
            }
            return (
              <FontAwesome5
                name={iconName}
                size={size}
                color={color}
              />
            )
          }
        })}
        tabBarOptions={{
          activeTintColor: '#f0f',
          inactiveTintColor: '#555',
          activeBackgroundColor: '#fff',
          inactiveBackgroundColor: '#999',
          showLabel: true,
          labelStyle: { fontSize: 14 },
          showIcon: true,
        }}
        activeColor='#f0edf6'
        inactiveColor='#3e2465'
        barStyle={{ backgroundColor: '#694fad' }}
      >
        <Tab.Screen
          name="Stats"
          component={Stats}
          options={{ tabBarBadge: 3 }}
        />
        <Tab.Screen
          name="Diet"
          component={Diet}
        />
        <Tab.Screen
          name="Medical"
          component={Medical}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;