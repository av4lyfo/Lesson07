import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Keyboard } from 'react-native';

const Add = ({ navigation, route }) => {
    const { setFoodItems, foodItems } = route.params; // Destructure props passed from Home
    const [name, setName] = useState('');
    const [calories, setCalories] = useState('');

    return (
        <View style={styles.container}>
            <Text>Food Name:</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Enter food name"
            />
            <Text>Calories:</Text>
            <TextInput
                style={styles.input}
                value={calories}
                onChangeText={setCalories}
                keyboardType="numeric"
                placeholder="Enter calories"
            />
            <Button
                title="Add Food"
                onPress={() => {
                    // Trim input (without error handling)
                    const trimmedName = name.trim();

                    // Create the new item
                    const newItem = {
                        id: Date.now().toString(),
                        name: trimmedName,
                        calories: parseInt(calories) || 0, // Default to 0 if input is invalid
                    };

                    // Update the foodItems state
                    setFoodItems([...foodItems, newItem]);

                    // Clear the keyboard and navigate back
                    Keyboard.dismiss();
                    navigation.goBack(); // Navigate back to the Home screen
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f8f9fa',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#fff',
    },
});

export default Add;
