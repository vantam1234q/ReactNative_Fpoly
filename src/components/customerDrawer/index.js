/* eslint-disable prettier/prettier */
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { Image } from "react-native";
const CustomerDrawer = (props) => {
return(
    <View style={{flex:1}}>
        <DrawerContentScrollView {...props}>
            <ImageBackground 
            source={require('../../assets/image/back.png')}
            style = {{padding : 20}}
            >
            <Image
            source={require('../../assets/image/ava.jpg')}
            style={{height:80,width:80,borderRadius:80,marginBottom:10}}>
            </Image>
            <Text style={{fontSize : 20, color : 'red', fontWeight:'bold'}}>Tâm đẹp troaiii</Text>
            <Text style={{fontSize : 10, color : 'black'}}>vantamdzai2004@gamil.com</Text>
            </ImageBackground>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    </View>
);
};
export default CustomerDrawer;