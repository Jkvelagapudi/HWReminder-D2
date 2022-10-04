import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeworkInput from "../screens/HomeworkInput";
import PlansInput from "../screens/PlansInput";
import Input from "../screens/Input";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Homework') {
                        iconName = focused
                            ? 'calculator'
                            : 'calculator-outline';
                    } else if (route.name === 'Plans') {
                        iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Homework" component={HomeworkInput} options={{headerShown: false}} />
            <Tab.Screen name="Plans" component={PlansInput} options={{headerShown: false}} />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator