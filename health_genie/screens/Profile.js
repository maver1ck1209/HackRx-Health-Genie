import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileUser from './profilescreens/profile';
import History from './profilescreens/history';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
    StyleSheet,
} from 'react-native';

const Drawer = createDrawerNavigator();

export default function Profile() {
    return (
        <NavigationContainer independent={true}>
      <Drawer.Navigator
        initialRouteName="Profileuser"
        drawerPosition='left'
        drawerType="front"
        edgeWidth={100}
        hideStatusBar={false}
        overlayColor='#00000090'
        drawerStyle={{
          backgroundColor: '#e6e6e6',
          width: 250
        }}
        screenOptions={{
          headerShown: true,
          swipeEnabled: true,
          gestureEnabled: true,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#0080ff'
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold'
          }
        }}
      >
        <Drawer.Screen
          name="User Profile"
          component={ProfileUser}
          options={{
            title: 'User Profile',
            drawerIcon: ({ focused }) => (
              <FontAwesome5
                name="user"
                size={focused ? 25 : 20}
                color={focused ? '#0080ff' : '#999999'}
              />
            )
          }}
        />
        <Drawer.Screen
          name="History"
          component={History}
          options={{
            title: 'User History',
            drawerIcon: ({ focused }) => (
              <FontAwesome5
                name="clock"
                size={focused ? 25 : 20}
                color={focused ? '#0080ff' : '#999999'}
              />
            )
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10,
    }
})