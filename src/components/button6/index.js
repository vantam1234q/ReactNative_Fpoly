import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';

import styles from './styles'; 

const GoogleButton = () => {
  const handlePress = () => {
    console.log('Google Button pressed!');
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.buttonContainer}>
        <Image source={require('../../assets//images/google.jpg')} style={styles.icon} />
        <Text style={styles.buttonText}>Log in with your Google account</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoogleButton;
