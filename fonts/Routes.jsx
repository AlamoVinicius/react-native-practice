import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import infoContext from "./context";

import { Button } from "react-native";

import HomeScreen from "./src/screens/HomeScreen";
import FlatListscreen from "./src/screens/FlatListscreen";
import { Badge } from "@rneui/themed";

const HomeStack = createNativeStackNavigator();
export const HomeStackScreen = () => {
  const [badgeValue, setBadgeValue] = useState(0);

  return (
    <infoContext.Provider value={{ setBadgeValue }}>
      <HomeStack.Navigator>
        <HomeStack.Screen name="HomePage" component={HomeScreen} />
        <Tab.Screen
          name="FlatListscreen"
          component={FlatListscreen}
          options={{
            headerRight: () => (
              <>
                <Button
                  onPress={() => alert(`Existem ${badgeValue} itens na lista`)}
                  title="Info"
                  color="#47d80e"
                />
                <Badge
                  value={badgeValue}
                  status="error"
                  containerStyle={{ position: "absolute", top: 0, left: 30 }}
                />
              </>
            ),
          }}
        />
      </HomeStack.Navigator>
    </infoContext.Provider>
  );
};

const Tab = createBottomTabNavigator();
export const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
