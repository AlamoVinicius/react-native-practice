import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/HomeScreen";
import FlatListscreen from "./src/screens/FlatListscreen";


const HomeStack = createNativeStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomePage" component={HomeScreen} />
      
    </HomeStack.Navigator>
  );
};


const Tab = createBottomTabNavigator();
export default Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="FlatListscreen" component={FlatListscreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
