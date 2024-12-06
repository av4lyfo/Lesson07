import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, SectionList, Button, Alert } from 'react-native';
import { foodItems } from './Data';

const Home = ({ navigation }) => {
    const calculateCalories = () => {
        const totalCalories = foodItems[0].data.reduce((sum, item) => sum + Number(item.calorie), 0);
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

    const renderItem = ({ item, index }) => (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() =>
                navigation.navigate('Edit', {
                    index,
                    food: item.food,
                    calorie: item.calorie,
                })
            }
        >
            <Text style={styles.textStyle}>{item.food}</Text>
            <Text style={styles.caloriesStyle}>Calories: {item.calorie}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button
                    title="ADD FOOD"
                    onPress={() => navigation.navigate('Add')}
                />
            </View>

            <StatusBar hidden={true} />
            <SectionList
                sections={[{ title: 'Food Items', data: foodItems[0].data }]}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.headerText}>{title}</Text>
                )}
            />

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

        backgroundColor: '#ffffff',
        borderWidth: 1,
        marginBottom: 10,
    },
    headerText: {
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

        backgroundColor: '#ffffff',
        borderWidth: 1,
    },
});

export default Home;
