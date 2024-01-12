import React, { Component, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome, Login, Register, Messenger } from "../screens";
import Chat from "../screens/chat/Chat";
import UiTab from "./UiTab";
const Stack = createNativeStackNavigator();

const MyApp = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Messenger" component={Messenger} />
        <Stack.Screen name="UiTab" component={UiTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyApp;
