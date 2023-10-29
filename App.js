import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import TabBarIcon from './src/components/tabBarIcon/TabBarIcon';
import Screen03 from './src/screens/Screen03';
import Screen01 from './src/screens/screen01/Screen01';
import Screen02 from './src/screens/screen02/Screen02';

const Tab = createBottomTabNavigator();

function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Screen01'
                backBehavior='initialRoute'
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: (props) => (
                        <TabBarIcon route={route} {...props} />
                    ),
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: 'rgba(27, 169, 255, 1)',
                    },
                })}
            >
                <Tab.Screen name='Screen01' component={Screen01} />
                <Tab.Screen name='Screen02' component={Screen02} />
                <Tab.Screen name='Screen03' component={Screen03} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;
