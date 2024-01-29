/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import React from 'react';
import {styles} from './styles'
import { View, Text, TouchableOpacity } from 'react-native';

const Button5 = ({onPress}) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.loginButton} onPress={onPress}>
        <Text style={styles.buttonText}>Get stated</Text>
      </TouchableOpacity>
    </View>
  );
};


export default React.memo(Button5);