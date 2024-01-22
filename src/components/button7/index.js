import React from 'react';
import {styles} from './styles'
import { View, Text, TouchableOpacity } from 'react-native';

const Button5 = () => {
  const handleLoginPress = () => {
    console.log('Đăng nhập được nhấn!');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};


export default React.memo(Button5);

