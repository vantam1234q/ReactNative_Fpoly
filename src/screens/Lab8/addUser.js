/* eslint-disable prettier/prettier */
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';

const AddUser = () => {
    const [name, setName] = useState('');
    const [birthday, setBirthday] = useState('');

    const saveUser = async () => {
        const url = "https://65d5ababf6967ba8e3bc2bbb.mockapi.io/project";
        try {
            let response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, birthday }),
            });
            let result = await response.json();
            if (response.ok) {
                console.warn("User added successfully");
                // Replace console.warn with an appropriate notification if needed
            } else {
                // Handle errors from the server, such as notifying the user
                console.warn("Failed to add user");
            }
        } catch (error) {
            // Handle errors when the request cannot be sent
            console.error("Error adding user:", error);
        }
    };

    return (
        <View style={styles.modelContent}>
            <TextInput
                style={styles.input}
                placeholder="Enter name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter birthday"
                value={birthday}
                onChangeText={setBirthday}
            />
            <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.button} onPress={saveUser}>
                    <Text style={styles.buttonText}>Add New</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default AddUser;