import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import { faUser, faListAlt } from '@fortawesome/free-regular-svg-icons';
import { faHome, faUser as faUserSolid } from '@fortawesome/free-solid-svg-icons';


import Profile from '../../pages/Profile';

import HomeStackNavigator from "../HomeStackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          
          if (route.name === 'Home') {
            iconName = focused
              ? <View >
                <FontAwesomeIcon icon={faHome} size={size} />

              </View>
              : <FontAwesomeIcon icon={faListAlt}  size={size} />;
          } else if (route.name === 'Profile') {
            iconName = focused ? <FontAwesomeIcon icon={faUserSolid} size={size}  /> : <FontAwesomeIcon icon={faUser}  size={size} />;
          }

          // You can return any component that you like here!
          return iconName;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'gray',
        inactiveTintColor: 'white',
        style: {
            paddingTop: 10
        }
      }}

    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={
          {
            tabBarLabel: ''
          }
        }
      />
      <Tab.Screen name="Profile" component={Profile}
        options={
          {
            tabBarLabel: ''
          }
        } />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;