/* eslint-disable prettier/prettier */

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import User from "./UserScreen";
import Home from "./HomeScreen";
import { Image, View } from "react-native";
import Setting from "./SettingScreen";
const Tab = createMaterialTopTabNavigator();

const TopTab = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}    />
            <Tab.Screen name="User" component={User}     />
            <Tab.Screen name="Setting" component={Setting}     />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
export default TopTab;
