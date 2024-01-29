/* eslint-disable prettier/prettier */
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Button, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomerDrawer from "../../components/customerDrawer";
import Input from "../../components/input";


function HomeScreen({navigation}) {
    return(
        <View style={{flex : 1,alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize : 20, fontWeight:'bold', color :'red'}}>Chào bạn , đây là màn hình chính</Text>
        <Input placeholder={"Moi ban nhap vao thong tin :"}></Input>
            <Button
            onPress={() => navigation.navigate('Notifications')}
            title="Go to notifications" />  
        </View>

    );
}
function NotificationsScreen({navigation}){
    return(
        <View style={{flex : 1,alignItems :'center', justifyContent:'center'}}>
          <Button onPress={() => navigation.goBack()} title="go back Home Screen"/>
        </View>
    );
}
function Chat({navigation}){
    return(
        <View style={{flex : 1,alignItems :'center', justifyContent:'center'}}>
          <Button onPress={() => navigation.goBack()} title="go back Home Screen"/>
        </View>
    );
}
function Setting({navigation}){
    return(
        <View style={{flex : 1,alignItems :'center', justifyContent:'center'}}>
          <Button onPress={() => navigation.goBack()} title="go back Home Screen"/>
        </View>
    );
}
function Help({navigation}){
    return(
        <View style={{flex : 1,alignItems :'center', justifyContent:'center'}}>
          <Button onPress={() => navigation.goBack()} title="go back Home Screen"/>
        </View>
    );
}

const Drawer = createDrawerNavigator();
const Lab6 = () => {
    return (<NavigationContainer>
        <Drawer.Navigator 
        screenOptions={{drawerActiveBackgroundColor :'#ccc'}}
        drawerContent={props => <CustomerDrawer {...props}/>}>

        <Drawer.Screen name="Home" component={HomeScreen}></Drawer.Screen>
        <Drawer.Screen name="Chat" component={Chat}></Drawer.Screen>
        <Drawer.Screen name="Setting" component={Setting}></Drawer.Screen>
        <Drawer.Screen name="Help" component={Help}></Drawer.Screen>
        </Drawer.Navigator>
    </NavigationContainer>
    );
};
export default Lab6;