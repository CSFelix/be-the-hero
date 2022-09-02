import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

// containers
import Incidents from './pages/Incidents/index.js';
import Detail from './pages/Detail/index.js';

function Routes() {
    return(
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name='Incidents' component={ Incidents } />
                <AppStack.Screen name='Detail' component={ Detail } />
            </AppStack.Navigator>

        </NavigationContainer>
    );
};

export default Routes;