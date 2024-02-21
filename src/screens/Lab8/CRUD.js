/* eslint-disable prettier/prettier */
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListUser from "./listUser"; 
import Adduser from "./addUser";
import React from "react";
const Crud = () => {
const Stack = createNativeStackNavigator();

return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="listUser" component={ListUser} />
            <Stack.Screen name="addUser" component={Adduser} />
        </Stack.Navigator>
    </NavigationContainer>
);
};
export default Crud;