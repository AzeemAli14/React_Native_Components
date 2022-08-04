import React, {Component} from 'react';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ImagePath from '../constants/ImagePath';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();

class Tab_Route extends Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          tabBarActiveTintColor: '#00cc66',
          tabBarInactiveTintColor: 'grey',
          tabBarShowLabel: false,
          tabBarStyle:{
            position: 'absolute',
            borderRadius: 50,
            elevation: 20,
            marginHorizontal: 10
          }
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: '#00cc66',
            },
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  style={{tintColor: focused ? '#00cc66' : 'grey'}}
                  source={ImagePath.icHome}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: 'Profile',
            headerStyle: {
              backgroundColor: '#00cc66',
            },
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  style={{tintColor: focused ? '#00cc66' : 'grey'}}
                  source={ImagePath.icPerson}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    );
  }
}

export default Tab_Route;
