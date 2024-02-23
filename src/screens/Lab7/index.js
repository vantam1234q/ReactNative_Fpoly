/* eslint-disable prettier/prettier */
import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Icon from 'react-native-vector-icons/Ionicons';


import Home from "./HomeScreen";
import Setting from "./SettingScreen";
import User from "./UserScreen";

const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const TopTabs = () => {
  return (
    <TopTab.Navigator style={{marginTop:30}}>
      <TopTab.Screen name="Home" component={Home} />
      <TopTab.Screen name="Setting" component={Setting} />
      <TopTab.Screen name="User" component={User} />

    </TopTab.Navigator>
  );
}

const BottomTabs = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#FF3333',
        tabBarLabelPosition: 'beside-icon',
        tabBarLabel: ({ focused, color }) => {
          return focused ? <Text style={{ color, marginLeft: 20 }}>{route.name}</Text> : null;
        },
        tabBarIcon: ({ focused, color, size }) => {
          const iconName = route.name === 'Home' ? 'home' :
            route.name === 'Profile' ? 'person' :
              route.name === 'Favorites' ? 'heart' :
                route.name === 'Settings' ? 'settings' : '';
          return <Icon name={iconName} color={color} size={size} />;
        },
      })}
    >
      <BottomTab.Screen name="Home" component={TopTabs} />
      <BottomTab.Screen name="Profile" component={TopTabs} />
      <BottomTab.Screen name="Favorites" component={TopTabs} />

    </BottomTab.Navigator>
  );
}

export default BottomTabs;