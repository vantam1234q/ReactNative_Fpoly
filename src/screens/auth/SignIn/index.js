/* eslint-disable prettier/prettier */
import React from 'react';
import {styles} from './styles';
import {Image, ImageBackground, Pressable, Text, View} from 'react-native';
import Input from '../../../components/input1';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Button1 from '../../../components/Button1';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';
import InputPass from '../../../components/InputPass';
import  Home from '../../app/Home';


const SigIn = ({navigation}) => {
  const onSignUp = () => {
    navigation.navigate('Sign Up');
  };
  const onBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
        <Text style={styles.title}>CHÀO MỪNG BẠN</Text>
        <Text style={styles.title1}>Đăng nhập tài khoản</Text>
        <InputPass label={"E-mail"}  placeholder={"abc@gmai.com"}></InputPass>
        <InputPass label={"Password"} placeholder={"*****"}/>
        <Button1 onPress={() => navigation.navigate('Home')} title={"Log In"}></Button1>
      <Seperator text={"Or Sign In With"}></Seperator>
       <GoogleLogin/>
       <Text style={styles.footerText}>
        Don't have an account?
        <Text onPress={onSignUp} style={styles.footerLink}>
          {' '}
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

export default SigIn;
