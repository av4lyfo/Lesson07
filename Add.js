import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Keyboard } from 'react-native';
import { foodItems } from './Data'; // Import the shared data source

const Add = ({ navigation }) => {
    const [name, setName] = useState('');
    const [calories, setCalories] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Food Name:</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Enter food name"
            />
            <Text style={styles.label}>Calories:</Text>
            <TextInput
                style={styles.input}
                value={calories}
                onChangeText={setCalories}
                placeholder="Enter calorie value"
            />
            <View style={styles.buttonContainer}>
                <Button
                    title="ADD FOOD"
                    onPress={() => {
                        foodItems[0].data.push({
                            food: name.trim(),
                            calorie: calories,
                        });

                        navigation.navigate('Home');
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f8f9fa',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
        backgroundColor: '#fff',
    },
    buttonContainer: {
        marginTop: 10,
    },
});

export default Add;
