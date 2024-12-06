import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Add from './Add';
import Edit from './Edit';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{ title: 'Calorie Tracker'}} />
                <Stack.Screen name="Add" component={Add} options={{ title: 'Add Food' }} />
                <Stack.Screen name="Edit" component={Edit} options={{ title: 'Edit Food' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
