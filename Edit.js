import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { foodItems } from './Data';

const Edit = ({ navigation, route }) => {
    const { index, food, calorie } = route.params;
    const [name, SetName] = useState(food);
    const [calories, setCalories] = useState(calorie.toString());

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Food Name:</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={SetName}
                placeholder="Enter food name"
            />
            <Text style={styles.label}>Calories:</Text>
            <TextInput
                style={styles.input}
                value={calories}
                onChangeText={setCalories}
                keyboardType="numeric"
                placeholder="Enter calorie value"
            />

            <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flex: 1, margin: 10 }}>
                    <Button
                        title="SAVE"
                        onPress={() => {
                            foodItems[0].data[index].food = name.trim();
                            foodItems[0].data[index].calorie = calories;
                            navigation.navigate('Home');
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
                                        foodItems[0].data.splice(index, 1);
                                        navigation.navigate('Home');
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
