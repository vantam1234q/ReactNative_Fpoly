/* eslint-disable prettier/prettier */
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Button, Image, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../../components/CustomerDrawer";
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
        drawerContent={props => <CustomDrawer {...props}/>}>

        <Drawer.Screen name="Home" component={HomeScreen}
        options={{
            drawerIcon :() => <Image  style = {{width:30, height : 30}}source={require('../../assets/image/ic_home.png')}></Image>
        }}
        ></Drawer.Screen>
        <Drawer.Screen name="Chat" component={Chat}
        options={{
            drawerIcon :() => <Image  style = {{width:30, height : 30}}source={require('../../assets/image/ic_chat.png')}></Image>
        }}></Drawer.Screen>
        <Drawer.Screen name="Setting" component={Setting}
        options={{
            drawerIcon :() => <Image  style = {{width:30, height : 30}}source={require('../../assets/image/ic_setting.png')}></Image>
        }}></Drawer.Screen>
        <Drawer.Screen name="Help" component={Help}
        options={{
            drawerIcon :() => <Image  style = {{width:30, height : 30}}source={require('../../assets/image/ic_help.png')}></Image>
        }}></Drawer.Screen>
        </Drawer.Navigator>
    </NavigationContainer>
    );
};
export default Lab6;