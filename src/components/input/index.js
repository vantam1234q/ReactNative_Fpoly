/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {styles} from './styles'
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

const Input = ({ placeholder }) => {
  const [text, setText] = useState('');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.inputx}
        placeholder={placeholder}
        placeholderTextColor="rgba(0, 0, 0, 0.5)"
        value={text}
        onChangeText={(inputText) => setText(inputText)}
      />
    </SafeAreaView>
  );
};

export default Input;