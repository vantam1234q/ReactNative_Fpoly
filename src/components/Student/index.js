/* eslint-disable prettier/prettier */
import { Text, View } from "react-native";
import {styles} from './styles';
export default function Student({name, address, phone}) {
    return(
        <View style={styles.container}>
            <Text style={styles.Text}>Name : {name}</Text>
            <Text style={styles.Text}>Address : {address}</Text>
            <Text style={styles.Text}> Phone : {phone}</Text>
        </View>
    );
};