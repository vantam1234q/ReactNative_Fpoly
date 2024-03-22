/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {styles} from './style';
import {Button, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Input from '../../../components/input1';
import Button1 from '../../../components/Button1';
import Button2 from '../../../components/button2';
import Button7 from '../../../components/button7';
import Button5 from '../../../components/button5';
import Button6 from '../../../components/button6';
import Seperator from '../../../components/Seperator';
import InputPass from '../../../components/InputPass';
import CheckBox from '../../../components/CheckBox';
import GoogleLogin from '../../../components/GoogleLogin';

const SigUp = ({navigation}) => {
  const [checked, setChecked] = useState(false);
  const onSignIn = () => {
    navigation.navigate('Sign In');
  };
  const onBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Text style={[styles.title1, styles.innerTittle]}>
        ĐĂNG KÝ
      </Text>
      <Text style={[styles.title2, styles.innerTittle]}>
       Tạo Tài Khoản
      </Text>
      <InputPass label={"Name"} placeholder={'Nguyen Van A'} />
      <InputPass label={"E-mail"} placeholder={'abc@gmail.com'} />
      <InputPass label={"Password"}  placeholder={'******'} />
      {/* <View style={styles.checkRow}>
       <CheckBox checked={checked} onCheck={setChecked}></CheckBox>
        <Text style={styles.checkText}>I agree with Terms & Privacy</Text>
      </View> */}
      <Button1 title={'Sign Up'}></Button1>
      <Seperator text={"Or Sign Up with"}></Seperator>
      <GoogleLogin/>
      <Text style={styles.footerText}>
      Already have an account
        <Text onPress={onSignIn} style={styles.footerLink}>
          {' '}
          Sign In
        </Text>
      </Text>
    </View>
  );
};

export default SigUp;
