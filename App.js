import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icons


import HomeScreen from './src/TabNavigationCom/MainScreen';
import NotesScreen from './src/TabNavigationCom/NotesScreen';
import ProfileScreen from './src/TabNavigationCom/ProfileScreen';
import LoginScreen from './src/LoginScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator 
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home';
        } else if (route.name === 'Notes') {
          iconName = focused ? 'sticky-note' : 'sticky-note-o';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'user-circle' : 'user-circle-o';
        }

        // Return the FontAwesome icon component
        return <FontAwesome name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'blue', // Color for the active tab
      inactiveTintColor: 'gray', // Color for inactive tabs
    }}
    >
      
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Notes" component={NotesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Simulated login logic
    setIsLoggedIn(true);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen name="HomeTabs" component={TabNavigator} />
            {/* Additional screens in your tab navigation can be added here */}
          </>
        ) : (
          <Stack.Screen
            name="Login"
            options={{ headerShown: false }}
          >
            {props => <LoginScreen {...props} onLogin={handleLogin} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

