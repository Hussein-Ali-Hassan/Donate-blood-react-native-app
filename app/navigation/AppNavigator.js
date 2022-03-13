import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import BeADonor from "../screens/BeADonor";
import RequestBlood from "../screens/RequestBlood";
import AboutScreen from "../screens/AboutScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5 name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Request Blood"
      component={RequestBlood}
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5 name="hands" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Be A Donor"
      component={BeADonor}
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5 name="hand-holding-water" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="About"
      component={AboutScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5 name="info" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
