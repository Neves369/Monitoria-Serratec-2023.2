import React from "react";
import Routes from "./routes";
import { StatusBar } from "react-native";
import { AuthProvider } from "./context/auth";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";

const App = () => {

  return (
    <NavigationContainer theme={DarkTheme}>
      <StatusBar translucent backgroundColor="transparent" />
        <AuthProvider>
          <Routes />
        </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
