import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Screen01 from './src/screens/Screen01';

const Tab = createBottomTabNavigator();

function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name='Screen01' component={Screen01} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;
