/* eslint-disable prettier/prettier */
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./HomeScreen";
import User from "./UserScreen";
import { Image, View } from "react-native";
import Setting from "./SettingScreen";
import { FaLeaf } from "react-icons/fa";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const topTab = createMaterialTopTabNavigator();
const Tab = createBottomTabNavigator();
const Lab7 = () => {
return(
        <NavigationContainer>
            <Tab.Navigator 
            screenOptions={{
                headerShown: false,
            }}>
                <Tab.Screen name="Home" component={Home}
                options={{
                tabBarIcon:({forcused}) => {
                    return(
                        <View>
                            <Image
                             source={require('../../assets/image/ic_home.png')}
                             resizeMode="contain"
                             style={{width : 20}}
                            >
                            </Image>
                        </View>
                    );
                }
                }}/>
                <Tab.Screen name="User" component={User}
                options={{
                    tabBarIcon:({forcused}) => {
                        return(
                            <View>
                                <Image
                                 source={require('../../assets/image/ic_user.png')}
                                 resizeMode="contain"
                                 style={{width : 20}}
                                >
                                </Image>
                            </View>
                        );
                    }
                    }}
                />
                   <Tab.Screen name="Settung" component={Setting}
                options={{
                    tabBarIcon:({forcused}) => {
                        return(
                            <View>
                                <Image
                                 source={require('../../assets/image/ic_setting.png')}
                                 resizeMode="contain"
                                 style={{width : 20}}
                                >
                                </Image>
                            </View>
                        );
                    }
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
)
};
    
export default Lab7;