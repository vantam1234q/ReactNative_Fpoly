/* eslint-disable prettier/prettier */
import React from 'react';
import {styles} from './styles';
import {Image, ImageBackground, Pressable, Text, View} from 'react-native';
import Input from '../../../components/input1';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Button1 from '../../../components/Button1';
import Button2 from '../../../components/button2';

const SigIn = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.img}
        source={require('../../../assets/image/maxresdefault.jpg')}></Image>
        <Text style={styles.title}>Welcome back !</Text>
        <Input placeholder={"abc@gmai.com"}></Input>
        <Input placeholder={"*****"}/>
        <Button1 title={"Log In"}></Button1>
        <Text style={[styles.title1, styles.innerTitleOr]}>OR</Text>
        <View style={styles.container1}>
        <Text style={styles.title2 }>Don't have an account? </Text>
        <Button2 title={"Sign Up"}></Button2>
        </View>
        
    </View>
  );
};

export default SigIn;
