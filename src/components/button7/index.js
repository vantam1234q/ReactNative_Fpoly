/* eslint-disable prettier/prettier */
import React from "react";
import { Alert, Button, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";


 
const Button7 = ({title, onPress}) => {
    const handlePress = () =>{
        console.log("Test even button ")
    }
return (
   <TouchableOpacity style = {styles.container} onPress={onPress}>
    <Text style={styles.textContent}>{title}</Text>
   </TouchableOpacity>
);
};
export default React.memo(Button7);