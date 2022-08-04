import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {Dimensions, SafeAreaView} from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function Top_Route() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarStyle: {backgroundColor: '#0099ff', marginTop: 30},
          tabBarActiveTintColor: 'yellow',
          tabBarInactiveTintColor: 'white',
          tabBarIndicatorStyle: {
            position: 'absolute',
            backgroundColor: 'yellow',
            elevation: 20
          },
        }}>
        <Tab.Screen
          options={{headerShown: true}}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
