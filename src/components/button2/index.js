/* eslint-disable prettier/prettier */
import React from "react";
import { Alert, Button, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";


 
const Button2 = ({title, onPress}) => {
return (
   <View style={styles.container}>
   <TouchableOpacity style = {styles.button} onPress={onPress}>
    <Text>{title}</Text>
   </TouchableOpacity>
   </View>
);
};
export default React.memo(Button2);

