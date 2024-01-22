/* eslint-disable prettier/prettier */
import React from "react";
import { Alert, Button, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";


 
const Button2 = ({title, onPress}) => {
return (
   <TouchableOpacity style = {styles.button} onPress={onPress}>
    <Text>{title}</Text>
   </TouchableOpacity>
);
};
export default React.memo(Button2);

