/* eslint-disable prettier/prettier */
import React from 'react';
import {styles} from './styles';
import {Image, ImageBackground, Text, View} from 'react-native';
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
     
    </View>
  );
};

export default SigIn;
