import React from "react";
import Routes from "./routes";
import { StatusBar } from "react-native";
import { AuthProvider } from "./context/auth";
import { PaperProvider, Snackbar } from 'react-native-paper';
// import { SafeAreaView } from 'react-native-safe-area-context';
import { DarkTheme, NavigationContainer } from "@react-navigation/native";

const App = () => {

  return (
    <NavigationContainer theme={DarkTheme}>
      <StatusBar translucent backgroundColor="transparent" />
        <AuthProvider>
          <PaperProvider>
            <Routes />
          </PaperProvider>
        </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
