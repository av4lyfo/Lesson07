import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { foodItems } from './Data';

const Edit = ({ navigation, route }) => {
    const { name = '', calories = 0, index, setFoodItems, foodItems } = route.params || {};
    const [newName, setNewName] = useState(name);
    const [newCalories, setNewCalories] = useState(calories.toString());

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Food Name:</Text>
            <TextInput
                style={styles.input}
                value={newName}
                onChangeText={setNewName}
                placeholder="Enter food name"
            />
            <Text style={styles.label}>Calories:</Text>
            <TextInput
                style={styles.input}
                value={newCalories}
                onChangeText={setNewCalories}
                keyboardType="numeric"
                placeholder="Enter calorie value"
            />

            {/* Buttons */}
            <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flex: 1, margin: 10 }}>
                    <Button
                        title="SAVE"
                        onPress={() => {
                                let updatedItems = [...foodItems];
                                updatedItems[index] = {
                                    name: newName.trim(),
                                    calories: parseInt(newCalories),
                                };
                                setFoodItems(updatedItems);
                                navigation.goBack();

                        }}
                    />
                </View>
                <View style={{ flex: 1, margin: 10 }}>
                    <Button
                        title="DELETE"
                        onPress={() => {
                            Alert.alert('Confirm Delete', 'Are you sure you want to delete this item?', [
                                { text: 'Cancel', style: 'cancel' },
                                {
                                    text: 'Yes',
                                    onPress: () => {
                                        let updatedItems = [...foodItems];
                                        updatedItems.splice(index, 1);
                                        setFoodItems(updatedItems);
                                        navigation.goBack();
                                    },
                                },
                            ]);
                        }}
                        color="red"
                    />
                </View>
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
});

export default Edit;
