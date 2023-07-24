import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Chatbot from './dietscreens/chatbot';
import Nutrition from './dietscreens/nutrition';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
    StyleSheet,
} from 'react-native';

const Drawer = createDrawerNavigator();

export default function Diet() {
    return (
        <NavigationContainer independent={true}>
      <Drawer.Navigator
        initialRouteName="Chatbot"
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
          name="Chatbot"
          component={Chatbot}
          options={{
            title: 'Balanced Diet Planner',
            drawerIcon: ({ focused }) => (
              <FontAwesome5
                name="comments"
                size={focused ? 25 : 20}
                color={focused ? '#0080ff' : '#999999'}
              />
            )
          }}
        />
        <Drawer.Screen
          name="Nutrients"
          component={Nutrition}
          options={{
            title: 'Calculate Nutrients',
            drawerIcon: ({ focused }) => (
              <FontAwesome5
                name="images"
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