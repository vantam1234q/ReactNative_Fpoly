/* eslint-disable prettier/prettier */
import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

const CustomDrawer = (props) => {
    return(
        <View style={{flex:1}}>
        <DrawerContentScrollView {...props} >
            <ImageBackground 
            source={require('../../assets/image/back.png')}
            style={{padding:20}}>
                <Image 
                source={require('../../assets/image/ava.jpg')}
                style={{height:80, width: 80, borderRadius: 80, marginBottom:10}}>
                </Image>
                <Text style={{color:'#FFCC00', fontSize:18, fontWeight:'bold'}}>Nguyễn Văn Tâmm</Text>
                <Text style={{color:'black', fontSize:14}}>tamnvpd08081@fpt.edu.vn</Text>
            </ImageBackground>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
        </View>
    );
};
 export default CustomDrawer;