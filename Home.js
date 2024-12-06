import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, SectionList, Button, Alert } from 'react-native';
import { foodItems as initialFoodItems } from './Data';

const Home = ({ navigation }) => {
    const [foodItems, setFoodItems] = useState(initialFoodItems);

    const renderItem = ({ item, index }) => (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() =>
                navigation.navigate('Edit', {
                    index,
                    name: item.name,
                    calories: item.calories,
                    setFoodItems,
                    foodItems,
                })
            }
        >
            <Text style={styles.textStyle}>{item.name}</Text>
            <Text style={styles.caloriesStyle}>Calories: {item.calories}</Text>
        </TouchableOpacity>
    );

    const calculateCalories = () => {
        const totalCalories = foodItems.reduce((sum, item) => sum + item.calories, 0);
        let message = `Total Calories: ${totalCalories}\n`;

        if (totalCalories > 2000) {
            message += 'Above Recommended Daily Intake for men.\n';
        } else {
            message += 'Below Recommended Daily Intake of 2000 for men.\n';
        }

        if (totalCalories > 1600) {
            message += 'Above Recommended Daily Intake for women.';
        } else {
            message += 'Below Recommended Daily Intake of 1600 for women.';
        }

        Alert.alert('Calorie Summary', message);
    };

    return (
        <View style={styles.container}>
            {/* Add Food Button */}
            <View style={styles.buttonContainer}>
                <Button
                    title="ADD FOOD"
                    onPress={() => navigation.navigate('Add', { setFoodItems, foodItems })}
                />
            </View>

            {/* Food List */}
            <StatusBar hidden={true} />
            <SectionList
                sections={[{ title: 'Food Items', data: foodItems }]}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.headerText}>{title}</Text>
                )}
            />

            {/* Calculate Calories Button */}
            <View style={styles.calculateButtonContainer}>
                <Button title="CALCULATE CALORIES" onPress={calculateCalories} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        marginBottom: 40,
        marginTop: 40,
        backgroundColor: '#e6f0fa',
    },
    buttonContainer: {
        padding: 10,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        marginBottom: 10,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#333',
        backgroundColor: '#a1c4fd',
    },
    headerText: {
        flex: 1,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    itemContainer: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#f9f9f9',
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    caloriesStyle: {
        fontSize: 18,
        color: '#555',
    },
    calculateButtonContainer: {
        padding: 10,
        backgroundColor: '#ffffff',
        borderWidth: 1,
    },
});

export default Home;
