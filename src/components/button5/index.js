import React from 'react';
import {styles} from './styles'
import { View, Text, TouchableOpacity } from 'react-native';

const Button5 = () => {
  const handleLoginPress = () => {
    // Xử lý sự kiện khi nút đăng nhập được nhấn
    console.log('Đăng nhập được nhấn!');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};


export default React.memo(Button5);

