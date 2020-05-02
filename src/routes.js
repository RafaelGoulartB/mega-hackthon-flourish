import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();

import Page from './pages/page';
import OperatrionPage from './pages/Operation';
import UniversityPage from './pages/University';

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
          labeled={false}
          initialRouteName="Início"
          activeColor="#C6D936"
          inactiveColor="#f5f5f5"
          barStyle={{
            backgroundColor: "#244BBF",
          }}
      >
          <Tab.Screen 
            name="Ranking" 
            component={Page}
            options={{
              tabBarIcon: ({ color }) => (
                <SimpleLineIcons name="chart" size={22} color={color}/>
              ),
            }}
          />
          <Tab.Screen 
            name="Histórico" 
            component={OperatrionPage}
            options={{
              tabBarIcon: ({ color }) => (
                <FeatherIcons name="dollar-sign" size={24} color={color}/>
              ),
            }}
          />
          <Tab.Screen 
            name="Início" 
            component={Page}
            options={{
              tabBarIcon: ({ color }) => (
                <IoniconsIcons name="md-home" size={24} color={color}/>
              ),
            }}
          />
          <Tab.Screen 
            name="Recompensas" 
            component={Page}
            options={{
              tabBarIcon: ({ color }) => (
                <IoniconsIcons name="md-star-outline" size={24} color={color}/>
              ),
            }}
          />
          <Tab.Screen 
            name="Universidade" 
            component={UniversityPage}
            options={{
              tabBarIcon: ({ color }) => (
                <IoniconsIcons name="md-school" size={24} color={color}/>
              ),
            }}
          />
        </Tab.Navigator>
    </NavigationContainer>
  );
}