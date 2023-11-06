/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import DetailsScreen from './screens/DetailsScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Home',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 18,
        },
        headerLeft: () => (
          <Icon name="home" size={24} color="black" style={{marginLeft: 10}} />
        ),
      }}
    />
    <Stack.Screen
      name="Details"
      component={DetailsScreen}
      options={{
        title: 'Details',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 18,
        },
        headerLeft: () => (
          <Icon name="info" size={24} color="black" style={{marginLeft: 10}} />
        ),
      }}
    />
  </Stack.Navigator>
);

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
      <Tab.Navigator>
        <Tab.Screen
          name="Portfolio"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Icon name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <Icon name="user" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
      <TouchableOpacity onPress={toggleDarkMode}>
        <View style={{backgroundColor: 'lightgrey', padding: 10}}>
          <Text style={{color: 'black'}}>Toggle Dark Mode</Text>
        </View>
      </TouchableOpacity>
    </NavigationContainer>
  );
};

export default App;
