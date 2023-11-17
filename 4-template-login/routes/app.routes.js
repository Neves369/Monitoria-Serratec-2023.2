import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import React from "react";

const AppStack = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Home" component={Home} />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
