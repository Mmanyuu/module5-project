// Importing the Modules
import * as React from "react";
import { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { CalendarList } from "react-native-calendars";
// import Day from "react-native-calendars/src/calendar/day/basic";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import HomeScreen from "./screen/HomeScreen";
// import AgendaScreen from "./screen/AgendaScreen";

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
